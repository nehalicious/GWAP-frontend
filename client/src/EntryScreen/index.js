import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import axios from 'axios'

export default function EntryScreen() {
    const [name, setName] = useState(null);
    const [invalid, setInvalid] = useState(false);

    const submit = () => {
        if(name === null) {
            setInvalid(true)
        } else {
            axios.post('/player', {name: name})
                .then(res => console.log(res))
                .catch(error => console.log(error))
        }
    };

    return (
        <Container fluid>

            <h1>Research Project - GWAP</h1>

            <Form.Group controlId="name">
                <Form.Label>Enter your name</Form.Label>
                <Form.Control type="text" placeholder="John Doe" onChange={e=>setName(e.target.value)}/>
            </Form.Group>

            <Button>
                Next
            </Button>

            <p> Please fill in your name</p>

        </Container>
    )
}