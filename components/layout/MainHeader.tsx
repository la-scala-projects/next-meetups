import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import classes from './MainHeader.module.css';

const MainHeader: FC<PropsWithChildren> = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Next Meetups</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
