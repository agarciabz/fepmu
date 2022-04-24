import { Pick } from '@fepmu/data/three-houses';

/* eslint-disable-next-line */
export interface UnitProps {
  pick: Pick;
}

export function Unit(props: UnitProps) {
  const { unit, class: unitClass } = props.pick;
  return (
    <div className="bg-neutral-50 p-2 rounded-lg">
      <span className="font-bold">{unit.name}</span>-{unitClass?.name}
      {}
    </div>
  );
}

export default Unit;
