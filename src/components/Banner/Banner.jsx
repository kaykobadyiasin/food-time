import React from 'react';
import { FaSearch } from 'react-icons/fa';
import bannerimg from '/src/assets/banner_img.png'
import bannerBgimg from '/src/assets/bannerBgLeft.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner bg-img bg-no-repeat bg-left-top bg-base-content ' style={{ backgroundImage: `url(${bannerBgimg})`}}>
            <div className="container mx-auto bg-no-repeat bg-right-bottom" style={{ backgroundImage: `url(${bannerBgimg})`}}>
                <div className="hero-content flex-col lg:flex-row-reverse md:row-reverse ">
                    <div className='relative'><img src={bannerimg} className="max-w-lg" /></div>
                    <div className='banner_imgTop p-7 lg:end-80 lg:top-32 md:end-20 md:top-32 sm:top-0'>
                        <h2 className='text-orange-500 text-3xl font-extrabold text-center'>200k+</h2>
                        <p className='text-center font-bold text-xl paragraph-text-color '>People Delivered</p>
                    </div>
                    <div className='w-full'>
                    <h1 className="text-5xl font-extrabold font-use primary-text-color leading-relaxed">Order food online <br /> from your favourite local restaurants<span className='text-orange-500'>.</span></h1>
                    <p className="py-6 font-semibold text-lg paragraph-text-color">Freshly made food delivered to your door.</p>
                    <div className="form-control">
                            <div className="input-group ">
                                <input type="text" className='positionR borderRadius py-3 pl-14 w-full' placeholder='Enter Your Location'/>
                                
                                <button className='borderRadius primary-bg-color text-white px-5 ml-3'>Search</button>
                            </div>
                    <div className='bg-orange-500 positionA lg:start-28 md:start-8 sm:start-20 inset-y-auto mt-2 w-8 h-8 rounded-full'></div>

                    </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;