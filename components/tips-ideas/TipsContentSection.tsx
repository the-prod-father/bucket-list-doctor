import React from 'react';

interface TipsContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function TipsContentSection({ title, children, className = '' }: TipsContentSectionProps) {
  return (
    <section className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8 ${className}`}>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-brand-teal">
        {title}
      </h2>
      <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
        {children}
      </div>
    </section>
  );
}

interface TipsSubsectionProps {
  title: string;
  children: React.ReactNode;
}

export function TipsSubsection({ title, children }: TipsSubsectionProps) {
  return (
    <div className="mb-4 sm:mb-6">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h3>
      <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
        {children}
      </div>
    </div>
  );
}

interface TipsTipProps {
  children: React.ReactNode;
}

export function TipsTip({ children }: TipsTipProps) {
  return (
    <div className="mb-4 p-4 bg-gradient-to-r from-brand-teal/10 to-brand-blue/10 rounded-lg border-l-4 border-brand-teal">
      <p className="text-gray-800 leading-relaxed">{children}</p>
    </div>
  );
}

