import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '@/mocks/mock-data';
import Link from 'next/link';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>The Home Page</h1>
      <Link href="/events">All Events</Link>
      <div>
        <EventList events={featuredEvents} />
      </div>
    </div>
  );
};

export default HomePage;
