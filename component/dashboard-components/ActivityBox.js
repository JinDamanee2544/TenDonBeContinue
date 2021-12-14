import styles from './ActivityBox.module.css'

const id = {
  1: "gray",
  2: "lightPurple",
  3: "darkPurple"
}

export default function ActivityBox({number}) {
  return (
    <div className={styles.number}>
    </div>
  )
}
