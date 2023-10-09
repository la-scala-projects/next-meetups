import Link from 'next/link';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '@/mocks/mock-data';
import EventList from '@/components/events/EventList';
import pages from '@/pages';
import ResultsTitle from '@/components/events/ResultsTitle';
import Button from '@/components/ui/Button';
import ErrorAlert from '@/components/ui/ErrorAlert';

const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  if (typeof filteredData === 'string') {
    router.push(`/events/${filteredData}`);
  }

  const numYear = +filteredData[0];
  const numMonth = +filteredData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2021 ||
    numMonth < 0 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please, adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  const date = new Date(numYear, numMonth - 1);

  return filteredEvents.length > 0 ? (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  ) : (
    <>
      <ErrorAlert>
        <p>No events found for selected month and year.</p>
      </ErrorAlert>
      <div className="center">
        <Button link="/events">Show All Events</Button>
      </div>
    </>
  );
};

export default FilteredEventsPage;
