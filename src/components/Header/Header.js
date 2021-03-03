import React, { useContext } from "react"
import styles from "./Header.module.css"
import { ThemeContext } from "../../context/Theme"
const Header = (props) => {
  const { themeDark, handleSetThemeDark } = useContext(ThemeContext)

  console.log(themeDark)

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerLogoBox}>
            <img src='./icons/devjobs.svg' alt='logo' />
          </div>
          <div className={styles.headerToggler}>
            <img src='./icons/sun.svg' alt='light' />
            <div className={styles.headerToogle}>
              <div></div>
            </div>

            <img src='./icons/moon.svg' alt='dark' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
