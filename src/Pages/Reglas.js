import React from 'react'
import Button  from 'react-bootstrap/Button'

export const Reglas = ({onSetStep}) => {
  return (
    <>
        <h1>Reglas</h1>
        <h3>Reglas del juego</h3>
        <div style={{color:"black"}}>

        <p>El siguiente programa simula un juego de generala. Usted vera en la pantalla superior derecha 5 cuadrados con numeros que seran nuestros dados. El objetivo es conseguir puntos mediante jugadas al arrojar los dados.
        </p>
        <p>
          Solo se ùede arrojar 3 veces los dados por turnos. Al hacer click en el boton "Tirar Dados" los cuadrados con numeros cambiaran simulando el arrojar de dados del juego de mesa.
        </p>
        <p>Si usted desea que uno de los dados no vuelva a ser lanzado solo debe hacer click en el cuadrado. Este se tornara violeta y al clickear en "Tirar Dados" este no cambiara</p>
        <p>Las jugadas para conseguir puntos son Escalera, Full, Poker y Generala</p>
        <p>La Escalera se consigue al realizar un lanzamiento que tuviera la forma de 1,2,3,4,5 o 2,3,4,5,6. Y suma 20 puntos y si se consigue al arrojar los dados por primera vez se considera "Escalera Servida" y vale 25 puntos</p>
        <p>El full se consigue al realizar un lanzamiento donde 3 dados contiene un mismo numero y los otros 2 tienen otro numero distinto pero igual entre ellos. Ejemplo; 3,3,3,5,5 o 1,1,4,4,4. Suma 30 puntos y servida 35</p>
        <p>El poker se consigue al realizar un lanzamiento donde 4 dados contiene un mismo numero. Ejemplo; 3,3,3,3,6 o 2,2,2,2,4. Suma 40 puntos y servida 45</p>
        <p>Por ultimo pero no menos importante la generala se consigue al realizar un lanzamiento donde los 5 dados contiene un mismo numero. Ejemplo; 1,1,1,1,1 o 5,5,5,5,5. Suma 60 puntos y servida 100</p>
        <p>Si al arrojar 3 veces los dados no se consiguen ningun juego, se puede elegir poner puntos a los numeros del 1 al 6. Por ejemplo al arrojar el dado tengo 1,1,2,4,6 puedo elegir agregar 2 puntos al "Uno" por que se multiplica 1 por 2, 2 puntos al "Dos" ya que 2 por 1 (la cantidad de 2 que tengo en mis dados) es igual a 2, 4 puntos al "Cuatro", etc.</p>
        <p>Tambien puede elegir tachar una jugada por ejemplo poner 0 a la generala o a los numeros. Recordar que si se pone 0 a alguna de las jugadas no se podra volver a elegir dicha jugada</p>
        <p>Gana el jugador que mas puntos consigue.</p>
        <p>Gracias por JUGAR. Que se diviertan!!!</p>
        </div>

        <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={() => { onSetStep() }}>
                Vamos Alla!
            </Button>
        </div>
    </>
  )
}
