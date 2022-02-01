import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './PassengerTravels.css'
import Travelclass from './TravelClass/Travelclass';

const PassengerTravels = () => {
    return (
        <div className='mt-3'>
            <lebel className='fs-4  fw-light'>Departure</lebel> <br />
            <Dropdown className='mt-3 d-flex'>
                <Dropdown.Toggle className='dropdown' id="" variant="none" >
                    Please select an option
                </Dropdown.Toggle>

                <Dropdown.Menu className='menu' >
                    <Dropdown.Item active>
                        <Travelclass></Travelclass>
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

    );
};

export default PassengerTravels;