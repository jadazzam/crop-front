import Navigation from '@/components/navigation';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function PlantsLayout({
                                       children // will be a page or nested layout
                                     }: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
      <section>
        <Navigation>
          <div className="px-5 md:px-6 lg:px-8">
            {children}
          </div>
        </Navigation>
      </section>
    </UserProvider>
  );
}