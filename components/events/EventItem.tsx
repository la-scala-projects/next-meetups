import { FC } from 'react';
import { Event } from '@/types/types';
import classes from './EventItem.module.css';
import Button from '@/components/ui/Button';
import DateIcon from '@/components/icons/DateIcon';
import AddressIcon from '@/components/icons/AddressIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

interface EventItemProps {
  event: Event;
}

const EventItem: FC<EventItemProps> = ({ event }) => {
  const humanReadableDate = new Date(event.date).toLocaleDateString('en-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = event.location.replace(', ', '\n');

  return (
    <li className={classes.item}>
      <img src={'/' + event.image} alt={event.title} />
      <div className={classes.content}>
        <div>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${event.id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
