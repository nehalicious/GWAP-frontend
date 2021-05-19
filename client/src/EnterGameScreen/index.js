import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import {session_scene} from "../reducers/sessionReducer";

export default function EnterGameScreen() {

    const [waiting, isWaiting] = useState(true);
    const scene = useSelector(store=>store.session_scene);
    const type = useSelector(store=>store.player_type);

    useEffect(()=> {
        if (scene !== '') {
            isWaiting(false);
        } else {
            isWaiting(true)
        }
    }, [scene]);

    return (
        <>
            <h1> Welcome to gameroom </h1>
            {waiting ? <p> Waiting for players to join </p> : null}
            {!waiting && type==='N'? <p> {scene} </p> : null}
            {!waiting && type==='G'? <p> Waiting for hints </p> : null}
        </>

    )
}