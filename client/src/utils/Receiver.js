import React, {useEffect, useState} from 'react'
import socket from "./socket";
import {useDispatch, useSelector} from "react-redux";
import {setPlayer, setScore, setPlayerType} from "../actions/player";
import {setRoom, setFinalScore} from '../actions/room';
import {setSession, setGuess} from "../actions/session";
import {addHint, setAllHints, setSelectedHint} from "../actions/hint";
import {setRound} from "../actions/round";
import {useHistory} from 'react-router-dom'


export default function Receiver() {
    const dispatch = useDispatch();
    const history = useHistory();

    let player = useSelector(store=>store.player);

    const reset = () => {
        dispatch(setSelectedHint(''));
        dispatch(setAllHints([]));
        dispatch(setGuess(''));
    };

    useEffect(()=> {
        socket.on('player', ({player_obj, room}) => {
            console.log(player_obj);
            console.log(room);
            dispatch(setPlayer(player_obj._id));
            dispatch(setScore(player_obj.points));
            dispatch(setPlayerType(player_obj.type));
            dispatch(setRoom(room._id));
            reset();
            history.push('/GameScreen')
        });

        socket.on('join', room => {
            console.log('new player joined')
        });

        socket.on('session', new_session => {
            console.log('new_session');
            dispatch(setSession(new_session));
            reset();
        });

        socket.on('receive_hint', message => {
            console.log(message)
        });

        socket.on('hint', hint => {
            console.log(hint);
            dispatch(addHint(hint))
        });

        socket.on('selectedHint', hint => {
            dispatch(setSelectedHint(hint));
        });

        socket.on('guess', guess => {
            dispatch(setGuess(guess));
        });

        socket.on('round', data => {
            dispatch(setRound(data.new_round._id));
            reset();
        });

        socket.on('update_scores', data => {
           dispatch(setFinalScore(data));
        });

        socket.on('game_over', data => {
            dispatch(setFinalScore(data));
            history.push('/GameOver')
        });

    }, []);

    return <></>;

}