import styles from './ui-react-unit-list.module.scss';

/* eslint-disable-next-line */
export interface UiReactUnitListProps {}

export function UnitList(props: UiReactUnitListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiReactUnitList!</h1>
    </div>
  );
}

export default UnitList;
