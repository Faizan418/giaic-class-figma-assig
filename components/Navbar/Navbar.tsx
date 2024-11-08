import styles from '../Navbar/Navbar.module.css'
// import React, { useState } from 'react'


function Navbar() {
   

    
  return (
    <div className={styles.containar}>

        <nav className={styles.navbar}>

            <div className={styles.img_div}>
                <img src="/images/logo.png" alt="logo" height={30} width={30} />
                <p>whitespace</p>
            </div>
            <div className={styles.two}>
                <ul className={styles.ul_div}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className={styles.btn_div}>
                    <button className={styles.btn1}>Login</button>
                    <button className={styles.btn2}>Try whitespace free</button>
                </div>
                <div className={styles.hamburger}>
                    &#9776;
                </div>

            </div>

        </nav>
      
    </div>
  )
}

export default Navbar
