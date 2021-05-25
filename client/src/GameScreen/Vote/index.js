import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import socket from '../../utils/socket';

export default function Vote() {
    const hint = useSelector(store=>store.hint);
    // const store_hints = useSelector(store=>store.hints);
    const hints = useSelector(store=> store.hints);
    // const [hints, setHints] = useState([]);
    const [voted, setVoted] = useState(null);
    const hints_index=[
        'It contains',
        'It is used for',
        'It was made in',
        'Outdoor/ Indoor'
    ];

    // useEffect(()=> {
    //     setHints(store_hints)
    // }, [store_hints]);

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
            <Row  style={hintStyle} className="my-2 mx-auto p-3">
                <Col className="ml-0 pl-0" xs={9}> {hints_index[hint.templateID]} {hint.hint} </Col>
                <Col onClick = {()=> handleVote(hint._id)} className="grow"  xs={3}>
                    Vote
                </Col>
            </Row>
        )
    };

    return (
        <Container>
            {/*<Row style={hintStyle} className="my-2 mx-auto p-3">*/}
            {/*    <Col className="ml-0 pl-0" xs={9}> {hint} </Col>*/}
            {/*    <Col onClick = {()=> setVoted(hint._id)} xs={3}>Vote </Col>*/}
            {/*</Row>*/}
            {hints.map(x => makeHint(x))}
        </Container>
    )
}