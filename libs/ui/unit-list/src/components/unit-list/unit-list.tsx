import { VStack, Text, useColorMode } from '@chakra-ui/react';
import { Pick } from '@fepmu/data/three-houses';
import Unit from '../unit/unit';

/* eslint-disable-next-line */
export interface UnitListProps {
  picks: Pick[];
  children?: React.ReactNode;
}

export function UnitList(props: UnitListProps) {
  const { picks } = props;
  const { colorMode } = useColorMode();

  return (
    <VStack
      p={2}
      rounded={'lg'}
      w="100%"
      align={'stretch'}
      spacing={2}
      bg={colorMode === 'light' ? 'blackAlpha.200' : 'whiteAlpha.200'}
    >
      <Text>{props.children}</Text>
      <VStack align={'stretch'} spacing={2}>
        {picks.map((pick) => (
          <Unit key={pick.unit.id} pick={pick} />
        ))}
      </VStack>
    </VStack>
  );
}

export default UnitList;
