import { Pick } from '@fepmu/data/three-houses';
import Unit from '../unit/unit';
import styles from './ui-react-unit-list.module.scss';

/* eslint-disable-next-line */
export interface UiReactUnitListProps {
  picks: Pick[];
}

export function UnitList(props: UiReactUnitListProps) {
  const { picks } = props;

  return (
    <div className={styles['container']}>
      <h1>Unit list</h1>
      <ul>
        {picks.map((pick) => (
          <Unit pick={pick} />
        ))}
      </ul>
    </div>
  );
}

export default UnitList;
