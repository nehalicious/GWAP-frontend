import React, {useEffect} from 'react'
import socket from "./socket";
import {useDispatch} from "react-redux";
import {setPlayer, setScore, setPlayerType} from "../actions/player";
import {setRoom} from '../actions/room';
import {setSession, setGuess} from "../actions/session";
import {addHint, setSelectedHint} from "../actions/hint";
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
            console.log(message)// history.push('/Vote')
        });

        socket.on('hint', hint => {
            console.log(hint);
            dispatch(addHint(hint))
        });

        socket.on('selectedHint', hint => {
            console.log(hint);
            dispatch(setSelectedHint(hint));
        })

        socket.on('guess', guess => {
            console.log(guess);
            dispatch(setGuess(guess));
        })
    }, []);

    return null;

}