import React, {useState} from 'react';
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Header from "../GameScreen/Header";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom'

export default function GameOverScreen() {
    const final = useSelector(store=>store.final_score);
    const [max, setMax] = useState(0);
    const history = useHistory();

    const backgroundStyle = {
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#FFF3E9',
        textAlignLast: 'center',
        alignContent:'center'
    };

    const getStyle = (score) => {
        return {
            background:  '#FFFFFF',
            borderRadius: '15px',

        }
    };

    const createRow = (player) => {
        if(player.points > max) {
            setMax(player.points);
        };

        return (
            <Row  style={getStyle(player.points)} className="my-2 mx-auto p-3">
                <Col className="ml-0 pl-0" xs={9}> {player.name} </Col>
                <Col  xs={3}>
                    {player.points}
                </Col>
            </Row>
        )
    };

    return (
        <Container style={backgroundStyle} className="px-0" fluid>
            <Header/>
            <h1 className="py-3" style={{ fontWeight: 'bold', color: '#373131'}}>
                Game Over
            </h1>
            {final ?
                <Container>
                    {final.players.map(x => createRow(x))}
                </Container>
                : null
            }
            <Row className="justify-content-center py-2">
                <Button onClick={()=>history.push('/EntryScreen')}>
                    Play Again
                </Button>
            </Row>
        </Container>
    )
}
