import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SelectedHint(props) {
    const [answer, setAnswer] = useState('')

    const getGuessingBox = () => {
        return (<Form.Group>
            <Form.Control type="text" onChange={(e)=>setAnswer(e.target.value)}/>
            <Button>Submit</Button>
        </Form.Group>)
    };

    return (
        <>
        <h1>{props.hint.hint}</h1>
            {props.type === 'G' ? getGuessingBox() : null}
        </>
    )
}