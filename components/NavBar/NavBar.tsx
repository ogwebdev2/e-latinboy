import Image from "next/image";
import dynamic from 'next/dynamic';
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBar.module.css";
import logo from "../../public/assets/navbar/logo.png";
import MobileMenu from "../MobileMenu/MobileMenu";

const NavBar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["navbar-logo"]}>
        <Image src={logo.src} width={300} height={200} alt="logo" />
      </div>
      <div className={styles["navbar-links"]}>
        <ul className={styles["navbar-list"]}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </li>
        </ul>
      </div>
      <MobileMenu />
    </div>
  );
};

export default NavBar;
