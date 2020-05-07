import React from 'react';
import './Detail.css';

const HeaderDetail = () => {
    return (
        <div className="header__detail">
            <div className="header__detail-circle-container">
                <div className="outside-circle">
                    <div className="inside-circle"></div>
                </div>
            </div>
            <div className="header__detail-circles-container">
                <div className="header-red-circle"></div>
                <div className="header-yellow-circle"></div>
                <div className="header-green-circle"></div>
            </div>
        </div>
    );
}

export default HeaderDetail;