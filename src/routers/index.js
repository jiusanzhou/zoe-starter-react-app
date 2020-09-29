import Index from "../pages/index"
import NotFound from "../pages/404"

export default [
    {
        path: '/',
        layout: 'default', // { name: 'default' }
        page: Index,
    },

    // 404 page
    {
        layout: 'default',
        page: NotFound,
    }
]