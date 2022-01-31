import React from 'react';
import bgimg from '../../img/flightbg.jpg'
import From from '../From/From';
import RadioButtons from '../RadioButtons/RadioButtons';
import To from '../To/To';
import './Form.css'

const Form = () => {
    return (
        <div className='img-fluid d-flex justify-content-center align-items-center shadow-lg'
            style={{
                backgroundImage: 'url(' + bgimg + ')',
                backgroundSize: "cover",
                height: "100vh",
                width: "100vw",
                color: "/f5f5f5"
            }}
        >
            <div className='form-body'>
                <h1 className='fs-2 mb-5 mt-3 fw-light text-warning ms-5'>Flight deals with Virgin Atlantic</h1>
                <RadioButtons></RadioButtons>

                <div className='d-flex justify-content-center align-items-center w-100'>
                    <div class="row row-cols-2">
                        <div class="col d-flex">
                            <From></From>
                            <To></To>
                        </div>

                        <div class="col">Column</div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Form;