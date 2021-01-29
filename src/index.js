import React from "react"

import { render } from 'preact'
import { BrowserRouter } from "react-router-dom"

import App from "./App"

import "./styles/core.css"

render(<BrowserRouter basename={window.AppConfig && window.AppConfig.root}>
    <App />
</BrowserRouter>, document.getElementById('root'))