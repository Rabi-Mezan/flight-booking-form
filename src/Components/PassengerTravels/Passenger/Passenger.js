import React from 'react';
import SingleCatagory from './SingleCatagory';

const passenger = [

    {
        Type: 'Adult',
        age: 'Age 16 and over'

    },
    {
        Type: 'Young adult',
        age: 'Age 12 - 15'

    },
    {
        Type: 'Child',
        age: 'Age 2 - 11'

    },
    {
        Type: 'Infant',
        age: 'Age up to 2'

    }


]

const Passenger = () => {
    return (
        <div>

            {
                passenger.map(p =>
                    <SingleCatagory
                        p={p}
                    ></SingleCatagory>
                )
            }
        </div>
    );
};

export default Passenger;