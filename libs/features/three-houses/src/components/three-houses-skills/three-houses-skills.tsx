import { Box, HStack, Image } from '@chakra-ui/react';
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
    <div className="grid grid-cols-5 text-sm gap-x-6 gap-y-3 ">
      {Array.from(skills.entries()).map(([skill, count]) => {
        const skillName = translate[skill];
        const img = `assets/icons/skills/${skillName.toLowerCase()}.png`;
        return (
          <HStack key={skill}>
            <img className="w-8" src={img} alt={skillName} />{' '}
            <span className="text-xl">{count}</span>
          </HStack>
        );
      })}
    </div>
  );
}

export default ThreeHousesSkills;
