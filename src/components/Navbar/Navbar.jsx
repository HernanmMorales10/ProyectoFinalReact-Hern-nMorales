import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container_nav}>
        <Link to="/home" className={styles.noDecoration}>
          <p>INICIO</p>
        </Link>
        <Link to="/category/John_Wick" className={styles.noDecoration}>
          <p>JOHN WICK</p>
        </Link>
        <Link to="/category/Marvel" className={styles.noDecoration}>
          <p>MARVEL</p>
        </Link>
        <Link to="/category/Stranger_Things" className={styles.noDecoration}>
          <p>STRANGER THINGS</p>
        </Link>
        <Link to="/category/The_Walking_Dead" className={styles.noDecoration}>
          <p>THE WALKING DEAD</p>
        </Link>
        <Link to="/" className={styles.noDecoration}>
          <CartWidget />
        </Link>

    </nav>
  )
}

export default Navbar