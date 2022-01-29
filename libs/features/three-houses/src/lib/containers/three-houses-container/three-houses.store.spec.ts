import { getClass, getUnit } from '@fepmu/data/three-houses';
import { ThreeHousesStore } from './three-houses.store';
import { TuiNotificationsService } from '@taiga-ui/core';

describe('Three Houses logic', () => {
  let store: ThreeHousesStore;

  beforeEach(() => {
    store = new ThreeHousesStore({} as TuiNotificationsService);
  });

  it('getExclusiveClasses', () => {
    const unit = getUnit('edelgard');
    const expectedClass = [getClass('emperor')];

    const exclusiveClass = store.getExclusiveClasses(unit);

    expect(expectedClass).toEqual(exclusiveClass);
  });
});
