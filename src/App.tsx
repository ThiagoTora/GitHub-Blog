import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { BlogProvider } from "./context/BlogContext"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

export function App() {


  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <BlogProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>

          <GlobalStyle />
      </BlogProvider>
     </ThemeProvider>
    </>
  )
}


