import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FillTemplate from "../FillTemplate";
import './hint.css';

export default function SelectTemplate(props) {
    const [selected, select] = useState('');
    const [displayAll, setDisplay] = useState(true);

    const hints=[
        'It contains...',
        'It is used for...',
        'It is surrounded by...',
        'Outdoor/ Indoor...'
    ];

    const hintStyle= {
        cursor: 'pointer',
        background: '#FFFFFF',
        textAlign: 'center',
        borderRadius: '15px',
    };

    const handleClick = (hint) => {
        select(hint);
        setDisplay(false);
    };

    const createHint = (hint) => {
        return (
            <Row
                id={hints.indexOf(hint)}
                className="grow py-3 my-3 mx-md-5 mx-xs-3"
                style={hintStyle}
                onClick = {()=>handleClick(hint)}
            >
                <p style={{width: '100%', textAlign: 'center'}}> { hint }...</p>
            </Row>
        )};

    return (
        <Container fluid>
            <p style={{fontWeight: 'bold'}}> Click on the templates below to submit a hint</p>
            {displayAll ?
                hints.map(hint=>createHint(hint)):
                <FillTemplate
                    hint={selected}
                    hint_id={hints.indexOf(selected)}
                    prev={()=>setDisplay(true)}
                    isVoting={props.isVoting}/>
            }
        </Container>
    )
}