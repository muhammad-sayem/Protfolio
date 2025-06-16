import React from 'react';
import phoneImage from "../assets/Logos/icons8-phone-130.png";
import whatsappImage from "../assets/Logos/icons8-whatsapp-130.png";
import gmailImage from "../assets/Logos/icons8-gmail-130.png";

const Contact = () => {
    return (
        <div className='rounded-xl px-12 py-8 mb-12'>
            <div className='text-center' data-aos="fade-down"
                data-aos-duration="2000">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white inline-block"> Contact Me </h2>
                <div className="h-1 w-36 bg-[#8245EC] mx-auto mt-2 mb-6"></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
                <div className='text-center border border-[#8245EC]/60 py-4 rounded-xl' data-aos="fade-right"
                    data-aos-duration="2000">
                    <div className='flex justify-center'>
                        <img src={phoneImage} className='w-18' alt="" />
                    </div>
                    <h2 className='text-lg font-bold'> phone No: </h2>
                    <p className='text-xl'> +8801404863779 </p>
                </div>

                <div className='text-center border border-[#8245EC]/60 py-4 rounded-xl' data-aos="fade-up"
                    data-aos-duration="2000">
                    <div className='flex justify-center'>
                        <img src={gmailImage} className='w-18' alt="" />
                    </div>
                    <h2 className='text-lg font-bold'> Email: </h2>
                    <p className='text-xl break-words px-2'>shahrulislamsayem@gmail.com</p>
                </div>

                <div className='text-center border border-[#8245EC]/60 py-4 rounded-xl' data-aos="fade-left"
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