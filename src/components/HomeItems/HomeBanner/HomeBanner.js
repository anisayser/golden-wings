import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from "swiper";
// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
import './HomeBanner.css';

//slider images
import slider1 from '../../../images/slider1.png';
import slider2 from '../../../images/slider2.png';




const HomeBanner = () => {
    return (
        <section className='home-banner'>

            <Swiper
                spaceBetween={30}
                effect={"fade"}
                speed={1500}
                loop={true}
                navigation={true}
                // navigation={{
                //     prevEl: '.swiper-button-prev',
                //     nextEl: '.swiper-button-next'
                // }}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper w-full z-40"
            >
                <SwiperSlide>
                    <div>
                        <div className="container mx-auto relative">
                            <div className='absolute z-10 space-y-5 mt-60'>
                                <h1 className='uppercase text-6xl text-white '>ENJOY YOUR HOLLIDAYS <br /> WITH golden wings</h1>
                                <p className='text-white font-sm'>A charitable organization or charity is an organization whose primary objectives are philanthr</p>
                                <button className='bg-red-600 hover:bg-red-700 py-3 px-5 text-white'>View Adventures</button>
                            </div>
                        </div>
                        <div className='overlay'>
                            <img className='w-full' src={slider1} alt="" />
                        </div>

                        <div className="swiper-button-prev absolute top-0">
                            <i className="fa-solid fa-arrow-up py-2 px-3 rounded-full border border-red-600 text-red-600"></i>
                        </div>
                    
                        <div className="swiper-button-next">
                            <i className="fa-solid fa-arrow-down py-2 px-3 rounded-full border border-red-600 text-red-600"></i>
                        </div>
                    </div>
                    
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="container mx-auto relative">
                            <div className='absolute z-10 space-y-5 mt-60'>
                                <h1 className='uppercase text-6xl text-white '>Let's your journey begins <br /> WITH <span className='text-red-600'>golden wings</span> </h1>
                                <p className='text-white font-sm'>A charitable organization or charity is an organization whose primary objectives are philanthr</p>
                                <button className='bg-red-600 hover:bg-red-700 py-3 px-5 text-white'>View Adventures</button>
                            </div>
                        </div>
                        <div className='overlay'>
                            <img className='w-full' src={slider2} alt="" />
                        </div>
                        <div className="swiper-button-prev">
                            <i className="fa-solid fa-arrow-up"></i>
                        </div>
                        <div className="swiper-button-next">
                            <i className="fa-solid fa-arrow-down"></i>
                        </div>
                        
                        <div className="swiper-button-prev absolute top-0">
                            <i className="fa-solid fa-arrow-up py-2 px-3 rounded-full border border-red-600 text-red-600"></i>
                        </div>
                    
                        <div className="swiper-button-next">
                            <i className="fa-solid fa-arrow-down py-2 px-3 rounded-full border border-red-600 text-red-600"></i>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    );
};

export default HomeBanner;