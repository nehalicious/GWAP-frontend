import React, {useState} from 'react';
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function EnterGameScreen() {
    const [roomID, setRoomID] = useState(null);

    const assignRoom = () => {
        const data = roomID === null ? {player: 'player'} : {player: 'player', roomID: 'roomID'}
        axios.post('/randomroom', {player: 'player'})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

    return (
        <Container>
            <h1>Research Project - GWAP </h1>
            <Button>
                Join random room
            </Button>
            <Form.Group>
                <Form.Label>Enter game id</Form.Label>
                <Form.Control type="text" placeholder="2547BHVF" onChange={e=>setRoomID(e.target.value)}/>
            </Form.Group>
        </Container>
    )
}