
import styles from '../Navbar/Navbar.module.css';
import Link from 'next/link';

function Navbar() {

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.img_div}>
          <img src="/images/logo.png" alt="logo" height={30} width={30} />
          <p>whitepace</p>
        </div>

        <div className={styles.two}>

          <ul className={styles.ul_div}>
            <li className={styles.lili}><Link href="#">Home</Link></li>
            <li className={styles.lili}><Link href="#">About</Link></li>
            <li className={styles.lili}><Link href="#">Services</Link></li>
            <li className={styles.lili}><Link href="#">Contact</Link></li>
          </ul>
          
          <div className={styles.btn_div}>
            <button className={styles.btn1}>Login</button>
            <button className={styles.btn2}>Try whitepace free</button>
          </div>
        <div className={styles.hamburger}>
          &#9776;
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
