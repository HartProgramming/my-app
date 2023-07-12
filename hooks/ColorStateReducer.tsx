import { useReducer } from "react";

const initialState = {
    backgroundColor: 'white',
    fontColor: '#8c52ff',
    borderColor: '#8c52ff'
}

const colorReducer = (state: any, action: any) => {
    switch(action.type){
        case 'Background':
            return {...state, backgroundColor: action.payload};
        case 'Font':
            return {...state, fontColor: action.payload};
        case 'Border': 
            return {...state, borderColor: action.payload}
        default: 
            return state;
    }
}

export default colorReducer;