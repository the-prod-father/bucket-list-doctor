'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { FaUpload, FaImage as FaImageIcon, FaTimes, FaSpinner, FaCompress } from 'react-icons/fa';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  description?: string;
}

// Compress image using Canvas API
async function compressImage(file: File, maxSizeMB: number = 4.5): Promise<File> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    img.onload = () => {
      // Calculate new dimensions - reduce if image is very large
      let { width, height } = img;
      const maxDimension = 2000; // Max width/height

      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }
      }

      canvas.width = width;
      canvas.height = height;

      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Draw image on canvas
      ctx.drawImage(img, 0, 0, width, height);

      // Try different quality levels to get under max size
      const tryCompress = (quality: number) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Failed to compress image'));
              return;
            }

            const sizeInMB = blob.size / (1024 * 1024);

            // If still too large and quality can be reduced, try again
            if (sizeInMB > maxSizeMB && quality > 0.1) {
              tryCompress(quality - 0.1);
              return;
            }

            // Create new file from blob
            const compressedFile = new File([blob], file.name.replace(/\.[^.]+$/, '.jpg'), {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });

            resolve(compressedFile);
          },
          'image/jpeg',
          quality
        );
      };

      // Start with 90% quality
      tryCompress(0.9);
    };

    img.onerror = () => reject(new Error('Failed to load image for compression'));
    img.src = URL.createObjectURL(file);
  });
}

export default function ImageUpload({ value, onChange, label, description }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [compressing, setCompressing] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string>(value || '');
  const [previewAspect, setPreviewAspect] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPreview(value || '');
    if (typeof window !== 'undefined' && value) {
      const img = new window.Image();
      img.onload = () => {
        if (img.naturalWidth && img.naturalHeight) {
          setPreviewAspect(img.naturalWidth / img.naturalHeight);
        }
      };
      img.onerror = () => setPreviewAspect(null);
      img.src = value;
    } else {
      setPreviewAspect(null);
    }
  }, [value]);

  const handleUpload = useCallback(async (file: File) => {
    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPEG, PNG, GIF, or WebP)');
      return;
    }

    setError(null);

    // Check if file needs compression (over 5MB)
    const maxSize = 5 * 1024 * 1024;
    let fileToUpload = file;

    if (file.size > maxSize) {
      setCompressing(true);
      try {
        const originalSizeMB = (file.size / (1024 * 1024)).toFixed(1);
        fileToUpload = await compressImage(file);
        const newSizeMB = (fileToUpload.size / (1024 * 1024)).toFixed(1);
        console.log(`Image compressed: ${originalSizeMB}MB → ${newSizeMB}MB`);
      } catch (compressError) {
        setCompressing(false);
        setError(`Failed to compress image: ${compressError instanceof Error ? compressError.message : 'Unknown error'}`);
        return;
      }
      setCompressing(false);
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', fileToUpload);

      const response = await fetch('/api/upload/image', {
        method: 'POST',
        body: formData,
      });

      const raw = await response.text();
      let data: any = null;
      if (raw) {
        try {
          data = JSON.parse(raw);
        } catch {
          data = null;
        }
      }

      if (!response.ok) {
        const message =
          (data && typeof data === 'object' && data.error) ||
          raw ||
          `Failed to upload image (status ${response.status})`;
        throw new Error(message);
      }

      if (!data || typeof data !== 'object' || !data.url) {
        throw new Error('Unexpected response from upload service.');
      }

      setPreview(data.url as string);
      onChange(data.url as string);
      setPreviewAspect(null);
    } catch (err) {
      console.error('Upload error:', err);
      setError(err instanceof Error ? err.message : 'Failed to upload image');
    } finally {
      setUploading(false);
    }
  }, [onChange]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files[0]);
    }
  }, [handleUpload]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files[0]);
    }
  };

  const handleRemove = () => {
    setPreview('');
    onChange('');
    setError(null);
    setPreviewAspect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
        onChange={handleChange}
        className="hidden"
      />

      {/* Preview or Upload Area */}
      {preview ? (
        <div className="relative group">
          <div
            className="relative w-full rounded-lg border-2 border-gray-300 bg-gray-100 overflow-hidden"
            style={{ aspectRatio: previewAspect || 16 / 9 }}
          >
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 512px, 100vw"
              unoptimized={preview.startsWith('data:')}
              onLoadingComplete={(img) => {
                if (img.naturalWidth && img.naturalHeight) {
                  setPreviewAspect(img.naturalWidth / img.naturalHeight);
                }
              }}
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all rounded-lg flex items-center justify-center">
            <button
              type="button"
              onClick={handleRemove}
              className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 text-white p-3 rounded-full hover:bg-red-600"
              title="Remove image"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}
          className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
            dragActive ? 'border-brand-blue bg-blue-50' : 'border-gray-300 hover:border-brand-blue hover:bg-gray-50'
          } ${(uploading || compressing) ? 'pointer-events-none opacity-60' : ''}`}
        >
          {compressing ? (
            <div className="flex flex-col items-center justify-center space-y-3">
              <FaCompress className="w-12 h-12 text-brand-purple animate-pulse" />
              <p className="text-gray-600 font-medium">Compressing large image...</p>
              <p className="text-sm text-gray-500">This may take a moment</p>
            </div>
          ) : uploading ? (
            <div className="flex flex-col items-center justify-center space-y-3">
              <FaSpinner className="w-12 h-12 text-brand-blue animate-spin" />
              <p className="text-gray-600 font-medium">Uploading image...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="p-4 bg-brand-blue bg-opacity-10 rounded-full">
                <FaImageIcon className="w-8 h-8 text-brand-blue" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900 mb-1">
                  Drag & drop an image here
                </p>
                <p className="text-sm text-gray-500">or click to browse</p>
              </div>
              <p className="text-xs text-gray-400">
                Supports: JPEG, PNG, GIF, WebP (large images auto-compressed)
              </p>
            </div>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
}
