import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container'
import Header from './Header'
import SceneBlock from "./SceneBlock";
import SelectTemplate from "./SelectTemplate";
import {useSelector} from "react-redux";
import Vote from './Vote';
import SelectedHint from "./SelectedHint";

export default function GameScreen() {
    const [waiting, isWaiting] = useState(true);
    const scene = useSelector(store=>store.session_scene);
    const type = useSelector(store=>store.player_type);
    const [voting, isVoting] = useState(false);
    const hints = useSelector(store=>store.hints);
    const selectedHint = useSelector(store=>store.selectedHint);

    useEffect(()=> {
        if (scene !== '') {
            isWaiting(false);
        } else {
            isWaiting(true)
        }
    }, [scene]);

    const backgroundStyle = {
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#FFF3E9',
        textAlignLast: 'center',
        alignContent:'center'
    };

    return (
        <Container style={backgroundStyle} className="px-0" fluid>

            <Header/>

            {waiting ? <SceneBlock scene="Waiting for players to join "/> : null}
            {!waiting && type==='N' && !voting?  <SceneBlock scene={scene}/>  : null}
            {!waiting && type==='G' && !voting? <SceneBlock scene="Waiting for hints"/>: null}

            {!voting && !waiting && type==='N'? <SelectTemplate isVoting={isVoting}/> : null}
            {voting? <Vote hints={hints}/>: null}

            <SelectedHint hint={selectedHint} type={type}/>

        </Container>
    )
}