import styles from './unit.module.scss';

/* eslint-disable-next-line */
export interface UnitProps {}

export function Unit(props: UnitProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Unit!</h1>
    </div>
  );
}

export default Unit;
