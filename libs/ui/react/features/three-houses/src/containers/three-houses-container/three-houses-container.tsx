import { Pick, mockPicks } from '@fepmu/data/three-houses';
import { UnitList } from '@fepmu/ui/react/unit-list';
import { useState } from 'react';
import ThreeHousesForm from '../../components/three-houses-form/three-houses-form';
import { Button } from '@chakra-ui/react';

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
  const { picks } = state;

  return (
    <div className="p-4 flex flex-col space-y-4 md:w-3/5 lg:w-2/5 md:mx-auto">
      <ThreeHousesForm />
      <UnitList picks={picks}>Selected units</UnitList>
      {picks.length > 0 ? (
        <div className="flex">
          <Button className="grow" size={'lg'}>
            Copy to clipboard
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ThreeHousesContainer;
