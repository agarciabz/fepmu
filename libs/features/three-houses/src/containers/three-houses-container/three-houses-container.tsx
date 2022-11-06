import { useEffect, useState } from 'react';
import { Button, Heading } from '@chakra-ui/react';
import {
  Pick,
  Options,
  applyFilters,
  getUnitsText,
  SkillMap,
  createSkillMap,
  CharacterClass,
} from '@fepmu/data/three-houses';
import { UnitList } from '@fepmu/ui/unit-list';
import ThreeHousesForm from '../../components/three-houses-form/three-houses-form';
import ThreeHousesSkills from '../../components/three-houses-skills/three-houses-skills';

const createText = (picks: Pick[], route: string) =>
  ['Fire Emblem Three Houses PMU', route, '', getUnitsText(picks)].join('\n');

const createSkillMapText = (skills: SkillMap) =>
  Array.from(skills.entries())
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');

/* eslint-disable-next-line */
export interface ThreeHousesContainerProps {}

export function ThreeHousesContainer(props: ThreeHousesContainerProps) {
  const [options, setOptions] = useState<Options | undefined>(undefined);
  const [picks, setPicks] = useState<Pick[]>([]);
  const [text, setText] = useState<string>('');
  const [skillMap, setSkillMap] = useState<SkillMap | null>();

  useEffect(() => {
    if (options) setPicks(applyFilters(options));
  }, [options]);

  useEffect(() => {
    if (picks.length && options) setText(createText(picks, options.route));
    if (picks.length && options?.randomizeClasses) {
      const classes = picks.map((p) => p.class) as CharacterClass[];
      const skillMap = createSkillMap(classes);
      const skillMapText = createSkillMapText(skillMap);
      console.log(skillMapText);
      setSkillMap(skillMap);
    } else {
      setSkillMap(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picks]);

  const handleSubmit = (options: Options) => setOptions({ ...options });

  const copyToClipboard = () => navigator.clipboard.writeText(text).then();

  return (
    <div className="p-4 flex flex-col space-y-4 md:w-3/5 lg:w-2/5 md:mx-auto">
      <Heading
        size="xl"
        bgGradient="linear(to-r, green.500, teal.500, purple.500)"
        bgClip="text"
      >
        Fire Emblem Three Houses - Pick My Units
      </Heading>
      <ThreeHousesForm onSubmit={handleSubmit} />
      {picks.length > 0 ? (
        <>
          <UnitList picks={picks}>Selected units</UnitList>
          {skillMap ? <ThreeHousesSkills skills={skillMap} /> : <></>}
          <div className="flex">
            <Button className="grow" size={'lg'} onClick={copyToClipboard}>
              Copy to clipboard
            </Button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ThreeHousesContainer;
