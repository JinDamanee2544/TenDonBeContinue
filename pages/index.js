import styles from './index.module.css'
import MainDashboard from '../component/dashboard-components/MainDashboard'

export default function Dashboard() {
  return (
    <div className={styles.entirePage}>
      <MainDashboard />
    </div>
  );
}
