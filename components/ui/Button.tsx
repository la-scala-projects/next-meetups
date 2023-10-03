import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import classes from './Button.module.css';

interface ButtonProps extends PropsWithChildren {
  link: string;
}

const Button: FC<ButtonProps> = props => {
  return (
    <Link href={props.link} className={classes.btn}>
      {props.children}
    </Link>
  );
};

export default Button;
