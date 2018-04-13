import expect from 'expect';
import * as userActions from './userActions';
import * as types from './actionTypes';

// Test a sync action
describe('User Actions', () => {
    describe('createUserSuccess', () => {
        it('should create a CREATE_USER_SUCCESS action', () => {
            //arrange
            const user = {id: 'john-doe', firstName: 'John', lastName: 'Doe'};
            const expectedAction = {
                type: types.CREATE_USER_SUCCESS,
                user: user
            };

            //act
            const action = userActions.createUserSuccess(user);

            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});
