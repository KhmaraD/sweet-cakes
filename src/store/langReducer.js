import state from "../state/state";
import {createStore} from "redux";

const SET_LANG = "SET_LANG";

const defaultState = state;

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LANG:
            return {...state, language: action.payload}
        default:
            return state;
    }
}

export const setLangAction = (payload) => ({type: SET_LANG, payload});

export const store = createStore(reducer);