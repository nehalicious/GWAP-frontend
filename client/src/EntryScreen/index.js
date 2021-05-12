import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Button from 'react-bootstrap/Button';

import {setPlayer, setScore} from "../actions/player";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"

import axios from 'axios'

export default function EntryScreen() {
    const [name, setName] = useState(null);
    const [invalid, setInvalid] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const containerStyle = {
        width: '100%',
        textAlignLast:'center',
        minHeight: '100vh'
    };

    const submit = () => {
        if(name === null || name==='') {
            setInvalid(true)
        } else {
            axios.post('http://localhost:8000/player', {name: name})
                .then(res => {
                    console.log(res);
                    dispatch(setPlayer(res.data._id));
                    dispatch(setScore(res.data.points));
                    history.push('/EnterGameScreen')
                })
                .catch(error => console.log(error))
        }
    };

    return (
        <Container style={containerStyle} fluid>

            <h1 className="p-5 my-lg-5 heading">Research Project - GWAP</h1>

            <Form.Group className="px-5 py-lg-3 py-xs-2" controlId="name">

                    <Form.Label>Enter your name</Form.Label>

                    <Form.Control
                        className='name-form'
                        type="text"
                        placeholder="John Doe"
                        onChange={e=>{setInvalid(false); setName(e.target.value)}}/>

            </Form.Group>

            <Button onClick={submit}>
                Next
            </Button>

            {invalid ? <p className="my-3" style={{color: 'red'}}> Please fill in your name</p> : null}

        </Container>
    )
}