import React from "react"
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom"
import { inject, observer } from "mobx-react"

import { Flex, Button } from "@chakra-ui/core"

@withRouter
@inject("appStore")
@observer
export default class App extends React.Component {

    _onClick() {
        this.props.appStore.addCount()
    }

    render() {
        return <Flex>
            Hello {this.props.appStore.count} Chakra UI!
            <Button onClick={this._onClick.bind(this)}>Add</Button>
        </Flex>
    }
}