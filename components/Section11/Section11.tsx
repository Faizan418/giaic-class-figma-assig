import React from 'react'
import styles from './Section11.module.css'
import Image from 'next/image'

function Section11() {
  return (
    <div className={styles.containar}>

        <div className={styles.main}>

            <h1 className={styles.hading1}>Try whitepace <br /> today</h1>
            <p className={styles.pera1}>Get Started for free <br /> Add your whole team as your needs grow.</p>
            <button className={styles.btn} type="button">Try taskey free</button>
            <p className={styles.pera2}>On a big team? Contact sales</p>
            
                <div className={styles.div_icons}>
                    <div className={styles.div_1}>
                      <Image src={'/images/apple.png'} alt='apple' height={30} width={30}/>
                    </div>
                    <div className={styles.div_2}>
                    <Image src={'/images/Group.png'} alt='window' height={30} width={30}/>
                    </div>
                    <div className={styles.div_3}>
                    <Image src={'/images/robot.png'} alt='robot' height={30} width={30}/>
                    </div>
                </div>

        </div>
      
    </div>
  )
}

export default Section11
