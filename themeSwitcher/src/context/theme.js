import { createContext, useContext } from "react";

const themeContext = createContext("light");

export const ThemeProvider = themeContext.Provider;

export const useTheme = () => {
    return useContext(themeContext);
}