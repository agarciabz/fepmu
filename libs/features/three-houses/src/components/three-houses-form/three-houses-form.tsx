import {
  Button,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { Options, defaultOptions } from '@fepmu/data/three-houses';
import { ChangeEvent, useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface ThreeHousesFormProps {
  onSubmit: (options: Options) => void;
}

export function ThreeHousesForm(props: ThreeHousesFormProps) {
  const { onSubmit } = props;

  const routes = [
    'Azure Moon',
    'Crimson Flower',
    'Verdant Wind',
    'Silver Snow',
  ];

  const avatarGenderOptions = [
    {
      display: 'Male',
      value: 'male',
    },
    {
      display: 'Female',
      value: 'female',
    },
    {
      display: 'Random',
      value: 'random',
    },
  ];

  const [state, setState] = useState<Options>(defaultOptions);

  useEffect(() => {
    if (!state.randomizeClasses) {
      setState({
        ...state,
        allowInviableBuilds: false,
        balanceRoster: false,
      });
    }
  }, [state.randomizeClasses]);

  const isCheckbox = (
    x: HTMLSelectElement | HTMLInputElement
  ): x is HTMLInputElement => x.type === 'checkbox';

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = event.target;
    const value = isCheckbox(target) ? target.checked : target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleRosterSizeChange = (_: string, size: number) =>
    setState({ ...state, rosterSize: size });

  const formSubmit = () => onSubmit(state);

  return (
    <form>
      <div className="space-y-4">
        <div className="space-y-2 flex flex-col">
          <FormControl>
            <FormLabel htmlFor="route">Route</FormLabel>
            <Select
              value={state.route}
              id="route"
              name="route"
              onChange={handleInputChange}
            >
              {routes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="avatarGender">Avatar gender</FormLabel>
            <Select
              value={state.avatarGender}
              id="avatarGender"
              name="avatarGender"
              onChange={handleInputChange}
            >
              {avatarGenderOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.display}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <Checkbox
              id="randomizeClasses"
              name="randomizeClasses"
              isChecked={state.randomizeClasses}
              onChange={handleInputChange}
            >
              Randomize classes
            </Checkbox>
          </FormControl>
          <FormControl isDisabled={!state.randomizeClasses}>
            <Checkbox
              id="allowInviableBuilds"
              name="allowInviableBuilds"
              isChecked={state.allowInviableBuilds}
              onChange={handleInputChange}
            >
              Allow inviable builds
            </Checkbox>
          </FormControl>
          <FormControl>
            <Checkbox
              id="allowOtherHouses"
              name="allowOtherHouses"
              isChecked={state.allowOtherHouses}
              onChange={handleInputChange}
            >
              Allow other houses
            </Checkbox>
          </FormControl>
          <FormControl isDisabled={!state.randomizeClasses}>
            <Checkbox
              id="balanceRoster"
              name="balanceRoster"
              isChecked={state.balanceRoster}
              onChange={handleInputChange}
            >
              Balance roster
            </Checkbox>
          </FormControl>
          <FormControl>
            <Checkbox
              id="includeFreeUpdates"
              name="includeFreeUpdates"
              isChecked={state.includeFreeUpdates}
              onChange={handleInputChange}
            >
              Include free updates
            </Checkbox>
          </FormControl>
          <FormControl>
            <Checkbox
              id="includeSeasonPass"
              name="includeSeasonPass"
              isChecked={state.includeSeasonPass}
              onChange={handleInputChange}
            >
              Include season pass
            </Checkbox>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="rosterSize">Roster size</FormLabel>
            <NumberInput
              value={state.rosterSize}
              min={2}
              max={12}
              onChange={handleRosterSizeChange}
            >
              <NumberInputField id="rosterSize" name="rosterSize" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </div>
        <div className="flex">
          <Button
            className="grow"
            size={'lg'}
            type="button"
            onClick={formSubmit}
          >
            Pick my units
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ThreeHousesForm;
