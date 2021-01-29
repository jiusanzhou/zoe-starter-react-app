import React, { Component } from 'react'

import { Flex } from 'rebass'

// import { Resizable } from 're-resizable'

// import Navbar from './views/nav-bar'
// import Navmenu from './views/nav-menu'

class DefaultLayout extends Component {

    constructor () {
        super()
    }

    render () {
        let { children } = this.props
        return <Flex className="flex-col h-screen">
            {/* <Navbar /> */}
            <Flex className="flex-1 flex flex-row" mt={50}>
                {/* <Navmenu /> */}
                <div className="flex-1 flex justify-center">{children}</div>
            </Flex>
        </Flex>
    }

}

export default DefaultLayout