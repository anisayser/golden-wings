import React from 'react';
import './Testimonials.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

import img1 from '../../images/testi31.png';




const Testimonials = () => {
    return (
        <section className='testimonials my-20 py-32'>
            <div className='overlay-test'></div>
            <div className="container mx-auto px-5 z-40">
                <h1 className='text-4xl text-white z-50'>Travellers Review</h1>
                <p className='text-white'>Duis rutrum nisl urna maecenas vel libero faucibus nisi vene natis hendrerit aid lectus suspendissendt.</p>
                <Swiper
                    spaceBetween={50}
                    breakpoints={{
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        },
                    }}
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    onSlideChange={() => { }}
                    onSwiper={(swiper) => { }}
                >
                    <SwiperSlide className='py-20'>
                        <div className='p-7 bg-white shadow-lg rounded-lg space-y-5 slide'>
                            <div className='flex space-x-5'>
                                <img src={img1} alt="" />
                                <div>
                                    <h4 className='text-2xl'>Jims Pull</h4>
                                    <span className='text-red-500 space-x-1'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p>Amazing team, effective solutions that resulted in high rated search optimization & catchy branding. Running our tourist & I am very satisfied and have been a customer.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-20'>
                        <div className='p-7 bg-white shadow-lg rounded-lg space-y-5 slide'>
                            <div className='flex space-x-5'>
                                <img src={img1} alt="" />
                                <div>
                                    <h4 className='text-2xl'>Jims Pull</h4>
                                    <span className='text-red-500 space-x-1'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p>Amazing team, effective solutions that resulted in high rated search optimization & catchy branding. Running our tourist & I am very satisfied and have been a customer.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-20'>
                        <div className='p-7 bg-white shadow-lg rounded-lg space-y-5 slide'>
                            <div className='flex space-x-5'>
                                <img src={img1} alt="" />
                                <div>
                                    <h4 className='text-2xl'>Jims Pull</h4>
                                    <span className='text-red-500 space-x-1'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p>Amazing team, effective solutions that resulted in high rated search optimization & catchy branding. Running our tourist & I am very satisfied and have been a customer.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-20'>
                        <div className='p-7 bg-white shadow-lg rounded-lg space-y-5 slide'>
                            <div className='flex space-x-5'>
                                <img src={img1} alt="" />
                                <div>
                                    <h4 className='text-2xl'>Jims Pull</h4>
                                    <span className='text-red-500 space-x-1'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p>Amazing team, effective solutions that resulted in high rated search optimization & catchy branding. Running our tourist & I am very satisfied and have been a customer.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;