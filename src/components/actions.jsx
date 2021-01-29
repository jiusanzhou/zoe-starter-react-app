import React from 'react'
import { Button, Tooltip } from "@blueprintjs/core"

import { withEvents } from './events'

@withEvents
class _ extends React.Component {
    constructor() {
        super()
    }

    onItemClick (item) {
        let { name } = item
        if (!name) return
        if (this.props.eventPrefix) name = this.props.eventPrefix + ":" + name
        this.props.events.$emit(name, item)
    }

    render () {
        let { items, minimal = true } = this.props
        return items.map((item, idx) => {
            return item.tip
                ?<Tooltip key={idx} content={item.tip}><Button onClick={()=>{ this.onItemClick(item) }} minimal={minimal} {...item} /></Tooltip>
                :<Button onClick={()=>{ this.onItemClick(item) }} key={idx} minimal={minimal} {...item} />
        })
    }
}

export default _