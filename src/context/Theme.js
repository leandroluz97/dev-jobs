import { useContext, useState, createContext, useEffect } from "react"

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
  const [themeLight, setThemeLight] = useState(false)

  useEffect(() => {
    //colors
    const colorLight = [
      "--background: #f4f6f8",
      " --card: #ffffff",
      "--text: #19202D",
      "--border: #E7E8E9",
    ]
    const colorDark = [
      "--background: #121721",
      " --card: #19202d",
      "--text: #FFFFFF",
      "--border: #313743",
    ]

    //root css variables
    const root = document.getElementsByTagName("html")[0]
    root.style.cssText = !themeLight
      ? colorDark.join(";")
      : colorLight.join(";")
  }, [themeLight])

  //handle set theme
  function handleSetThemeLight() {
    setThemeLight(!themeLight)
  }

  return (
    <ThemeContext.Provider value={{ themeLight, handleSetThemeLight }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
