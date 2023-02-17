import React from "react"
import ReactDOM from "react-dom/client"
import "normalize.css"
import "./assets/css/index.less"
import App from "./App"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import store from "./assets/store"
import theme from "./assets/theme"
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
    ·
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
