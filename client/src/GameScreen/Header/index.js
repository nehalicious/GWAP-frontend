import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useSelector} from "react-redux";

export default function Header() {
    const points = useSelector(store=>store.score)
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
            <span>
                <span className="d-none d-md-block px-3" style={headingStyle}> SceneFinder </span>
                <span className=" pr-0 justify-content-end" style={headingStyle}>Points: {points}</span>
            </span>
        </Container>
    )
}