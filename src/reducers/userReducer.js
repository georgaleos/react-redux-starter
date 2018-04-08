export default function userReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_USER':
            // state.push(action.user); // mutable state wrong
            // return state;
            return [...state, Object.assign({}, action.user)];

        default:
            return state;
    }
}
