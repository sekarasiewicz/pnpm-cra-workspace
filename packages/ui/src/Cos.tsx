import styles from './Cos.module.css';
import s from './Cos.module.scss';
import {PropsWithChildren} from "react";

export const Cos = ({children}: PropsWithChildren) => {
    console.log('styles', s);
  return (
    <div>
      <h1 className={styles.cosWarning}>AAAA</h1>
        <div className={s.cos}>
      <h1>SCSS</h1>
        </div>
        {children}
    </div>
  )
}