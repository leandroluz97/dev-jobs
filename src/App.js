import Header from "./components/Header/Header"
import "./styles/Global.css"
import { ThemeProvider, ThemeContext } from "./context/Theme"
import { useContext } from "react"

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
