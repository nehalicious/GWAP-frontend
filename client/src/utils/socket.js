import socketClient  from "socket.io-client";

// const SERVER = "http://127.0.0.1:8000";
const SERVER = 'https://research-project-gwap.herokuapp.com/';
const socket = socketClient (SERVER);

export default socket;