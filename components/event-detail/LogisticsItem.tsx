import classes from './LogisticsItem.module.css';
import { FC, JSX, PropsWithChildren } from 'react';

interface LogisticsItemProps extends PropsWithChildren {
  icon: () => JSX.Element;
}

const LogisticsItem: FC<LogisticsItemProps> = ({ icon, children }) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>{icon()}</span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};

export default LogisticsItem;
