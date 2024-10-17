// src/CounterStateful.js
import React, { useState } from 'react';
import './CounterStateful.css'; // Імпорт стилів для компонента

const CounterStateful = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h2>Становий Компонент</h2>
            <p className="count">Кількість: {count}</p>
            <button onClick={() => setCount(count + 1)}>Збільшити</button>
            <button onClick={() => setCount(count - 1)}>Зменшити</button>
        </div>
    );
};

export default CounterStateful;
