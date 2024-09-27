import Navigation from '@/components/navigation';
import { Claims, getSession } from '@auth0/nextjs-auth0';

export default async function PlantsLayout({
                                             children // will be a page or nested layout
                                           }: {
  children: React.ReactNode
}) {
  const session = await getSession();
  const user: Claims | undefined = session?.user;

  return (
    <section>
      <Navigation user={user} />
      {children}
    </section>
  );
}