import Header from "./components/Header/Header"
import "./styles/Global.css"
import { ThemeProvider } from "./context/Theme"

import Home from "./components/Home/Home"
import Selected from "./components/Selected/Selected"
import { Switch, Route } from "react-router-dom"
import { JobProvider } from "./context/JobsContext"

function App() {
  /*
  useEffect(() => { 

    const axios = new Axios()
    axios
      .getAlljobs()
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }, [])
  */
  return (
    <ThemeProvider>
      <JobProvider>
        <div className='App'>
          <Header />
          <Switch>
            <Route path='/job/:id'>
              <Selected />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </JobProvider>
    </ThemeProvider>
  )
}

export default App
