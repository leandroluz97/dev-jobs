import axios from "axios"

export default class Axios {
  constructor() {
    const instance = axios.create({
      baseURL: "/positions.json",
    })

    this.instance = instance
  }

  getAlljobs() {
    return this.instance.get()
  }

  searchedJobs(title, location, fulltime, page) {
    const titleSearch = title && `description=${title}`
    const locationSearch = location && `location=${location}`
    const fulltimeSearch = fulltime && `full_time=${fulltime}`
    const pageSearch = page && `page=${page}`

    return this.instance.get(
      `?${locationSearch}${titleSearch}${fulltimeSearch}${pageSearch}`
    )
  }
}

/*
return this.instance.get(
      `?${title && titleSearch + "&"}``${location && locationSearch + "&"}``${
        fulltime && fulltimeSearch + "&"
      }``${page && pageSearch + "&"}`
    )
  }
*/
