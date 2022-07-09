import React from 'react'
import Button  from 'react-bootstrap/Button'

export const Reglas = ({onSetStep}) => {
  return (
    <>
        <h1>Reglas</h1>
        <h3>Reglas del juego</h3>

        <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={() => { onSetStep() }}>
                Vamos Alla!
            </Button>
        </div>
    </>
  )
}
