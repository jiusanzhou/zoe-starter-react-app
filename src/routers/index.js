import Index from "../pages/index"
import NotFound from "../pages/404"

export default [
    {
        layout: 'default',
        path: '/',
        page: Index,
    },
    // 404 page
    {
        layout: 'default',
        page: NotFound,
    }
]