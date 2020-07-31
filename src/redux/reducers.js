import  { COFFEE_INCREASE, COFFEE_DECREASE, TREATS_INCREASE, TREATS_DECREASE, REMOVE, HANDLE_COMP_TOGGLE} from "./actions";

const reducer = (state, action) => {
    switch(action.type) {
        case COFFEE_INCREASE : 
            return {...state, count: state.coffee.value + 1 }
        
        case COFFEE_DECREASE : 
            return {...state}
        
        case TREATS_INCREASE : 
        return {...state, count: state.treate.value + 1 }
        
        case TREATS_DECREASE : 
            return {...state, count: state.treate.value - 1   }
        
        case REMOVE :
            return {...state, cart: []}
        case HANDLE_COMP_TOGGLE :
            return {...state, turnCompToggleOn: !state.turnCompToggleOn}
            // Component Toggle
            // const handleCompToggle = () => {
            //     this.setState((prevState) => ({
            //       turnCompToggleOn: !prevState.turnCompToggleOn,
            //     }));
            //   }

        default:
            return state;

    }
}

export default reducer;


