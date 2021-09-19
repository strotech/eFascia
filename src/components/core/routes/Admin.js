import DashboardContainer from '../../containers/views/DashboardContainer'
import AboutContainer from '../../containers/views/AboutContainer'
import TweetsContainer from '../../containers/views/TweetsContainer'

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "nc-icon nc-chart-pie-35",
        component: DashboardContainer,
        layout: "/admin",
    },
    {
        path: "/tweets",
        name: "Tweets",
        icon: "nc-icon nc-quote",
        component: TweetsContainer,
        layout: "/admin",
    },
    {
        path: "/about",
        name: "About",
        icon: "nc-icon nc-circle-09",
        component: AboutContainer,
        layout: "/admin",
    }    
]
export default routes;