import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calender = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>


            <DatePicker className='datepicker mt-3'
                renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div>

                        <button
                            aria-label="Previous Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--previous"
                            }
                            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                            onClick={decreaseMonth}
                        >
                            <span
                                className={
                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                                }
                            >
                                {"<"}
                            </span>
                        </button>
                        <span className="react-datepicker__current-month">
                            {monthDate.toLocaleString("en-US", {
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                        <button
                            aria-label="Next Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--next"
                            }
                            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                            onClick={increaseMonth}
                        >
                            <span
                                className={
                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                                }
                            >
                                {">"}
                            </span>
                        </button>
                    </div>
                )}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                monthsShown={2}
            />


        </>

    );
};

export default Calender;