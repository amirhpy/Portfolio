import React from 'react';
import { useRoutes } from 'react-router-dom';

// components
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

// route
import routes from './routes';

const App = () => {
    let router = useRoutes(routes)

    return (
        <div className='relative'>
            <Menu />
            {router}
            <Footer />
        </div>
    );
};

export default App;