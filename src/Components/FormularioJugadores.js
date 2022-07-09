import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addNewPlayers } from '../Actions/jugadoresAction';



export const FormularioJugadores = ( {onSetStep } ) => {
    const [player1Name, setPlayer1Name] = useState("");
    const [player2Name, setPlayer2Name] = useState("");
    const dispatch = useDispatch();

    const submitHandle = (e) => {
        e.preventDefault();
        const jugadores =  {
                jugador1: player1Name,
                jugador2: player2Name
            }
        

        dispatch(addNewPlayers(jugadores));

        onSetStep();

        }
    
  return (
    <Form onSubmit={(e) => {submitHandle(e)}}>
        <Form.Group className="mb-3">
            <Form.Label><h4>Jugador 1</h4></Form.Label>
            <Form.Control 
                size="lg"
                type="text" 
                placeholder="Ingrese Jugador 1"
                value={player1Name}
                onChange={(e) => { setPlayer1Name(e.target.value) }}
                required />
                <Form.Control.Feedback type="invalid">
                    Please choose a username.
                </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label><h4>Jugador 2</h4></Form.Label>
            <Form.Control 
                size="lg"
                type="text" 
                placeholder="Ingrese Jugador 2"
                value={player2Name} 
                onChange={(e) => { setPlayer2Name(e.target.value) }}
                required />
        </Form.Group>

        <div className="d-grid gap-2">
            <Button variant="primary" type="submit" size="lg">
                Iniciar Juego!
            </Button>
        </div>
    </Form>
)
}
