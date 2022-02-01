import React from 'react';
import './passenger.css'

const SingleCatagory = ({ p }) => {
    return (
        <div>

            <div className='d-flex justify-content-between align-items-center'>
                <div className='ms-2 my-3'>
                    <h5 className='fw-light'>{p.Type}</h5>
                    <small>{p.age}</small>
                </div>
                <div className='d-flex justify-content-center align-items-center incre-decre-btn'>
                    <input type='button' value="-" />
                    <input value={0} type="text" />
                    <input type='button' value="+" />

                </div>
            </div>

        </div>
    );
};

export default SingleCatagory;