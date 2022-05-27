import { ADD_COMMENT } from "./actionsTypes";

const initialState = {name:'Kenzie', comments: ['123']}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_COMMENT:
            return action.payload
        default:
            return state
    }
}