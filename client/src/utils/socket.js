import socketClient  from "socket.io-client";

const SERVER = "https://research-project-gwap.herokuapp.com/";
const socket = socketClient (SERVER);

export default socket;