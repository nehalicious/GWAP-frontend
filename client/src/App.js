import React, {useEffect, useState} from 'react';
import './App.css';
import Routes from "./Routes";
import socket from "./utils/socket";
import Receiver from "./utils/Receiver";

function App() {
    const [message, setMessage] = useState('begin');

    socket.on('message', (m) => {
        setMessage(m)
    });

    return (
        <>
            <Routes/>
            <Receiver/>
            <h1>{message}</h1>
        </>
    );
}

export default App;
