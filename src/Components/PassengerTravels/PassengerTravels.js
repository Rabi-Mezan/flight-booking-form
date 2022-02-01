import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Passenger from './Passenger/Passenger';
import SingleCatagory from './Passenger/SingleCatagory';
import './PassengerTravels.css'
import Travelclass from './TravelClass/Travelclass';

const PassengerTravels = () => {
    return (
        <div className='mt-3'>
            <lebel className='fs-4  fw-light'>Passenger/Travel Class</lebel> <br />
            <Dropdown
                style={{ borderBottom: '1px solid gray' }}
                className='mt-3 d-flex dropdown '>
                <Dropdown.Toggle className='dropdown' id="" variant="none" >
                    1 Passenger, Premium
                </Dropdown.Toggle>

                <Dropdown.Menu className='menu mt-2' >
                    <div className='p-2 mb-3' >
                        <lebel className="fs-6 ms-2 fw-light">Travel Class</lebel>
                        <Travelclass></Travelclass>
                    </div>

                    <Dropdown.Divider />
                    <div className='p-2 mb-3'>
                        <lebel className="fs-6 ms-2 fw-light">PASSENGERS</lebel>
                        <Passenger></Passenger>
                        <Dropdown.Divider />
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>

    );
};

export default PassengerTravels;