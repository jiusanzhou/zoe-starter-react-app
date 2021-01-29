import React from 'react'
import { inject, observer } from "mobx-react"

import { Navbar, Button, Alignment } from "@blueprintjs/core"

import { withEvents } from "../../components/events"

import Breadcrumbs from '../../components/breadcrumbs'
import Actions from '../../components/actions'

// @withRouter
@withEvents
@inject("appStore", "systemStore", "modelStore")
@observer
class _ extends React.Component {
    constructor () {
        super()
    }

    eventPrefix = "system:ui:nav:action"

    // take parent

    afterIcon = "expand-all"

    generateNavBreadCrumbs() {
        let { modelStore, systemStore } = this.props
        let params = systemStore.basePathParams.toJSON()
        let brds = []
        let key = ""
        modelStore.navBreadCrumbsRegistry.forEach(i=>{
            key = key?`${key}.${i}`:i
            let model = modelStore.getModel(key)
            let value = params[i] // real value
            if (!value) return

            // take data at here
            let data = modelStore.getData({key}) || {}

            // put to nav
            brds.push({
                icon: model.icon||'document', // value's icon first default 
                text: data.title||'', // value's name
                name: data.name,
                afterIcon: this.afterIcon,
                model: model,
                // 展开列表等信息
            })
        })
        return brds
    }

    breadcrumbItemClick(item, brds) {
        // only parent and me set value
        // TODO: 性能优化
        let excepts = []
        for (let i in brds) {
            excepts.push([brds[i].model.name])
            if (brds[i].model.name === item.model.name) break
        }
        this.props.systemStore.paramsReset(excepts)
        this.props.events.$emit("system:app:route")

    }

    gotoAppHome() {
        this.props.systemStore.paramsReset()
        this.props.appStore.setCurrentApp(this.props.appStore.currentAppID)
        this.props.events.$emit("system:app:route")
    }

    render () {

        let { appStore: { currentApp }, systemStore: { navActions } } = this.props

        let brds = this.generateNavBreadCrumbs()

        return <Navbar fixedToTop>
            <Navbar.Group className="w-40" align={Alignment.LEFT}>
                <Navbar.Heading>
                    <Button onClick={()=>this.gotoAppHome()} className="text-lg font-bold" icon={currentApp.icon} minimal text={currentApp.title} />
                </Navbar.Heading>
            </Navbar.Group>
            {brds.length>0?<Navbar.Group>
                <Navbar.Divider />
                <Breadcrumbs onItemClick={(item)=>this.breadcrumbItemClick(item, brds)} items={brds} />
            </Navbar.Group>:null}
            <Navbar.Group align={Alignment.RIGHT}>
                <Actions eventPrefix={this.eventPrefix} items={navActions} />
            </Navbar.Group>
        </Navbar>
    }
}

export default _