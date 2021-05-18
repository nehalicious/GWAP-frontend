import React from 'react';
import Container from 'react-bootstrap/Container'

export default function Header() {
    const headerContainerStyle = {
        width : '100wv',
        backgroundColor : '#F9BC84',
        textAlign: 'center'
    };

    const headingStyle= {
        fontWeight: 'bold',
        color: '#373131',
        fontSize: '5vh',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '100%'
    };

    return (
        <Container style={headerContainerStyle} className="py-3 px-0 mx-0" fluid>
            <h1 className="px-3" style={headingStyle}>Welcome to game with a purpose </h1>
        </Container>
    )
}