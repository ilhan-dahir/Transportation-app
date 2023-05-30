const ridesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RIDES':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default ridesReducer;