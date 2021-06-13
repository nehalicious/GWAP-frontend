import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSelector} from "react-redux";

export default function SceneBlock(props) {
    const guess = useSelector(store=> store.guess);

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

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Container className="my-4 py-3" style={blockStyle}>
                        <p style={description}>{props.scene}</p>
                    </Container>
                </Col>
                 <Col>
                    <Container className="my-4 py-3" style={blockStyle}>
                        {
                            guess !== '' ?
                                <p style={description}>Last guess: {guess}</p> :
                                <p style={description}> No guesses made yet</p>
                        }
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}