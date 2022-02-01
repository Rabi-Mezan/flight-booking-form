import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Calender from '../Calender/Calender';
import './Departure.css'


const Departure = () => {

    return (
        <div>
            <lebel className='fs-4  fw-light'>Departure</lebel>
            <Calender></Calender>
        </div>

    );

};

export default Departure;