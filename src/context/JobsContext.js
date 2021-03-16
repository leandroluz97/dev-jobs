import { useContext, useState, createContext, useEffect } from "react"
import Axios from "../Axios/Axios"

export const JobsContext = createContext([])

export const JobProvider = (props) => {
  const [jobs, setJobs] = useState([])
  const [searched, setSearched] = useState({})

  useEffect(() => {
    const axios = new Axios()

    axios
      .getAlljobs()
      .then((jobs) => {
        setJobs(jobs.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (!searched) return

    const title = searched.title
    const location = searched.location
    const fulltime = searched.fulltime
    const page = searched.page

    const axios = new Axios()

    axios
      .searchedJobs(title, location, fulltime, page)
      .then((jobs) => {
        setJobs(jobs.data)
      })
      .catch((err) => console.log(err))
  }, [searched])

  function handleJobs(search) {
    setSearched(search)
  }

  return (
    <JobsContext.Provider value={{ jobs, handleJobs }}>
      {props.children}
    </JobsContext.Provider>
  )
}
