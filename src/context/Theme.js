import { useContext, useState, createContext } from "react"

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
  const [themeDark, setThemeDark] = useState(true)

  function handleSetThemeDark() {
    setThemeDark(!themeDark)
  }

  return (
    <ThemeContext.Provider value={{ themeDark, handleSetThemeDark }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
