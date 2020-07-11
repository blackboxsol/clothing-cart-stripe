import React from 'react';

//import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles'

const HomePage = () => (

    /**
     * Traditional CSS
     *
    <div className='homepage'>
        <Directory />
    </div>
    */

    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);


export default HomePage;