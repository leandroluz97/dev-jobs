import React, { useContext } from "react"
import styles from "./Header.module.css"
import { ThemeContext } from "../../context/Theme"
const Header = (props) => {
  const { themeLight, handleSetThemeLight } = useContext(ThemeContext)

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerLogoBox}>
            <img src='./icons/devjobs.svg' alt='logo' />
          </div>
          <div className={styles.headerToggler} onClick={handleSetThemeLight}>
            <img src='./icons/sun.svg' alt='light' />
            <div className={styles.headerToogle}>
              <div
                style={{
                  left: !themeLight ? "22px" : "0px",
                }}
              ></div>
            </div>

            <img src='./icons/moon.svg' alt='dark' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
