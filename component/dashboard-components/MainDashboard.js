import styles from './MainDashboard.module.css'
import ProfileSection from './ProfileSection'
import SearchCourseButton from './buttonSearchCourse'
import Image from 'next/image'
import SettingTab from './../SettingTab'

export default function MainDashboard() {
  return (
    <div className={styles.mainBoard}>
      <ProfileSection
        person={
          {
            firstName: "Bodeesorn",
            lastName: "Kosullawrit",
            rank: "Beginner user"
          }
        }
      />
      <div className={styles.searchCourseButton}>
        <Image
          src="/images/SearchCourseButton.png"
          height={50}
          width={50}
        />
      </div>
      <div className={styles.resumeCourseButton}>
        <Image
          src="/images/resumeCourseButton.png"
          height={50}
          width={50}
          className={styles.resumeCourseButton}
        />
      </div>
      <div className={styles.viewAllMyCourseButton}>
        <Image
          src="/images/viewAllMyCourseButton.png"
          height={50}
          width={50}
          className={styles.viewAllMyCourseButton}
        />
      </div>
      <div className={styles.settingTab}>
        <SettingTab />
      </div>
    </div>
  );
}
