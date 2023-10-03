import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '@/mocks/mock-data';
import Link from 'next/link';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return <EventList events={featuredEvents} />;
};

export default HomePage;
