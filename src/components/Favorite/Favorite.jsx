import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import img from '/src/assets/ride.png'
import footerimg from '/src/assets/footerbg.png'
import Marquee from 'react-fast-marquee';

const Favorite = () => {
    return (
        <div className='py-12'>
            <div className="container mx-auto">
                <div className="hero-content flex-col md:gap-22  lg:flex-row-reverse bg-img bg-no-repeat lg:bg-right lg:bg-contain	" style={{ backgroundImage: `url(${footerimg})`}}>
                <Marquee speed={300} direction="right" className='md:mt-20'>
                    <img src={img} className="max-w-xl" />
                    <img src={img} className="max-w-xl" />
                </Marquee> 
                    <div className='w-full'>
                    <h1 className="text-5xl font-extrabold font-use primary-text-color leading-relaxed">Explore your <br /> fabourite city's food.</h1>
                    <p className="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi necessitatibus aliquam fugiat consequatur quod nostrum numquam repellat laboriosam consequuntur! Quos ullam, provident asperiores, est optio necessitatibus alias nulla tenetur excepturi illo sint cum iste. Nesciunt, sed officiis nulla labore, sapiente dicta et quidem sit quaerat molestias ullam necessitatibus eum hic.</p>
                    <button className="btn primary-bg-color rounded-full px-10">Explore <FaArrowRight className='ml-3' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorite;