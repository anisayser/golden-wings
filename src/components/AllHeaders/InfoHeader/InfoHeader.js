import React from 'react';

const InfoHeader = () => {
    return (
        <section className='info-header bg-black text-white'>
            <div className="container mx-auto px-5">
                <nav className='flex justify-between py-2 text-sm'>
                    <div className='flex space-x-3'>
                        <div className='sm:flex items-center space-x-1 hidden'>
                            <i className="fa-solid fa-phone"></i>
                            <p>+88014652844</p>
                        </div>
                        <div className='flex items-center space-x-1'>
                            <i className="fa-solid fa-envelope"></i>
                            <p>info@goldenwings.com</p>
                        </div>
                    </div>

                    <div className='flex space-x-5'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                    </div>
                </nav>
            </div>

        </section>
    );
};

export default InfoHeader;