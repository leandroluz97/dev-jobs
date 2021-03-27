import React, { useState } from "react"
import Head from "./Head/Head"
import styles from "./Selected.module.css"
import Infos from "./Infos/Infos"
import Apply from "./Apply/Apply"
import Footer from "./Footer/Footer"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import Axios from "../../Axios/Axios"
import Spinner from "../UI/Spinner"

const Selected = () => {
  const [selectedJob, setselectedJob] = useState()
  const params = useParams()

  useEffect(() => {
    const axios = new Axios()

    console.log(params.id)
    axios
      .getJobsById(params.id)
      .then((job) => {
        // console.log({ ...job.data })
        setselectedJob(job.data)
      })
      .catch((err) => console.log(err))
  }, [])

  let selected
  if (selectedJob) {
    selected = (
      <>
        <Head
          company={selectedJob.company}
          company_url={selectedJob.company_url}
        />
        <Infos
          type={selectedJob.type}
          title={selectedJob.title}
          location={selectedJob.location}
          description={selectedJob.description}
        />
        <Apply how_to_apply={selectedJob.how_to_apply} />
        <Footer job={selectedJob} />
      </>
    )
  } else {
    selected = <Spinner />
  }
  return (
    <>
      <section className={styles.selected}>
        <div className={styles.selectedContainer}>
          <div className={styles.selectedWrapper}>{selected}</div>
        </div>
      </section>
    </>
  )
}

export default Selected
