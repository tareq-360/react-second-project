import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const CardFeatures = ({feature}) => {
    return (
        <p className='  p-2 rounded-md flex'><CircleCheckBig className='mx-2'></CircleCheckBig>{feature}</p>
                
    );
};

export default CardFeatures;