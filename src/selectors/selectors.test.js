import expect from 'expect';
import {usersFormattedForDropdown} from './selectors';

describe('User Selectors', () => {
    describe('usersFormattedForDropdown', () => {
        it('should return user data formatted for use in a dropdown', () => {
            const users = [
                {id: 'cory-house', name: 'Cory', firstName: 'Cory', lastName: 'House', managerId: ''},
                {id: 'george-ele', name: 'George', firstName: 'George', lastName: 'Ele', managerId: ''}
            ];

            const expected = [
                {value: 'cory-house', text: 'Cory House'},
                {value: 'george-ele', text: 'George Ele'}
            ];

            expect(usersFormattedForDropdown(users)).toEqual(expected);
        });
    });
});
