import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import socket from '../../utils/socket';
import SceneBlock from "../SceneBlock";

export default function Vote() {
    const hint = useSelector(store=>store.hint);
    const room = useSelector(store=>store.room);
    const round = useSelector(store=>store.round);
    const hints = useSelector(store=> store.hints);
    const scene = useSelector(store=>store.session_scene);

    const [voted, setVoted] = useState(null);
    const hints_index=[
        'It contains',
        'It is used for',
        'It is surrounded by',
        'Outdoor/ Indoor'
    ];

    const getHintStyle = (current_hint, template_id) => {
        return {
            background:  '#FFFFFF',
            borderRadius: '15px',
            opacity: voted? 0.4: template_id+current_hint === hint ? 0.4 : 1,
            cursor: template_id+current_hint !== hint ?'pointer': 'hover'
        }
    };

    const blockStyle={
        textAlign: 'center',
        background: '#FBDABC',
        borderRadius: '30px',
        width: '40vw'
    };

    const description={
        fontWeight: 'bold',
        fontSize: '3.5vh'
    }


    const handleVote = (hint_id, current_hint) => {
        // if(current_hint.templateID + current_hint.hint === hint) {
        //     return
        // };

        setVoted(hint_id);
        const data = {
            hint_id: hint_id,
            round_id: round,
            room_id: room
        };
        socket.emit('vote', data)
    };

    const makeHint = (hint) => {
        return (
            <Row  style={getHintStyle(hint.hint, hint.templateID)} className="my-2 mx-auto p-3">
                <Col className="ml-0 pl-0" xs={9}> {hints_index[hint.templateID]} {hint.hint} </Col>
                <Col onClick = {()=> handleVote(hint._id, hint)} className="grow"  xs={3}>
                    Vote
                </Col>
            </Row>
        )
    };

    return (
        <Container>
            <Container className="my-4 py-3" style={blockStyle}>
                <p style={description}>{scene}</p>
            </Container>
            {/*<Row style={hintStyle} className="my-2 mx-auto p-3">*/}
            {/*    <Col className="ml-0 pl-0" xs={9}> {hint} </Col>*/}
            {/*    <Col onClick = {()=> setVoted(hint._id)} xs={3}>Vote </Col>*/}
            {/*</Row>*/}
            <p style={{fontWeight: 'bold'}}>Vote for the most relevant hint</p>
            {hints.map(x => makeHint(x))}
        </Container>
    )
}