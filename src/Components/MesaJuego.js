import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Dado } from './Dado'
import { addPuntos, cleanRedux } from '../Actions/jugadoresAction';

export const MesaJuego = ({onSetStep}) => {

    const [valorDado1, setValorDado1] = useState(1);
    const [valorDado2, setValorDado2] = useState(1);
    const [valorDado3, setValorDado3] = useState(1);
    const [valorDado4, setValorDado4] = useState(1);
    const [valorDado5, setValorDado5] = useState(1);
    const [dado1Selected, setDado1Selected] = useState(false);
    const [dado2Selected, setDado2Selected] = useState(false);
    const [dado3Selected, setDado3Selected] = useState(false);
    const [dado4Selected, setDado4Selected] = useState(false);
    const [dado5Selected, setDado5Selected] = useState(false);
    const [tiros, setTiros] = useState(1);
    const [turnoJugador, setTurnoJugador] = useState(1);

    const dispatch = useDispatch();
    const {jugador1, jugador2, puntosJugador1, puntosJugador2}  = useSelector((state) => state.jugadores);

    
    const tirarDados = () => {
        let x = Math.floor(Math.random()*6) + 1;
        if(!dado1Selected){
            setValorDado1(x);
            x = Math.floor(Math.random()*6) + 1;
        }
        if(!dado2Selected ){
            setValorDado2(x);
            x = Math.floor(Math.random()*6) + 1;
        }
        if(!dado3Selected ){
            setValorDado3(x);
            x = Math.floor(Math.random()*6) + 1;
        }
        if(!dado4Selected ){
            setValorDado4(x);
            x = Math.floor(Math.random()*6) + 1;
        }
        if(!dado5Selected )
        setValorDado5(x);
    }
    
    
    useEffect(() => {
        if(tiros === 1){
            tirarDados();
        }
    }, [tiros, turnoJugador])
    
    
    const sumarPuntos = (tipo, puntos) => {
        
        let puntosEnviar = {};
        
        const puntosJugador =  turnoJugador === 1 ? puntosJugador1 : puntosJugador2
        
        
        switch (tipo) {
            case "escalera":
                puntosEnviar =  {...puntosJugador, "Escalera" : puntos }
                break;
            case "full":
                puntosEnviar =  {...puntosJugador, "Full" : puntos }
                break;
            case "poker":
                puntosEnviar =  {...puntosJugador, "Poker" : puntos }
                break;
            case "generala":
                puntosEnviar =  {...puntosJugador, "Generala" : puntos }
                break;
            case "uno":
                puntosEnviar =  {...puntosJugador, "Uno" : puntos }
                break;
            case "dos":
                puntosEnviar =  {...puntosJugador, "Dos" : puntos }
                break;
            case "tres":
                puntosEnviar =  {...puntosJugador, "Tres" : puntos }
                break;
            case "cuatro":
                puntosEnviar =  {...puntosJugador, "Cuatro" : puntos }
                break;
            case "cinco":
                puntosEnviar =  {...puntosJugador, "Cinco" : puntos }
                break;
                case "seis":
                    puntosEnviar =  {...puntosJugador, "Seis" : puntos }
                    break;
            default:
                break;
            }

        const nombreJugador = turnoJugador === 1 ? jugador1 : jugador2
        
        dispatch(addPuntos(puntosEnviar, nombreJugador ));
        setDado1Selected(false);
        setDado2Selected(false);
        setDado3Selected(false);
        setDado4Selected(false);
        setDado5Selected(false);
        setTurnoJugador( x => x === 1 ? 2 : 1);
        setTiros(1);
    }

    const calcularBotones = () => {
        let dados =  [valorDado1, valorDado2, valorDado3, valorDado4, valorDado5];
        let showButtons = <div className="d-grid gap-2 mt-3"></div>;
        let botonEscalera;
        let botonFull;
        let botonPoker;
        let botonGenerala;
        let boton1;
        let boton2;
        let boton3;
        let boton4;
        let boton5;
        let boton6;
        
        const puntosJugador =  turnoJugador === 1 ? puntosJugador1 : puntosJugador2
        
        const escaleraMenor = dados.includes(1) && dados.includes(2) && dados.includes(3) && dados.includes(4) && dados.includes(5); 
        const escaleraMayor = dados.includes(6) && dados.includes(2) && dados.includes(3) && dados.includes(4) && dados.includes(5); 
        if( ( escaleraMenor || escaleraMayor ) && puntosJugador.Escalera === null ) {
            const puntos = tiros === 1 ? 25 : 20 ; 
            botonEscalera = <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("escalera",puntos  )}}  >
                                Elegir Escalera
                            </Button>;
        }else if(tiros === 3 && puntosJugador.Escalera === null){
            botonEscalera = <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("escalera",0  )}}  >
                                Tachar Escalera
                            </Button>;
        }else{
            botonEscalera = null
        }
        
        let countDados = [0,0,0,0,0,0]
        
        for (let i = 0; i < 6 ; i++) {
            countDados[i] = dados.filter(x => x === i+1 ).length
        }
        
        const full = countDados.includes(3) && countDados.includes(2);
        if(full && puntosJugador.Full === null){
            const puntos = tiros === 1 ? 35 : 30 ;
            botonFull = <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("full",puntos  )}} >
                Elegir Full
            </Button>;
        }else if(tiros === 3 && puntosJugador.Full === null){
            botonFull = <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("full",0  )}} >
                Tachar Full
            </Button>;
        }else{
            botonFull = null
        }
        
        const poker = countDados.includes(4);
        if(poker && puntosJugador.Poker === null){
            const puntos = tiros === 1 ? 45 : 40 ;
            botonPoker = <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("poker",puntos  )}} >
                Elegir Poker
            </Button>;
        }else if(tiros === 3 && puntosJugador.Poker === null){
            botonPoker = <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("poker",0  )}} >
                Tachar Poker
            </Button>;
        }else{
            botonPoker = null
        }
        
        const generala = countDados.includes(5);
        if(generala && puntosJugador.Generala === null){
            const puntos = tiros === 1 ? 100 : 60 ;
            botonGenerala = <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("generala",puntos  )}} >
                Elegir Generala
            </Button>;
        }else if(tiros === 3 && puntosJugador.Generala === null){
            botonGenerala = <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("generala",0  )}} >
                Tachar Generala
            </Button>;
        }else{
            botonGenerala = null;
        }

        if(tiros === 3){
            boton1 = puntosJugador.Uno === null && <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("uno", countDados[0] )}}   >
                        Elegir {countDados[0]} de 1
                    </Button>;
            boton2 = puntosJugador.Dos === null && <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("dos", countDados[1] * 2 )}} >
                        Elegir {countDados[1] * 2} de 2
                    </Button>;
            boton3 = puntosJugador.Tres === null && <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("tres", countDados[2] * 3 )}} >
                        Elegir {countDados[2] * 3} de 3
                    </Button>;
            boton4 = puntosJugador.Cuatro === null && <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("cuatro", countDados[3] * 4 )}} >
                        Elegir {countDados[3] * 4 } de 4
                    </Button>;
            boton5 = puntosJugador.Cinco === null && <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("cinco", countDados[4] * 5 )}} >
                Elegir {countDados[4] * 5} de 5
                    </Button>;
            boton6 = puntosJugador.Seis === null && <Button variant="info" size="lg" className="mt-2" onClick={() => { sumarPuntos("seis", countDados[5] * 6 )}} >
                        Elegir {countDados[5] * 6} de 6
                    </Button>;
        }
        
        showButtons =   <div className="d-grid gap-2 mt-3">
                            {botonEscalera}
                            {botonFull}
                            {botonPoker}
                            {botonGenerala}
                            {boton1}
                            {boton2}
                            {boton3}
                            {boton4}
                            {boton5}
                            {boton6}
                        </div>;

return showButtons;


}

const showButtons = calcularBotones();

const valoresJugador1 = Object.values(puntosJugador1)
const valoresJugador2 = Object.values(puntosJugador2)

if(valoresJugador1.filter(punto => (punto === null)).length === 0 && valoresJugador2.filter(punto => (punto === null)).length === 0 ) {
    const totalJugador1 = valoresJugador1.reduce((prev,curr) => prev + curr , 0);
    const totalJugador2 = valoresJugador2.reduce((prev,curr) => prev + curr , 0) 
    const ganador = totalJugador1 > totalJugador2 ? jugador1 : jugador2
    const totalGanador = totalJugador1 > totalJugador2 ? totalJugador1 : totalJugador2
    const totalPerdedor = totalJugador1 > totalJugador2 ? totalJugador2 : totalJugador1
    
    return <>
            <h1>FIN DEL JUEGO</h1>
            <h3>FELICITACIONES!!!!! {ganador} gano {totalGanador} a {totalPerdedor} </h3>
            <div className="d-grid gap-2 mt-3">
                <Button variant="success" size="lg" className="mt-2" onClick={() => { onSetStep(); dispatch(cleanRedux()); }} > VOLVER A JUGAR </Button>
            </div>
           </>;
}

return (
    <>
    <h1>Turno Jugador { turnoJugador === 1 ? jugador1 : jugador2 }</h1>
    <h2>Tiro {tiros}</h2>
    <div className="d-flex justify-content-center">
        <Dado key="dado1" valor={valorDado1} isSeleted={dado1Selected} onSetIsSelected={ () => {setDado1Selected( x => !x)}} ></Dado>
        <Dado key="dado2" valor={valorDado2} isSeleted={dado2Selected} onSetIsSelected={ () => {setDado2Selected( x => !x)}} ></Dado>
        <Dado key="dado3" valor={valorDado3} isSeleted={dado3Selected} onSetIsSelected={ () => {setDado3Selected( x => !x)}} ></Dado>
        <Dado key="dado4" valor={valorDado4} isSeleted={dado4Selected} onSetIsSelected={ () => {setDado4Selected( x => !x)}} ></Dado>
        <Dado key="dado5" valor={valorDado5} isSeleted={dado5Selected} onSetIsSelected={ () => {setDado5Selected( x => !x)}} ></Dado>
    </div>
    {
        tiros < 3 &&
        <div className="d-grid gap-2 mt-3">
            <Button variant="primary" size="lg" onClick={() => { tirarDados(); setTiros(t => t + 1);  }}>
                Tirar Dados
            </Button>
        </div> 
    }
    
    {showButtons}


    </>
  )
}
