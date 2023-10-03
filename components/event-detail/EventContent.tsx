import classes from './EventContent.module.css';
import { FC, PropsWithChildren } from 'react';

const EventContent: FC<PropsWithChildren> = ({ children }) => {
  return <section className={classes.content}>{children}</section>;
};

export default EventContent;
