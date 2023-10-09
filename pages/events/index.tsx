import { getAllEvents } from '@/mocks/mock-data';
import EventList from '@/components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';
import { useRouter } from 'next/router';

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const eventsSearchHandler = (year: string, month: string) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventsSearch onSearch={eventsSearchHandler} />
      <EventList events={allEvents} />
    </>
  );
};

export default AllEventsPage;
