import React from "react"
import GlobalStyle from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { RoutesComponent } from "./routes"

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
