import Image from 'next/image'
import styles from './buttonSearchCourse.module.css'

export default function SearchCourse() {
  return (
    <Image
      src="/images/magnifying-glass.png"
      height={40}
      width={40}
      className={styles.button}
    />
  );
}
