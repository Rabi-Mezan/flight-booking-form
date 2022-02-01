import React, { useState } from 'react';
import bgimg from '../../img/flightbg.jpg'
import Departure from '../Departure/Departure';
import From from '../From/From';
import PassengerTravels from '../PassengerTravels/PassengerTravels';
import RadioButtons from '../RadioButtons/RadioButtons';
import Return from '../Return/Return';
import To from '../To/To';
import Voucher from '../Voucher/Voucher';
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
            <div className='form-body fw-lighter'>
                <p className='fs-2 mb-5 mt-3 fw-lighter ms-5'>Flight deals with Virgin Atlantic</p>
                <form>
                    <RadioButtons></RadioButtons>

                    <div className='d-flex justify-content-around align-items-center '>
                        <div class="row w-100 no-gutters justify-content-start d-flex align-items-center">
                            <div class="col col-lg-8 cols-12 ">
                                <div className='d-flex'>
                                    <From></From>
                                    <To></To>
                                </div>
                                <div className='d-flex'>
                                    <PassengerTravels></PassengerTravels>
                                    <Voucher></Voucher>
                                </div>
                            </div>

                            <div class="col col-lg-4 cols-12 row">
                                <div className='col-lg-6'>
                                    <Departure></Departure>
                                </div>
                                <div className='col-lg-6'>
                                    <Return></Return>
                                </div>
                                <div className='submit-btn col-lg-12 mt-5 '>
                                    <button type='submit' className='fw-light'>Book now</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </form>
            </div>

        </div>
    );
};

export default Form;