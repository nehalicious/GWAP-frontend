import React, {useEffect} from 'react'
import socket from "./socket";
import {useDispatch} from "react-redux";
import {setPlayer, setScore, setPlayerType} from "../actions/player";
import {setRoom} from '../actions/room';
import {setSession} from "../actions/session";
import {useHistory} from 'react-router-dom'


export default function Receiver() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=> {
        socket.on('player', ({player_obj, room}) => {
            console.log(player_obj);
            console.log(room);
            dispatch(setPlayer(player_obj._id));
            dispatch(setScore(player_obj.points));
            dispatch(setPlayerType(player_obj.type));
            dispatch(setRoom(room._id));
            history.push('/GameScreen')
        });

        socket.on('join', room => {
            console.log('new player joined')
        });

        socket.on('session', new_session => {
            console.log('new_session');
            dispatch(setSession(new_session));
        });

        socket.on('receive_hint', message => {
            // history.push('/Vote')
        })
    }, []);

    return null;

}