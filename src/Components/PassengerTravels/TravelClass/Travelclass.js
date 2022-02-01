import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Travelclass = () => {
    return (
        <div className=''>


            <Dropdown className=' p-2 mt-2 d-flex' style={{ width: '380px', borderBottom: '1px solid gray' }}>
                <Dropdown.Toggle className='dropdown' id="" variant='none' >
                    Premium
                </Dropdown.Toggle>

                <Dropdown.Menu className='menu' >
                    <Dropdown.Item className=' fw-lighter' >Premium</Dropdown.Item>
                    <Dropdown.Item className=' fw-lighter'>Economy</Dropdown.Item>
                    <Dropdown.Item className=' fw-lighter' >Upper Class</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Travelclass;