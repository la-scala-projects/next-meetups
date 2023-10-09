import classes from './ResultsTitle.module.css';
import Button from '@/components/ui/Button';
import { FC } from 'react';

interface ResultsTitleProps {
  date: Date;
}

const ResultsTitle: FC<ResultsTitleProps> = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
