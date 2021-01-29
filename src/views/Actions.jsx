import React from 'react'

const _actions = [
    {
        title: "取消",
    },
    {
        title: "上一步",
    },
    {
        title: "下一步",
    },
    {
        title: "完成",
    },
]

export default () => {
    return <div pos="fixed" right="1rem" bottom="1rem">
        {_actions.map(act => <div>
            <button>{act.title}</button>
        </div>)}
    </div>
}