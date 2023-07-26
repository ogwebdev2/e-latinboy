'use client'
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MobileMenu.module.css";
import { useEffect, useState } from "react";

const MobileMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        console.log('primera carga');
    } , []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        console.log('showMenu: ', showMenu);
    }

  return (
    <div className={styles["navbar-menu-mobile"]}>
      <div onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default MobileMenu;

