import { HStack, Text, useColorMode } from '@chakra-ui/react';
import { Pick } from '@fepmu/data/three-houses';

/* eslint-disable-next-line */
export interface UnitProps {
  pick: Pick;
}

export function Unit(props: UnitProps) {
  const { unit, class: unitClass } = props.pick;
  const { colorMode } = useColorMode();

  return (
    <HStack
      bg={colorMode === 'light' ? 'whiteAlpha.600' : 'whiteAlpha.200'}
      p={2}
      rounded="lg"
    >
      <Text fontWeight={'bold'}>{unit.name}</Text>
      <Text>{unitClass?.name}</Text>
    </HStack>
  );
}

export default Unit;
