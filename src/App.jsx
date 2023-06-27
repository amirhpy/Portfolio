import React from 'react';

// components
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div className='relative'>
            <Menu />
            <Header />
        </div>
    );
};

export default App;