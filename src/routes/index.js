import Home from "../Home"
import AdminPage from "../Admin/AdminPage"
import Login from "../Account/Login/Login"
import PageNotFound from "./NotFound/PageNotFound"
import AdminHome from "../Admin/Home/AdminHome"
import UserOverView from "../Admin/User/UserOverView"
import UserSearch from "../Admin/User/UserSearch"
import UserDetail from "../Admin/User/UserDetail"
import ProductOverView from "../Admin/Product/ProductOverView"
// Public Route
const publicRoutes = [
    { path: "/" , component: Home},
    { path: "/login" , component: Login},
]

// Private Route
const privateRoutes = [

    { path: "/admin" , component: AdminPage, childrenRoute: [
        {   
            path : "", component : AdminHome
        },
        {
            path : "user", childrenRoute : [
                {
                    path : "overview" , component : UserOverView
                },
                {
                    path: "search", component : UserSearch
                },
                {
                    path : "detail/:idUser", component : UserDetail
                }
            ]
        },
        {
            path : "product", childrenRoute : [
                {
                    path : "overview" , component : ProductOverView
                },
                {
                    path: "search", component : UserSearch
                },
                {
                    path : "detail/:idUser", component : UserDetail
                }
            ]
        },
    ]}
]

// Page not Found
const notFoundRoutes = [
    {
        path: "*", component : PageNotFound
    }
]


export { publicRoutes, privateRoutes}