import React from "react"
import Finder from "./Finder/Finder"
import Job from "./Job/Job"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <main>
      <Finder />

      <section className={styles.jobs}>
        <div className={styles.jobsContainer}>
          <div className={styles.jobsWrapper}>
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
