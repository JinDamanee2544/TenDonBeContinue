import Image from 'next/image'
import styles from './ProfileSection.module.css'

export default function ProfileSection({ person: {firstName, lastName, rank} }) {
  return (
    <>
      <div className={styles.mainSection}>
        <Image
          src="/images/user-avatar.png"
          className={styles.profilePicture}
          height={120}
          width={120}
          alt="Profile-Picture"
        />
        <h2
          className={styles.firstName}
        >
        {firstName}
        </h2>
        <h2
          className={styles.lastName}
        >
        {lastName}
        </h2>
        <p
          className={styles.rank}
        >
        {rank}
        </p>
      </div>
    </>
  );
}
