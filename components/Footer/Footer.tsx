import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.containar}>

        <div className={styles.main}>

            <div className={styles.card}>
            <h1 className={styles.headers}>Whitepace</h1>
            <p className={styles.pera}>whitepace was created for the new ways we live and work. We make a better workspace around the world.</p>
            </div>

            <div className={styles.card}>
            <h1 className={styles.headers}>Product</h1>
            <p className={styles.pera}>Overview</p>
            <p className={styles.pera}>Pricing</p>
            <p className={styles.pera}>Customer Stories</p>
            </div>

            <div className={styles.card}>
            <h1 className={styles.headers}>Resources</h1>
            <p className={styles.pera}>Blog</p>
            <p className={styles.pera}>Guides & tutorials</p>
            <p className={styles.pera}>Help center</p>
            </div>

            <div className={styles.card}>
            <h1 className={styles.headers}>Company</h1>
            <p className={styles.pera}>About us</p>
            <p className={styles.pera}>Careers</p>
            <p className={styles.pera}>Madia kit</p>
            </div>

            <div className={styles.card}>
            <h1 className={styles.headers}>Try It Today</h1>
            <p className={styles.pera}>Get started for free.
            Add your whole team as your needs grow.</p>
            <button className={styles.btn}>Start today</button>
            </div>

        </div>
        <br /><br /><br />
        <hr />
      
    </div>
  )
}

export default Footer
