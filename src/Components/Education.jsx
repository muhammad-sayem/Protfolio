import React from 'react';

const Education = () => {
    return (
        <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] dark:shadow-[1px_1px_8px_#0BBFFF] rounded-xl px-12 py-8 mb-16'>
            <div className='text-center' data-aos="fade-down"
                data-aos-duration="2000">
                <h2 className="text-4xl font-bold text-[#0F4EFC] dark:text-[#0BBFFF] inline-block">Education Background</h2>
                <div className="h-1 w-28 bg-[#0F4EFC] dark:bg-[#0BBFFF] mx-auto mt-1 mb-6"></div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-6'>
                <div data-aos="fade-right" data-aos-duration="2000">
                    <h3 className='text-[#0F4EFC] dark:text-[#0BBFFF] text-2xl font-bold mb-2'> Completed SSC in 2019 </h3>
                    <p className='text-lg font-bold'> Science Group </p>
                    <p className='text-lg font-bold'> Adamjee Cantonment Public School </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="2000">
                    <h3 className='text-[#0F4EFC] dark:text-[#0BBFFF] text-2xl font-bold mb-2'> Completed HSC in 2021 </h3>
                    <p className='text-lg font-bold'> Science Group </p>
                    <p className='text-lg font-bold'> Adamjee Cantonment College </p>
                </div>

                <div data-aos="fade-left" data-aos-duration="2000">
                    <h3 className='text-[#0F4EFC] dark:text-[#0BBFFF] text-2xl font-bold mb-2'> Present </h3>
                    <p className='text-lg font-bold'> B.Sc. in Computer Science and Engineering (CSE) </p>
                    <p className='text-lg font-bold'> Bangladesh University of Business and Technology (BUBT) </p>
                </div>
            </div>
        </div>
    );
};

export default Education;