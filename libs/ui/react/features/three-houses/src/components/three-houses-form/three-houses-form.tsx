import styles from './three-houses-form.module.scss';

/* eslint-disable-next-line */
export interface ThreeHousesFormProps {}

export function ThreeHousesForm(props: ThreeHousesFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ThreeHousesForm!</h1>
    </div>
  );
}

export default ThreeHousesForm;
