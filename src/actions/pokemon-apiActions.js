
import axios from "axios";

export function fetchPokemonData(pName) {
    let pokemonName = pName;
    return function (dispatch) {
        axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((response) => {
                dispatch({type: "FETCH_POKEMON_DATA_FULFILLED",results: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_POKEMON_DATA_REJECTED", results: err})
            })
    }
}


export function fetchAList() {
    return function (dispatch) {
        axios.get(`http://pokeapi.co/api/v2/pokemon/`)
            .then((response) => {

                dispatch({type: "FETCH_A_DATA_FULFILLED",resultsP: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_A_DATA_REJECTED", resultsP: err})
            })
    }
}

export function mPkArray(mPk){
    return{
        type: "RETURN_ARRAY",
        mPk
    }
}

export function mPkArrayAdd(newPokemon) {

        return{
            type: "ADD_POKEMON",
            newPokemon
    }
}

export function mPkArrayRemove(newPokemon) {

        return{
            type: "REMOVE_POKEMON",
            newPokemon
        }

}