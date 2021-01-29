import React from 'react'

import { Breadcrumbs, Breadcrumb, Button, Icon } from '@blueprintjs/core'

export default class _ extends React.Component {

    constructor () {
        super()
    }

    breadcrumbRender(item) {
        let { text, onClick, icon, onAfterClick, afterIcon, ...props } = item
        let onItemClick = onClick || this.props.onItemClick
        let onItemAfterClick = onAfterClick || this.props.onItemAfterClick
        return <Breadcrumb className="inline-flex items-center" {...props}>
            {onItemClick?
                <Button onClick={()=>{onItemClick(item)}} minimal icon={icon} text={text} />:
                <><Icon className="mr-1" icon={icon} />{text}</>}
            {afterIcon?<Button className="ml-px" minimal onClick={onItemAfterClick?()=>onItemAfterClick(item):null} icon={afterIcon} />:null}
        </Breadcrumb>
    }

    render () {
        let { items } = this.props
        return <Breadcrumbs items={items} breadcrumbRenderer={this.breadcrumbRender.bind(this)} />
    }
}