import coffeedata from "../inventory/coffeedata.json";
import treatsdata from "../inventory/treatsdata.json";
import  { COFFEE_INCREASE, COFFEE_DECREASE, TREATS_INCREASE, TREATS_DECREASE, GET_TOTALS, GET_COFFEE_TOTAL, GET_TREATS_TOTAL, HANDLE_COMP_TOGGLE} from "./actionsTypes";

const initialState = {
    coffeeMenu: coffeedata,
    treatsMenu: treatsdata,
    turnCompToggleOn: true,
    coffeeAmount: 0,
    treatsAmmount: 0,
    coffeeTotal: 0,
    treatsTotal: 0,
    total: 0,
    amount: 0,
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case COFFEE_INCREASE : 
            return {...state, 
                coffeeMenu: state.coffeeMenu.map(coffeeItem => (coffeeItem.id === action.payload) ? {...coffeeItem, value: coffeeItem.value + 1} : coffeeItem) 
                }
            
        
        case COFFEE_DECREASE : 
            return {...state, 
                coffeeMenu: state.coffeeMenu.map      (coffeeItem   => (coffeeItem.id === action.payload) ? {...coffeeItem, value: coffeeItem.value - 1} : coffeeItem)}
        
        case TREATS_INCREASE : 
            return {...state, 
                treatsMenu: state.treatsMenu.map(treatsItem   => (treatsItem.id === action.payload) ? {...treatsItem, value: treatsItem.value + 1} : treatsItem)}
        
        case TREATS_DECREASE : 
            return {...state, 
                treatsMenu: state.treatsMenu.map(treatsItem   => (treatsItem.id === action.payload) ? {...treatsItem, value: treatsItem.value - 1} : treatsItem)}
        
        case GET_COFFEE_TOTAL :
            let {coffeeTotal, coffeeAmount} = state.coffeeMenu.reduce((cartTotal, cartItem)=>{
                const {price, value} = cartItem;
                cartTotal.coffeeAmount += value
                
                return cartTotal;
            }, 
            {coffeeTotal: 0, 
            coffeeAmount: 0})
            return {...state, coffeeTotal, coffeeAmount}
        
        case GET_TREATS_TOTAL :
            return {...state}
        
        case GET_TOTALS :

            return {...state}

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


