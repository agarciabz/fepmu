import { Pick, mockPicks } from '@fepmu/data/three-houses';
import { UnitList } from '@fepmu/ui/react/unit-list';
import { useState } from 'react';
import ThreeHousesForm from '../../components/three-houses-form/three-houses-form';

import styles from './three-houses-container.module.scss';

/* eslint-disable-next-line */
export interface ThreeHousesContainerProps {}

export interface State {
  picks: Pick[];
}

export function ThreeHousesContainer(props: ThreeHousesContainerProps) {
  const [state] = useState<State>({
    picks: mockPicks,
  });

  return (
    <div className={styles['container']}>
      <ThreeHousesForm />
      <UnitList picks={state.picks} />
    </div>
  );
}

export default ThreeHousesContainer;
