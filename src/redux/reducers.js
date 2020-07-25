
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "COFFEEINCREMENT": {
            state = {...state, count: state.coffee.value + 1 ;
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