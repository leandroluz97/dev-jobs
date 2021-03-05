import React from "react"
import Head from "./Head/Head"
import styles from "./Selected.module.css"
import Infos from "./Infos/Infos"
import Apply from "./Apply/Apply"
import Footer from "./Footer/Footer"

const Selected = () => {
  return (
    <>
      <section className={styles.selected}>
        <div className={styles.selectedContainer}>
          <div className={styles.selectedWrapper}>
            <Head />
            <Infos />
            <Apply />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Selected
