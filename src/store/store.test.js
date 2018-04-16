import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as userActions from '../actions/userActions';

describe('Store', function() {
    it('should handle creating and updating users', function() {
        // arrange
        const store = createStore(rootReducer, initialState);
        const userA = {id: 'a', firstName: 'A', lastName: 'A'};
        const userB = {id: 'b', firstName: 'B', lastName: 'B'};

        // act creation
        const actionCreateUserA = userActions.createUserSuccess(userA);
        store.dispatch(actionCreateUserA);
        const actionCreateUserB = userActions.createUserSuccess(userB);
        store.dispatch(actionCreateUserB);

        // assert creation
        const actualUserA = store.getState().users[0];
        const actualUserB = store.getState().users[1];
        const expectedUserA = {id: 'a', firstName: 'A', lastName: 'A'};
        const expectedUserB = {id: 'b', firstName: 'B', lastName: 'B'};
        expect(actualUserA).toEqual(expectedUserA);
        expect(actualUserB).toEqual(expectedUserB);

        // act update
        const updatedUserB = {id: 'b', firstName: 'BB', lastName: 'BB'};
        const actionUpdateUserB = userActions.updateUserSuccess(updatedUserB);
        store.dispatch(actionUpdateUserB);

        // assert update
        const actualUpdatedUserB = store.getState().users[1];
        const expectedUpdatedUserB = {id: 'b', firstName: 'BB', lastName: 'BB'};
        expect(actualUpdatedUserB).toEqual(expectedUpdatedUserB);
    });
});
