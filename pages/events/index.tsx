import { getAllEvents } from '@/mocks/mock-data';
import EventList from '@/components/events/EventList';

const AllEventsPage = () => {
  const allEvents = getAllEvents();

  return <EventList events={allEvents} />;
};

export default AllEventsPage;
