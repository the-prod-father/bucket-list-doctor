import AnimatedBrainHero from '@/components/home/AnimatedBrainHero';
import ValueProp from '@/components/home/ValueProp';
import BookShowcase from '@/components/home/BookShowcase';
import AboutSection from '@/components/home/AboutSection';

export default function Home() {
  return (
    <>
      <AnimatedBrainHero />
      <ValueProp />
      <BookShowcase />
      <AboutSection />
    </>
  );
}
