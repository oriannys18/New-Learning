import { types } from "../types/types";

const initialState = {
    logged: false,
    user: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        case types.logout:
            return initialState;

        default:
            return state;
    }
}