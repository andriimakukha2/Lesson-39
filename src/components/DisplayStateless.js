// src/DisplayStateless.js
import React from 'react';
import './DisplayStateless.css'; // Імпорт стилів для компонента

const DisplayStateless = ({ message }) => {
    return (
        <div className="display">
            <h2>Безстановий Компонент</h2>
            <p>{message}</p>
        </div>
    );
};

export default DisplayStateless;
