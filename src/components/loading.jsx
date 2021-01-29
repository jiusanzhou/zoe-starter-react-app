// 订阅事件
// 一个不可操作态(用于初次加载)+页面加载
// system:ui:init system:init user:init pages:init app:init => App ready

import React from 'react'
import { withRouter } from "react-router-dom"

export const withLoading = (WrappedComponent) => {
    class WithLoading extends React.Component {
        constructor() {
            super()
            this.state = { loading: false }
        }

        componentDidUpdate(prevProps) {
            if (this.props.location !== prevProps.location) {
                this.setState({ loading: true })
            }
        }

        render () {
            return <WrappedComponent loading={this.state.loading} {...this.props} />
        }
    }

    return withRouter(WithLoading)
}