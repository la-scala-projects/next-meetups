import { useRouter } from 'next/router';
import { getEventById } from '@/mocks/mock-data';
import EventSummary from '@/components/event-detail/EventSummary';
import EventLogistics from '@/components/event-detail/EventLogistics';
import EventContent from '@/components/event-detail/EventContent';
import ErrorAlert from '@/components/ui/ErrorAlert';

const EventDetailPage = () => {
  const router = useRouter();
  const id = router.query.eventId as string;
  const event = getEventById(id);

  return event ? (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        image={event.image}
        imageAlt={event.title}
        address={event.location}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  ) : (
    <ErrorAlert>
      <p>No event found!</p>
    </ErrorAlert>
  );
};

export default EventDetailPage;
