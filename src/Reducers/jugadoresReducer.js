import types from "./Types/types";

const initialState = {
    jugador1: "",
    jugador2: "",
    puntosJugador1 : {
        "Uno": null,
        "Dos": null,
        "Tres": null,
        "Cuatro": null,
        "Cinco": null,
        "Seis": null,
        "Escalera": null,
        "Full": null,
        "Poker": null,
        "Generala": null,
    },
    puntosJugador2 : {
        "Uno": null,
        "Dos": null,
        "Tres": null,
        "Cuatro": null,
        "Cinco": null,
        "Seis": null,
        "Escalera": null,
        "Full": null,
        "Poker": null,
        "Generala": null,
    }
}

const jugadoresReducer = (state = initialState, action)  => {

        switch (action.type) {
            case types.ADD_JUGADORES:
                 return {
                     ...state,
                     jugador1 : action.payload.jugador1,
                     jugador2 : action.payload.jugador2,
                }
            case types.ADD_PUNTOS:{
                if (action.payload.jugador === state.jugador1 ){
                    return {
                        ...state,
                        puntosJugador1 : action.payload.puntos
                    }
                }else{
                    return {
                        ...state,
                        puntosJugador2 :  action.payload.puntos 
                    }
                }
            }
            case types.CLEAN:{
                return initialState
            }
            default:
                return state;
        }

}

export default jugadoresReducer;