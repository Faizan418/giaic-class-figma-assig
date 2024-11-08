import styles from './Section1.module.css'

function Section1() {
  return (
    <div className={styles.containar}>

        <div className={styles.one}>
            <h1 className={styles.head1}>Project <br /> Management</h1>
            <p className={styles.pera1}>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
            <button className={styles.btn}>Get Started</button>
        </div>
        <div className={styles.two}>
            <div className={styles.box}>

            </div>
        </div>
      
    </div>
  )
}

export default Section1
