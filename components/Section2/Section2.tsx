import React from 'react'
import styles from './Section2.module.css'

function Section2() {
  return (
    <div>

<div className={styles.containar}>
<div className={styles.two}>
    <div className={styles.box}>
       {/* <img src="/images/work-togetter.png" alt="" height={100} width={530}/> */}
    </div>
</div>
<div className={styles.one}>
    <h1 className={styles.head1}>Work together</h1>
    <p className={styles.pera1}>With whitepace, share your notes with your colleagues and collaborate on them.
    You can also publish a note to the internet and share the URL with others.</p>
    <button className={styles.btn}>Try it now</button>
</div>


</div>

    </div>
  )
}

export default Section2
