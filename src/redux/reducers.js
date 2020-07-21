import coffeedata from "../inventory/coffeedata.json";
import treatsdata from "../inventory/treatsdata.json";

const initialState = {
    turnCompToggleOn: true,
    coffee: coffeedata,
    treats: treatsdata,
    counter: 0
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case "COFFEEINCREMENT": {
            state = {...state, name: action.payload};
        }
        case "TREATSINCREMENT": {
            state.age = action.payload;

        }
        case "COFFEEDECREMENT": {

        }
        case "TREATSDECREMENT": {
            
        }
    return state;
    }
}

export default reducer;