import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import AboutPage from "./pages/About/AboutPage"
import ContactsPage from "./pages/Contacts/ContactsPage"
import NotFound from "./components/NotFound/NotFound";

let routes = [
    { path: '/', element: <Home /> },
    {path: '/projects', element: <ProjectsPage />},
    {path: '/about', element: <AboutPage />},
    {path: '/contacts', element: <ContactsPage />},
    {path: '*', element: <NotFound />}
]

export default routes