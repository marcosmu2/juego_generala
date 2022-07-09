import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux'

export const TablaPuntuacion = () => {

    const {jugador1, jugador2, puntosJugador1, puntosJugador2}  = useSelector((state) => state.jugadores);

  return (
    <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>{jugador1}</th>
                    <th>{jugador2}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{ puntosJugador1.Uno === null ? " - " : puntosJugador1.Uno }</td>
                    <td>{ puntosJugador2.Uno === null ? " - " : puntosJugador2.Uno }</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{ puntosJugador1.Dos === null ? " - " : puntosJugador1.Dos }</td>
                    <td>{ puntosJugador2.Dos === null ? " - " : puntosJugador2.Dos }</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{ puntosJugador1.Tres === null ? " - " : puntosJugador1.Tres }</td>
                    <td>{ puntosJugador2.Tres === null ? " - " : puntosJugador2.Tres }</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>{ puntosJugador1.Cuatro === null ? " - " : puntosJugador1.Cuatro }</td>
                    <td>{ puntosJugador2.Cuatro === null ? " - " : puntosJugador2.Cuatro }</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>{ puntosJugador1.Cinco === null ? " - " : puntosJugador1.Cinco }</td>
                    <td>{ puntosJugador2.Cinco === null ? " - " : puntosJugador2.Cinco }</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>{ puntosJugador1.Seis === null ? " - " : puntosJugador1.Seis }</td>
                    <td>{ puntosJugador2.Seis === null ? " - " : puntosJugador2.Seis }</td>
                </tr>
                <tr>
                    <td>Escalera</td>
                    <td>{ puntosJugador1.Escalera === null ? " - " : puntosJugador1.Escalera }</td>
                    <td>{ puntosJugador2.Escalera === null ? " - " : puntosJugador2.Escalera }</td>
                </tr>
                <tr>
                    <td>Full</td>
                    <td>{ puntosJugador1.Full === null ? " - " : puntosJugador1.Full }</td>
                    <td>{ puntosJugador2.Full === null ? " - " : puntosJugador2.Full }</td>
                </tr>
                <tr>
                    <td>Poker</td>
                    <td>{ puntosJugador1.Poker === null ? " - " : puntosJugador1.Poker }</td>
                    <td>{ puntosJugador2.Poker === null ? " - " : puntosJugador2.Poker }</td>
                </tr>
                <tr>
                    <td>Generala</td>
                    <td>{ puntosJugador1.Generala === null ? " - " : puntosJugador1.Generala }</td>
                    <td>{ puntosJugador2.Generala === null ? " - " : puntosJugador2.Generala }</td>
                </tr>
            </tbody>
        </Table>
    </>
  )
}
