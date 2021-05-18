import React from 'react';
import Header from "../Header";
import SceneBlock from "../SceneBlock";
import SelectTemplate from "../SelectTemplate";
import Container from "react-bootstrap/Container";

export default function Vote() {
     const backgroundStyle = {
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#FFF3E9',
        textAlignLast: 'center',
        alignContent:'center'
    };

    return (
        <Container style={backgroundStyle} className="px-0" fluid>

            <Header/>


        </Container>
    )
}