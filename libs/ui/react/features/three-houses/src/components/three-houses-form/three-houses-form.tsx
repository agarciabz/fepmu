import {
  Button,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface ThreeHousesFormProps {}

export function ThreeHousesForm(props: ThreeHousesFormProps) {
  const routes = [
    'Azure Moon',
    'Crimson Flower',
    'Verdant Wind',
    'Silver Snow',
  ];
  const avatarGender = ['male', 'female', 'random'];
  return (
    <div className="space-y-4">
      <div className="space-y-2 flex flex-col">
        <Select>
          {routes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Select>
          {avatarGender.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Checkbox>Randomize classes</Checkbox>
        <Checkbox>Allow inviable builds</Checkbox>
        <Checkbox>Allow other houses</Checkbox>
        <Checkbox>Balance roster</Checkbox>
        <Checkbox>Include free updates</Checkbox>
        <Checkbox>Include season pass</Checkbox>
        <NumberInput defaultValue={15} min={10} max={20}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </div>
      <div className="flex">
        <Button className="grow" size={'lg'}>
          Pick my units
        </Button>
      </div>
    </div>
  );
}

export default ThreeHousesForm;
