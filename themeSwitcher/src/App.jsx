import { useEffect, useState } from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import { ThemeProvider } from "./context/theme"

function App() {
  const [theme, setTheme] = useState('light'); 

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(theme);
  }, [theme]);
  return (
    <>
      <ThemeProvider value={{theme, setTheme}}>
      <Header />
      <Card />
      </ThemeProvider>
    </>
  )
}

export default App
