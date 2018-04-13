import expect from 'expect';
import userReducer from './userReducer';
import * as actions from '../actions/userActions';

describe('User Reducer', () => {
    it('should add user when passed CREATE_USER_SUCCESS', () => {
        // arrange
        const initialState = [
            {firstName: 'A'},
            {firstName: 'B'}
        ];

        const newUser = {firstName: 'C'};

        const action = actions.createUserSuccess(newUser);

        // act
        const newState = userReducer(initialState, action);

        // assert
        expect(newState.length).toEqual(3);
        expect(newState[0].firstName).toEqual('A');
        expect(newState[1].firstName).toEqual('B');
        expect(newState[2].firstName).toEqual('C');
    });

    it('should update user when passed UPDATE_USER_SUCCESS', () => {
        // arrange
        const initialState = [
            {id: 'a', firstName: 'A'},
            {id: 'b', firstName: 'B'},
            {id: 'c', firstName: 'C'}
        ];

        const user = {id: 'b', firstName: 'New Name'};
        const action = actions.updateUserSuccess(user);

        // act
        const newState = userReducer(initialState, action);
        const updatedUser = newState.find(a => a.id === user.id);
        const untouchedUser = newState.find(a => a.id === 'a');

        // assert
        expect(updatedUser.firstName).toEqual('New Name');
        expect(untouchedUser.firstName).toEqual('A');
        expect(newState.length).toEqual(3);
    });
});
