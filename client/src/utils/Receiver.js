import React, {useEffect} from 'react'
import socket from "./socket";
import {useDispatch, useSelector} from "react-redux";
import {setPlayer, setScore, setPlayerType} from "../actions/player";
import {setRoom} from '../actions/room';
import {setSession, setGuess} from "../actions/session";
import {addHint, setAllHints, setSelectedHint} from "../actions/hint";
import {setRound} from "../actions/round";
import {useHistory} from 'react-router-dom'


export default function Receiver() {
    const dispatch = useDispatch();
    const history = useHistory();

    const player = useSelector(store=>store.player);

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
            dispatch(setSelectedHint(''));
            dispatch(setAllHints([]));
            dispatch(setGuess(''));
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
        });

        socket.on('guess', guess => {
            console.log(guess);
            dispatch(setGuess(guess));
        });

        socket.on('round', data => {
            console.log(data);
            dispatch(setRound(data.new_round._id));
            dispatch(setSelectedHint(''));
            dispatch(setAllHints([]));
            dispatch(setGuess(''));
        });

        socket.on('update_scores', data => {
            console.log(data);
            console.log(player);
            for(let i = 0; i<data.players.length; i++) {
                let current = data.players[i];
                console.log(current._id);
                if(current._id === player) {
                    console.log(current.points);
                    dispatch(setScore(current.points))
                }
            }
        })
    }, []);

    return null;

}