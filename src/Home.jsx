import React from 'react'
import web from './images/homeimg.gif'
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common name='Grow your Business with' imgsrc={web} visit='/service' btnname='Get Started' />
        </>
    )
}

export default Home;
