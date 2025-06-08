import React from 'react';
import phoneImage from "../assets/Logos/icons8-phone-130.png";
import whatsappImage from "../assets/Logos/icons8-whatsapp-130.png";
import gmailImage from "../assets/Logos/icons8-gmail-130.png";

const Contact = () => {
    return (
        <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] darkDamshadow-[1px_1px_8px_#0BBFFF] rounded-xl px-12 py-8 mb-24'>
            <div className='text-center' data-aos="fade-down" data-aos-duration="2000">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#0F4EFC] darkDamtext-[#0BBFFF] inline-block">Contact Me</h2>
                <div className="h-1 w-28 bg-[#0F4EFC] darkDambg-[#0BBFFF] mx-auto mt-1 mb-6"></div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-8'>
                <div className='text-center' data-aos="fade-right"
                    data-aos-duration="2000">
                    <div className='flex justify-center'>
                        <img src={phoneImage} className='w-18' alt="" />
                    </div>
                    <h2 className='text-lg font-bold'> phone No: </h2>
                    <p className='text-xl'> +8801404863779 </p>
                </div>

                <div className='text-center' data-aos="fade-up"
                    data-aos-duration="2000">
                    <div className='flex justify-center'>
                        <img src={gmailImage} className='w-18' alt="" />
                    </div>
                    <h2 className='text-lg font-bold'> Email: </h2>
                    <p className='text-xl'>shahrulislamsayem@gmail.com</p>
                </div>

                <div className='text-center' data-aos="fade-left"
                        data-aos-duration="2000">
                    <div className='flex justify-center'>
                        <img src={whatsappImage} className='w-18' alt="" />
                    </div>
                    <h2 className='text-lg font-bold'> WhatsApp: </h2>
                    <p className='text-xl'> +8801404863779 </p>
                </div>

            </div>
        </div>

    );
};

export default Contact;