import React from 'react';

const RadioButtons = () => {
    return (
        <div>
            <div className='d-flex w-50 my-5 '>
                <div class="custom-control w-25 d-flex align-items-center custom-radio fs-4 fw-light me-2">
                    <input style={{ marginRight: '-15px' }} type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios" />
                    <label class="custom-control-label fs-5" for="defaultGroupExample1 ">One Way</label>
                </div>

                <div class="custom-control w-25 d-flex align-items-center custom-radio fs-4 fw-light ">
                    <input style={{ marginRight: '-15px' }} type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios" />
                    <label class="custom-control-label fs-5" for="defaultGroupExample1">Round Trip</label>
                </div>



            </div>
        </div>
    );
};

export default RadioButtons;