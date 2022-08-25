import { HStack, Icon, Text, useColorMode } from '@chakra-ui/react';
import { Pick } from '@fepmu/data/three-houses';

/* eslint-disable-next-line */
export interface UnitProps {
  pick: Pick;
}

export function Unit(props: UnitProps) {
  const { unit, class: unitClass, isInviable } = props.pick;
  const { colorMode } = useColorMode();

  return (
    <HStack
      bg={colorMode === 'light' ? 'whiteAlpha.600' : 'whiteAlpha.200'}
      rounded="lg"
      pr={2}
      justify={'space-between'}
    >
      <HStack p={2}>
        <Text fontWeight={'bold'}>{unit.name}</Text>
        <Text>{unitClass?.name}</Text>
      </HStack>
      {isInviable ? (
        <div id="inviable">
          <Icon
            className="icon icon-tabler icon-tabler-chevrons-down"
            h={'full'}
            w={6}
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            color="red.500"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="7 7 12 12 17 7" />
            <polyline points="7 13 12 18 17 13" />
          </Icon>
        </div>
      ) : (
        <></>
      )}
    </HStack>
  );
}

export default Unit;
