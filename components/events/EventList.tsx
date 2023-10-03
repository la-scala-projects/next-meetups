import { Events } from '@/types/types';
import { FC } from 'react';
import EventItem from '@/components/events/EventItem';
import classes from './EventList.module.css';

interface EventListProps {
  events: Events;
}

const EventList: FC<EventListProps> = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map(event => {
        return <EventItem key={event.id} event={event} />;
      })}
    </ul>
  );
};

export default EventList;
