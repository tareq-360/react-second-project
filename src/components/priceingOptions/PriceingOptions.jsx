import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PriceingOptions = ({pricingData}) => {
    const pricingAllData=use(pricingData);
    // console.log(pricingAllData);
    return (
        <div className='max-w-[1120px] mx-auto'>
            <h2 className='text-5xl m-6'>Get Our membership</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {pricingAllData.map(data => <PricingCard data={data} key={data.id}></PricingCard>)}
                
            </div>
        </div>
    );
};

export default PriceingOptions;