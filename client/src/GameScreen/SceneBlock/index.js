import React from 'react';
import Container from 'react-bootstrap/Container'

export default function SceneBlock(props) {
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
        <Container className="my-4 py-3" style={blockStyle}>
            <p style={description}>{props.scene}</p>
        </Container>
    )
}