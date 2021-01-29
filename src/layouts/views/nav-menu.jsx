import React from 'react'
import { Switch, Route, withRouter } from "react-router-dom"
import { inject, observer } from "mobx-react"

import {Menu } from "@blueprintjs/core"

import { withEvents } from "../../components/events"
import Actions from '../../components/actions'

@withEvents
@inject("appStore", "systemStore")
@observer
class _ extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    eventPrefix = "system:ui:nav:action"

    componentDidMount() {
        this.props.events.$emit("system:app:ui:nav-menu:init")
        // 直接在App中去加载
        // this.props.events.$on("system:app:init", () => this.props.appStore.loadApps())
        this.props.events.$on(`${this.eventPrefix}:home`, () => this.menuItemClick(null))
    }

    menuItemClick = (id) => {
        // TODO: auto emit route event while value changed
        this.props.appStore.setCurrentApp(id)
        this.props.events.$emit("system:app:route")
    }

    render () {
        let { appStore: { apps, currentApp }, systemStore: { footerActions } } = this.props
        return <div className="flex flex-col bg-gray-100 justify-between">
            {apps.length>0?<Menu large className="bg-gray-100 px-0">
                {apps.map((item, idx) => <Menu.Item onClick={()=>{ this.menuItemClick(item.id) }}
                    className="large-padding-custom-px-4-py-2 my-2" active={item.id===currentApp.id} key={idx} {...item} />)}
            </Menu>:null}
            {footerActions.length>0?<div className="flex justify-between p-2">
                <Actions eventPrefix={this.eventPrefix} items={footerActions} />
            </div>:null}
        </div>
    }
}

export default _