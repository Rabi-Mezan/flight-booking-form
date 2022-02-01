import React from 'react';
import './From.css'

const From = ({ setFrom }) => {
    const handleFrom = (e) => {
        const value = e.target.value
        setFrom(value)
    }

    return (
        <div className=''>
            <lebel class="fs-4  fw-light">From</lebel>
            <div className='input-icons mt-3'>
                <i class="fas fa-map-marker-alt icon"></i>
                <input className='input-field' type="text"
                    placeholder='Select Departure' />
            </div>

        </div>
    );
};

export default From;