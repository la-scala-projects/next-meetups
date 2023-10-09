import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import classes from './Button.module.css';

interface ButtonProps extends PropsWithChildren {
  link?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = props => {
  return props.link ? (
    <Link href={props.link} className={classes.btn}>
      {props.children}
    </Link>
  ) : (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
