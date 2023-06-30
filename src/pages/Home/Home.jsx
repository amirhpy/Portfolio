import React from 'react';

// components
import Header from '../../components/Header/Header'
import Quote from '../../components/Quote/Quote';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import About from '../../components/About/About';
import Contacts from '../../components/Contacts/Contacts';

const Home = () => {
    return (
        <>
            <Header />
            <Quote />
            <Projects />
            <Skills />
            <About />
            <Contacts />
        </>
    );
};

export default Home;