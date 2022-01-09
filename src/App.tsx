import { DefaultTheme, ThemeProvider } from "styled-components"

import { usePersistedTheme } from "./hooks/usePersistedTheme"
import { GlobalStyles } from "./styles/global"
import { Header } from "./components/Header"
import { light } from "./styles/theme/light"
import { dark } from "./styles/theme/dark"

import * as C from "./styles/app"

export const Home: React.FC = () => {
  const [theme, setTheme] = usePersistedTheme<DefaultTheme>("theme", light)

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)

  return (
    <ThemeProvider theme={theme}>
      <header className="App">
        <Header toggleTheme={toggleTheme} />
      </header>
      <C.Main>
        <h1>Daniel Farias</h1>
        <p>
          Estudo sobre Switcher Theme utilizando
          ReactJS, Typescript e Styled-Components
        </p>
      </C.Main>

      <GlobalStyles />
    </ThemeProvider>
  )
}

