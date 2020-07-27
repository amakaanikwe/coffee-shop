import  { COFFEE_INCREASE, COFFEE_DECREASE, TREATS_INCREASE, TREATS_DECREASE, REMOVE} from "./actions";

const reducer = (state, action) => {
    switch(action.type) {
        case COFFEE_INCREASE : 
            return {...state, count: state.coffee.value + 1 }
        
        case COFFEE_DECREASE : 
            return {...state}
        
        case TREATS_INCREASE : 
        return {...state, count: state.treate.value + 1 }
        
        case TREATS_DECREASE : 
            return {...state}
        
        case REMOVE :
            return {...state, cart: []}
        default:
            return state;
    }
}

export default reducer;