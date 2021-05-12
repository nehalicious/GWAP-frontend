import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import {setPlayer} from "../actions/player";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"

import axios from 'axios'

export default function EntryScreen() {
    const [name, setName] = useState(null);
    const [invalid, setInvalid] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const submit = () => {
        if(name === null || name==='') {
            setInvalid(true)
        } else {
            axios.post('http://localhost:8000/player', {name: name})
                .then(res => {
                    console.log(res);
                    dispatch(setPlayer(res.data._id));
                    history.push('/EnterGameScreen')
                })
                .catch(error => console.log(error))
        }
    };

    return (
        <Container fluid>

            <h1>Research Project - GWAP</h1>

            <Form.Group controlId="name">
                <Form.Label>Enter your name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="John Doe"
                    onChange={e=>{setInvalid(false); setName(e.target.value)}}/>
            </Form.Group>

            <Button onClick={submit}>
                Next
            </Button>

            {invalid ? <p> Please fill in your name</p> : null}

        </Container>
    )
}