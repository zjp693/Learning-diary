import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import AboutHe from "../components/Abouthe"
import AboutShe from "../components/AboutShe";

const routes = [
    { path: '/home', component: Home },
    {
        path: '/about', component: About,
        routes: [
            { path: '/about/he', component: AboutHe },
            { path: '/about/she', component: AboutShe }
        ]
    },
    { path: '/login', component: Login } ,
]

export default routes