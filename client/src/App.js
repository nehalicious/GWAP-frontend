import React, {useEffect, useState} from 'react';
import './App.css';
import Routes from "./Routes";
import socketClient  from "socket.io-client";

function App() {
    const [message, setMessage] = useState('begin');
    const SERVER = "http://127.0.0.1:8000";
    let socket = socketClient (SERVER);
    socket.on('message', (m) => {
        setMessage(m)});

    return (
        <>
            <Routes/>
            <h1>{message}</h1>
        </>
    );
}

export default App;
