import React from 'react';

// components
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Quote from './components/Quote/Quote';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div className='relative'>
            <Menu />
            <Header />
            <Quote />
            <Projects />
            <Skills />
            <About />
            <Contacts />
            <Footer />
        </div>
    );
};

export default App;