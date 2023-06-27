import React from 'react';

// components
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Quote from './components/Quote/Quote';

const App = () => {
    return (
        <div className='relative'>
            <Menu />
            <Header />
            <Quote />
        </div>
    );
};

export default App;