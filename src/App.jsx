import React from 'react';

// components
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Quote from './components/Quote/Quote';
import Projects from './components/Projects/Projects';

const App = () => {
    return (
        <div className='relative'>
            <Menu />
            <Header />
            <Quote />
            <Projects />
        </div>
    );
};

export default App;