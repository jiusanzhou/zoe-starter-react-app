import Home from "../pages/home"
import NotFound from "../pages/404"

export default [
    {
        path: '/',
        title: null, // ignore title
        layout: {
            name: 'default',
            header: {
                width: "full",
                fixed: true,
            },
            footer: {
                bg: ["gray.100", "gray.700"],
                fixed: true,
                width: "full"
            }
        },
        page: Home,
    },

    // 404 page
    {
        layout: 'empty',
        page: NotFound,
    }
]