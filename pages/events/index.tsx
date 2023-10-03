import { getAllEvents } from '@/mocks/mock-data';
import EventList from '@/components/events/EventList';

const AllEventsPage = () => {
  const allEvents = getAllEvents();

  return (
    <div>
      <h1>All Events</h1>
      <EventList events={allEvents} />
    </div>
  );
};

export default AllEventsPage;
