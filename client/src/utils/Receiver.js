import React, {useEffect} from 'react'
import socket from "./socket";
import {useDispatch} from "react-redux";
import {setPlayer, setScore, setPlayerType} from "../actions/player";

export default function Receiver() {
    const dispatch = useDispatch()
    useEffect(()=> {
        socket.on('player', ({player_obj, room}) => {
            console.log(player_obj);
            console.log(room);
            dispatch(setPlayer(player_obj._id));
            dispatch(setScore(player_obj.points));
            dispatch(setPlayerType(player_obj.type));
        });
    }, []);

    return null;

}