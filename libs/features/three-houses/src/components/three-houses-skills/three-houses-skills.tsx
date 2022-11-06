import { SkillMap } from '@fepmu/data/three-houses';

export interface Props {
  skills: SkillMap;
}

const translate: { [key: string]: string } = {
  armorProficiency: 'Armor',
  axeProficiency: 'Axe',
  bowProficiency: 'Bow',
  brawlingProficiency: 'Brawling',
  faithProficiency: 'Faith',
  flyingProficiency: 'Flying',
  lanceProficiency: 'Lance',
  reasonProficiency: 'Reason',
  ridingProficiency: 'Riding',
  swordProficiency: 'Sword',
};

export function ThreeHousesSkills(props: Props) {
  const { skills } = props;

  return (
    <ul className="grid grid-cols-5 text-sm justify-items-end">
      {Array.from(skills.entries()).map(([skill, count]) => {
        const text = translate[skill] as string;
        return (
          <li key={skill}>
            {text} {count}
          </li>
        );
      })}
    </ul>
  );
}

export default ThreeHousesSkills;
