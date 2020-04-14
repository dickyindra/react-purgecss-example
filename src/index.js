import React from "react"
import { render } from "react-dom"

import "./resources/bootstrap/scss/bootstrap.scss"
import Home from "./modules/home"

const App = () => <Home />

const appEl = document.getElementById("app")

render(<App />, appEl)
