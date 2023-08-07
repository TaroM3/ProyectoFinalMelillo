import { useState } from "react";
import { createContext } from "react"
import { customTheme, customThemeDark } from "../themeConfig";

export const ThemeContext = createContext();

const ThemeContextComponent = ({children}) => {
    const [isDark, setDark] = useState(true)
    const [theme, setTheme] = useState(customTheme)

    const changeMode = () => {
        setDark(!isDark)
        isDark? setTheme(customThemeDark) : setTheme(customTheme)
    }

    let data = {
        isDark,
        setDark,
        theme,
        changeMode
    }
  return (
    <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextComponent;