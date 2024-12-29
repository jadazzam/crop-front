import Navigation from '@/components/navigation';

export default function PlantsLayout({
                                       children
                                     }: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navigation />
      {children}
    </section>
  );
}