import React from 'react';

const SearchBox = () => {
    return (
        <section className='search-box'>

            <div className="container mx-auto">
                <div className='bg-white rounded-lg shadow-xl w-[32rem] p-5 mx-auto relative z-10 -translate-y-14'>
                    <input type="text" name="search" id="search" placeholder='Search Events' className='border p-5 w-2/3'/>
                    <input type="submit" value="Search"  className='py-5 px-8 bg-red-600 hover:bg-red-700 text-white w-1/3 cursor-pointer'/>
                </div>
            </div>
            
        </section>
    );
};

export default SearchBox;