import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useSelector} from "react-redux";

export default function Header() {
    const points = useSelector(store=>store.score);
    const final = useSelector(store=>store.final_score);
    const player = useSelector(store=>store.player);
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
                {final===null ? <span className="px-3" style={headingStyle}> SceneFinder </span>: null}
                {final !== null && final.players.map(x=> x._id === player ?
                    <span className=" pr-0 justify-content-end" style={headingStyle}>Points: {x.points}</span>:
                    null)}
            </span>
        </Container>
    )
}