import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import socket from '../../utils/socket';

export default function Vote() {
    const hint = useSelector(store=>store.hint);
    const hints = useSelector(store=> store.hints);
    const [voted, setVoted] = useState(null);

    const hintStyle = {
        background: voted ? '#000000': '#FFFFFF',
        borderRadius: '15px',
        // opacity: '0.1'
    };

    const handleVote = (hint_id) => {
        setVoted(hint_id);
        socket.emit('vote', hint_id)
    };

    const makeHint = (hint) => {
        return (
             <Row key={hint._id} style={hintStyle} className="my-2 mx-auto p-3">
                <Col className="ml-0 pl-0" xs={9}> {hint.text} </Col>
                <Col onClick = {()=> handleVote(hint._id)} className="grow"  xs={3}>
                        Vote
                </Col>
            </Row>
        )
    };

    return (
        <Container>
            <Row style={hintStyle} className="my-2 mx-auto p-3">
                <Col className="ml-0 pl-0" xs={9}> {hint} </Col>
                <Col onClick = {()=> setVoted(hint._id)} xs={3}>Vote </Col>
            </Row>
            {hints.map(x => makeHint(x))}
        </Container>
    )
}