export const userInitialState = {
    iat: "",
    username: "",
    id: ""
};

export const userReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN": 
            return {...state, ...action.payload};
        case "LOGOUT": 
            return {...state, iat: "", username: "", id: ""};
        default: 
            return state;
    }
}