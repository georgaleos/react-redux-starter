import * as types from '../actions/actionTypes';

export default function userReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_USER:
            // state.push(action.user); // mutable state wrong
            // return state;
            return [...state, Object.assign({}, action.user)];

        default:
            return state;
    }
}
