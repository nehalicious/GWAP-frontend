import React from 'react';
import {useSelector} from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function Vote() {
    const hint = useSelector(store=>store.hint);

    const hintStyle = {
        background: '#FFFFFF',
        borderRadius: '15px',
    };

    return (
        <Container>
            <Row style={hintStyle} className="my-2 mx-auto p-3">
                <Col className="ml-0 pl-0" xs={9}> {hint} </Col>
                <Col xs={3}>Vote </Col>
            </Row>
            <Row style={hintStyle} className="my-2 mx-auto p-3">
                <Col className="ml-0 pl-0" xs={9}> It is used for washing </Col>
                <Col className="grow"  xs={3}>

                        Vote
                   </Col>
            </Row>
        </Container>
    )
}