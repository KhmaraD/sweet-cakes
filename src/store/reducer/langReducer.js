import state from "../../state/state";
import {createStore} from "redux";
import {SET_LANG} from "../action/action";

const defaultState = state;

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LANG:
            return {...state, language: action.payload}
        default:
            return state;
    }
}

export const store = createStore(reducer);