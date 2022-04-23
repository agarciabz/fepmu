import { Pick } from '@fepmu/data/three-houses';
import styles from './unit.module.scss';

/* eslint-disable-next-line */
export interface UnitProps {
  pick: Pick;
}

export function Unit(props: UnitProps) {
  const { unit, class: unitClass } = props.pick;
  return (
    <div className={styles['container']}>
      <span className={styles['unit-name']}>{unit.name}</span>-{unitClass?.name}
      {}
    </div>
  );
}

export default Unit;
