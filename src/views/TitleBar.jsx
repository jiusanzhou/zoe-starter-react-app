import React from "react"
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from "react-icons/vsc"

export default ({
    border = true,
    icon = "https://tailwindcss.com/favicon-32x32.png",
    title = 'GoWindle',
    minimize,
    maximize,
    close,
    className = "",
    ...props
}) => {
    return <div 
        top={0}
        left={0}
        right={0}
        w="100%"
        position="fixed"
        alignItems="center"
        borderBottomWidth="1px"
        borderBottomStyle={border?"solid":null} {...props}>
            {/* icon */}
            <div className="mx-2" w="2rem" h="2rem">
                <img src={icon} />
            </div>
            {/* title */}
            <div className="flex-grow ">{title}</div>
            {/* extend */}
            {/* <div></div> */}
            {/* actions */}
            <div float="right" style='behavior:"window-command";'>
                <div command="window-min" p=".5rem" className="hover:bg-gray-200"><VscChromeMinimize /></div>
                <div command="window-max" p=".5rem" className="hover:bg-gray-200"><VscChromeMaximize /></div>
                <div command="window-close" p=".5rem" className="hover:text-white hover:bg-red-500"><VscChromeClose /></div>
            </div>
    </div>
}