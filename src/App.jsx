import React from "react";
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { ChakraProvider, CSSReset } from "@chakra-ui/core";

import theme from "./styles/theme";

@withRouter
@inject("appStore")
@observer
export default class App extends React.Component {
    _onClick() {
        this.props.appStore.addCount();
    }

    render() {
        // use register layout
        return (
            <ChakraProvider theme={theme}>
                <CSSReset />
            </ChakraProvider>
        );
    }
}
