import styles from './three-houses-container.module.scss';

/* eslint-disable-next-line */
export interface ThreeHousesContainerProps {}

export function ThreeHousesContainer(props: ThreeHousesContainerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ThreeHousesContainer!</h1>
    </div>
  );
}

export default ThreeHousesContainer;
