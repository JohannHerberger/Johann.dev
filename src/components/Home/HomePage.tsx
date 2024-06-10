import React from 'react';
import { Nav } from './nav';
import { Home } from './home';

const HomePage = () => {
    return (
        <div id='home'>
            <Nav />
            <Home />
        </div>
    );
};

export default HomePage;