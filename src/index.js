import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { Provider } from "mobx-react"
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/react"

import * as serviceWorker from './utils/serviceWorker'

import App from "./App"

import stores from "./stores"
import theme from "./styles/theme"

import "./styles/core.css"

ReactDOM.render(<Provider {...stores}>
    <ChakraProvider theme={theme}>
        <CSSReset />
        <ColorModeScript initialColorMode="light" />
        <BrowserRouter basename={window.AppConfig && window.AppConfig.root}>
            <App />
        </BrowserRouter>
    </ChakraProvider>
</Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
