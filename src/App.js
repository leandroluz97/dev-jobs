import Header from "./components/Header/Header"
import "./styles/Global.css"
import { ThemeProvider, ThemeContext } from "./context/Theme"
import { useContext } from "react"

import Home from "./components/Home/Home"
import Selected from "./components/Selected/Selected"

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <Header />
        {/*<Home />*/}
        <Selected />
      </div>
    </ThemeProvider>
  )
}

export default App
