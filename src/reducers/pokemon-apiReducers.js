/**
 * Created by OunknownO on 21.02.2017..
 */

    export default function reducer(state={
        name: "",
        weight: "",
        height: "",
        move1: "",
        move2: "",
        move3: "",
        move4: "",
        sprite: "",
    }, action) {
        switch (action.type){
            case "FETCH_POKEMON_DATA": {
                return {...state,
                    fetching: true
                }
            }
            case "FETCH_POKEMON_REJECTED": {
                return {...state,
                    fetching: false,
                    error: action.data
                }
            }
            case "FETCH_POKEMON_DATA_FULFILLED": {
                return {...state,
                    fetching: false,
                    fetched: true,
                    name: action.results.name,
                    weight: action.results.weight,
                    height: action.results.height,
                    move1: action.results.moves[0].move.name,
                    move2: action.results.moves[1].move.name,
                    move3: action.results.moves[2].move.name,
                    move4: action.results.moves[3].move.name,
                    sprite: action.results.sprites.front_default,
                }
            }
        }

        return state;
    }


export function reducerAList(state={
    pokemon: [],
}, action) {
    switch (action.type){
        case "FETCH_A_DATA": {
            return {...state,
                fetching: true
            }
        }
        case "FETCH_A_REJECTED": {
            return {...state,
                fetching: false,
                error: action.data
            }
        }
        case "FETCH_A_DATA_FULFILLED": {
            return {...state,
                fetching: false,
                fetched: true,
                pokemon: action.resultsP.results

            }
        }
    }
    return state;
}



export function mPkArray(state={
    mPk: [],
}, action) {
    switch (action.type) {
        case "ADD_POKEMON": {
            return {
                ...state,
                mPk: [...state.mPk , action.newPokemon]
            }
        }
        case "REMOVE_POKEMON": {
            return {
                ...state,
                mPk: [...state.mPk.filter(element => element !== action.newPokemon)]
            }

        }
        case "RETURN_ARRAY": {
            return {
                ...state,
                mPk: [...state.mPk]
            }
        }
    }
    return state;
}