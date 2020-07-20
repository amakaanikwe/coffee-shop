import React from "react";
import {createStore} from "redux";

const reducer = (state, action) => {
    switch(action.type){
        case "": {
            state = {...state, name: action.payload}
            break;
        }
        case "": {
            state.age = action.payload;
            break;
        }
    return state;
    }
}