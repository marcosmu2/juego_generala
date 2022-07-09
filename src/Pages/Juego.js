import React  from 'react'
import { Col, Row } from 'react-bootstrap'
import { TablaPuntuacion } from '../Components/TablaPuntuacion'
import { MesaJuego } from '../Components/MesaJuego'

export const Juego = ({onSetStep}) => {
    



  return (
    <Row>
        <Col>
            <MesaJuego onSetStep={() => { onSetStep() }} />
        </Col>
        <Col>
            <TablaPuntuacion />
        </Col>
    </Row>
  )
}
