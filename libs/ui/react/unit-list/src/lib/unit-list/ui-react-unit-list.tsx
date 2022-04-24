import { Pick } from '@fepmu/data/three-houses';
import Unit from '../unit/unit';

/* eslint-disable-next-line */
export interface UiReactUnitListProps {
  picks: Pick[];
  children?: React.ReactNode;
}

export function UnitList(props: UiReactUnitListProps) {
  const { picks } = props;

  return (
    <div className="px-2 py-2 rounded-lg">
      <div className="pb-2">{props.children}</div>
      <div className="flex flex-col space-y-2">
        <ul>
          {picks.map((pick) => (
            <Unit pick={pick} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UnitList;
