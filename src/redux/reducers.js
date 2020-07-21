const initialState = {
    counter: 0
};


const reducer = (state = initialState, action) => {
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

export default reducer;