import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import { useSelector,useDispatch } from 'react-redux'
import socket from '../../utils/socket';
import {setHint} from "../../actions/hint";

export default function FillTemplate(props) {
    const [text, setText] = useState('');
    const player = useSelector(store=>store.player);
    const session = useSelector(store=>store.session_id);
    const round = useSelector(store=> store.round);
    const dispatch = useDispatch();

    const containerStyle = {
        background: '#FFFFFF',
        minHeight: '50vh',
        minWidth: '40vw'
    };

    const hintStyle = {
        width: '100%',
        textAlign: 'center',
        fontSize: '3vh',
        fontWeight: 'bold'
    };

    const next = (e) => {
        e.preventDefault();
        socket.emit('hint',
            {
                player: player,
                session: session,
                round: round,
                hint_id: props.hint_id,
                hint: text}
            );
        dispatch(setHint(props.hint + " " + text));
        props.isVoting(true)
    };

    return(
        <Container style={containerStyle}>
            <Row className="px-4 pt-5 pb-2">
                <p style={hintStyle}>
                    {props.hint}
                </p>
            </Row>
            <Row className="m-4 px-4">
                <Form.Group style={{width: '100%', textAlign: 'center'}}>
                    <Form.Control onChange={(e)=> setText(e.target.value)} type="text" placeholder="A blender" />
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <button
                        onClick={(e)=>{e.preventDefault(); props.prev()}}>
                        Back
                    </button>
                </Col>
                <Col>
                    <button
                    onClick={(e)=> {next(e)}}>
                        Next
                    </button>
                </Col>
            </Row>
        </Container>
    )
}