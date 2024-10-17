// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterStateful from './components/CounterStateful'; // Імпорт stateful компоненту
import DisplayStateless from './components/DisplayStateless'; // Імпорт stateless компоненту
import CounterClass from './components/CounterClass'; // Імпорт класового компоненту

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Ласкаво просимо до нашого React проекту!</h1>
                <DisplayStateless message="Це статичне повідомлення." /> {/* Виклик stateless компоненту */}
                <CounterStateful /> {/* Виклик stateful компоненту */}
                <CounterClass /> {/* Виклик класового компоненту */}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Вивчити React
                </a>
            </header>
        </div>
    );
}

export default App;
