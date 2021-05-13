import React, {useEffect} from 'react'
import socket from "./socket";
import {useDispatch} from "react-redux";
import {setPlayer, setScore, setPlayerType} from "../actions/player";

export default function Receiver() {
    const dispatch = useDispatch()
    useEffect(()=> {
        socket.on('player', ({_id, name, points, type}) => {
        dispatch(setPlayer(_id));
        dispatch(setScore(points));
        dispatch(setPlayerType(type));
    });
    }, []);

     return null;

}