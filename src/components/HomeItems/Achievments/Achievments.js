import React from 'react';

import svg1 from '../../../images/counter-icon1.svg';
import svg2 from '../../../images/counter-icon2.svg';
import svg3 from '../../../images/counter-icon3.svg';
import svg4 from '../../../images/counter-icon4.svg';
import CountUp from 'react-countup';

import './Achievments.css';

const Achievments = () => {
    return (
        <section className='achievments py-32'>
            <div className="overlay-test"></div>
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 text-white">
                    <div className='flex flex-col items-center justify-center p-10 border-2 border-red-600'>
                        <img src={svg2} alt="" />
                        <h1 className='text-4xl mt-5'> <CountUp end={500} duration={5}/> +</h1>
                        <h4 className='text-2xl'>Awesome Tour</h4>
                    </div>
                    <div className='flex flex-col items-center justify-center p-10 border-2 border-red-600'>
                        <img src={svg3} alt="" />
                        <h1 className='text-4xl mt-5'><CountUp end={300} duration={5}/> +</h1>
                        <h4 className='text-2xl'>New Destinations</h4>
                    </div>
                    <div className='flex flex-col items-center justify-center p-10 border-2 border-red-600'>
                        <img src={svg1} alt="" />
                        <h1 className='text-4xl mt-5'><CountUp end={5} duration={5}/> +</h1>
                        <h4 className='text-2xl'>Years Experience</h4>
                    </div>
                    <div className='flex flex-col items-center justify-center p-10 border-2 border-red-600'>
                        <img src={svg4} alt="" />
                        <h1 className='text-4xl mt-5'><CountUp end={150} duration={5}/> +</h1>
                        <h4 className='text-2xl'>Best Mountains</h4>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Achievments;