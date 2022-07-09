import types from "../Reducers/Types/types";


const addNewPlayers = (jugadores) => (
    {
        type : types.ADD_JUGADORES,
        payload : jugadores
    }
)

const addPuntos = (puntosJugador, nombreJugador) => (
    {
        type : types.ADD_PUNTOS,
        payload : {jugador : nombreJugador, puntos : puntosJugador }
    }
)

const cleanRedux = () => (
    {
        type : types.CLEAN
    }
)

export {
    addNewPlayers,
    addPuntos,
    cleanRedux
}