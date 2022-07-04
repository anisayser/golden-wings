import React from 'react';
import Events from '../../AllEvents/Events/Events';
import Testimonials from '../../Testimonials/Testimonials';
import Achievments from '../Achievments/Achievments';
import HomeBanner from '../HomeBanner/HomeBanner';
import SearchBox from '../SearchBox/SearchBox';

const Home = () => {
    return (
        <section className='home'>
            <HomeBanner></HomeBanner>
            <SearchBox></SearchBox>
            <Events></Events>
            <Testimonials></Testimonials>
            <Achievments></Achievments>
        </section>
    );
};

export default Home;