import React from 'react';
import { Link } from 'react-router-dom'

// shared
import HeadPage from '../shared/HeadPage/HeadPage';

const NotFound = () => {
    return (
        <section className='container mt-12 h-64'>
            <Link to='/'>
                <HeadPage pageName='notfound' descPage='sorry, the page not found' />
            </Link>
        </section>
    );
};

export default NotFound;