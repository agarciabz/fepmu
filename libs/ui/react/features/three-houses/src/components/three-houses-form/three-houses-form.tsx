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
      <div className="space-y-2">{/* Controls */}</div>
      <div className="flex">
        <button className="grow" type="button">
          Pick my units
        </button>
      </div>
    </div>
  );
}

export default ThreeHousesForm;
