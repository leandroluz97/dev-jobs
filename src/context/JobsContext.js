import { useContext, useState, createContext, useEffect } from "react"
import Axios from "../Axios/Axios"

//Context
export const JobsContext = createContext([])

//context provider
export const JobProvider = (props) => {
  //states
  const [jobs, setJobs] = useState([])
  const [searched, setSearched] = useState({})
  const [pagePath, setPagePath] = useState()
  const [page, setPage] = useState(1)

  useEffect(() => {
    /*
    const axios = new Axios()
    console.log(searched)
    axios
      .getAlljobs()
      .then((response) => {
        setJobs(response.data)
      })
      .catch((err) => console.log(err))
      */
  }, [])
  useEffect(() => {
    /*
    const axios = new Axios()
    console.log(searched)
    axios
      .getAlljobs()
      .then((response) => {
        setJobs(response.data)
      })
      .catch((err) => console.log(err))
      */
  }, [page])

  console.log(page)
  useEffect(() => {
    if (!searched.title) return

    console.log(searched)

    const title = searched.title
    const location = searched.location
    const fulltime = searched.checkbox
    const page = searched.page

    const axios = new Axios()

    axios
      .searchedJobs(title, location, fulltime, page)
      .then((jobs) => {
        setJobs(jobs.data)
      })
      .catch((err) => console.log(err))
  }, [searched, pagePath])

  function handleJobs(search) {
    setSearched(search)
  }

  return (
    <JobsContext.Provider
      value={{
        jobs,
        handleJobs,
        searched,
        setSearched,
        setJobs,
        page,
        setPage,
        pagePath,
        setPagePath,
      }}
    >
      {props.children}
    </JobsContext.Provider>
  )
}
