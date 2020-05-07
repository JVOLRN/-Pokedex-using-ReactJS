import React from 'react';
import './Types.css';

const CardTypes = ({ types }) => {
    return (
        <div className="card-types">
            <div>{types}</div>
        </div>
    );
}

export default CardTypes;