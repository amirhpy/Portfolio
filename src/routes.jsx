import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About"
import Contacts from "./pages/Contacts/Contacts"
import NotFound from "./components/NotFound/NotFound";

let routes = [
    { path: '/', element: <Home /> },
    {path: '/projects', element: <Projects />},
    {path: '/about', element: <About />},
    {path: '/contacts', element: <Contacts />},
    {path: '*', element: <NotFound />}
]

export default routes