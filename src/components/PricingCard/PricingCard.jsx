import { CircleCheckBig } from 'lucide-react';
import React from 'react';
import CardFeatures from './CardFeatures';

const PricingCard = (data) => {
    // console.log(data.data.name);
    return (
        <div className='border-2 border-orange-400 p-5 bg-orange-300 rounded-lg flex flex-col'>
            <div className=' text-white'>
                <h1 className='text-4xl text-black'>{data.data.name}</h1>
                <h4 className='text-2xl text-black bg-green-300 rounded-md p-2 my-2'>${data.data.price}</h4>
            </div>

            {/* body */}
            <div className='flex-1'>
                <p className=' bg-orange-200 rounded-md p-3'>{data.data.description}</p>
                <button className='btn btn-neutral my-3'>{data.data.duration}</button>

                <div className=' rounded-md '>
                    {data.data.features.map((feature,index) => <CardFeatures key={index} feature={feature}></CardFeatures>)}
                </div>
                
            </div>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-full mt-5 btn-primary p-3">Subscribe Now</button>
        </div>
    );
};

export default PricingCard;