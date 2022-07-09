import React, { useState } from 'react'
import { FormularioJugadores } from '../Components/FormularioJugadores'
import { Juego } from './Juego';
import { Reglas } from './Reglas';

export const Main = () => {

  const [step, setStep] = useState(1);

  let showPage;
  
  switch (step) {
    case 1:
      showPage = <>
                    <h1>Bienvenido a GENERALA!!!</h1>
                    <h3>Para iniciar introduzca el nombre de los participantes</h3>
                    <br/>
                    <FormularioJugadores onSetStep={ () => { setStep(2) } } />
                </>;
      break;
    case 2:
      showPage = <Reglas onSetStep={ () => { setStep(3) } }></Reglas>
      break;
    case 3:
        showPage = <Juego onSetStep={ () => { setStep(1)} } ></Juego>
        break;
    default:
      break;
  }

  return (
    <>
      <div style={{color:"blueviolet"}} className='text-center'>
        { showPage }
     </div>
    </>
  )
}
