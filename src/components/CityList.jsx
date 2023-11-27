/* eslint-disable react/prop-types */
import CityItem from './CityItem';
import Message from './Message';
import Spinner from './Spinner';
import styles from './cityList.module.css';

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;