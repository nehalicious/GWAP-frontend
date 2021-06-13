import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import socket from '../../utils/socket';
import {useSelector} from "react-redux";

export default function SelectedHint(props) {
    const [answer, setAnswer] = useState('');
    const [submitted, submit] = useState(false);
    const scene = useSelector(store=>store.session_scene);
    const room = useSelector(store=> store.room);
    const session_id = useSelector(store=>store.session_id);
    const player = useSelector(store=>store.player);
    const guesserHints = useSelector(store=>store.guesserHints);

    const hints=[
        'It contains ',
        'It is used for ',
        'It is surrounded by ',
        'Outdoor/ Indoor '
    ];

    const hintStyle = {
        background:  '#FFFFFF',
        borderRadius: '15px',
    };

    const isSame = () => {
        console.log(answer);
        console.log(scene);
        return answer.toLowerCase().trim() === scene.toLowerCase().trim()
    };

    const handleSubmit = () => {
        submit(true);
        const data = {
            guess: answer,
            room_id: room,
            session_id: session_id,
            correct: isSame(),
            player_id: player
        };
        socket.emit('guess', data);
    };

    const getGuessingBox = () => {
        return (<Form.Group className="my-4">
            <Form.Control type="text" onChange={(e)=>setAnswer(e.target.value)}/>
            <Button className="my-2" onClick={handleSubmit}>Submit</Button>
        </Form.Group>)
    };

    const getHintsSoFar = () => {
        return (
            <>
                <p> Hints received so far </p>
                {guesserHints.map(x=>
                    <Row
                        className="my-2 mx-auto p-3"
                        style={hintStyle}>
                        {hints[x.templateID]} : {x.hint}
                    </Row>)}
            </>
        )
    }

    return (
        <>
            {! submitted ? <div className="p-4">
                {props.type === 'N' ? <h1>{hints[props.hint.templateID]} : {props.hint.hint}</h1> : null}
                {props.type === 'G'? getHintsSoFar() : null}
                {props.type === 'G' ? getGuessingBox() : null}
            </div> : isSame() ? <h1> Correct </h1> : <h1> Wrong </h1>
            }

        </>
    )
}