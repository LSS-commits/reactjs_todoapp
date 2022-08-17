import React from 'react';
import { IconContext } from 'react-icons';
import { FaSpinner } from 'react-icons/fa';

const FetchingSpinner = () => (
    <div id="fetchingSpinner">
        <IconContext.Provider value={{ className: "spinner" }}>
            <FaSpinner />
        </IconContext.Provider>
    </div>
)

export default FetchingSpinner;