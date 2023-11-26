import Sidebar from '../components/Sidebar';
import styles from './Applayout.module.css';
import Map from '../components/Map';

function Applayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default Applayout;
