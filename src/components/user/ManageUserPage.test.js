import expect from 'expect';
import React from 'react';
import {mount,shallow} from 'enzyme';
import {ManageUserPage} from './ManageUserPage';

describe('Manage User Page', () => {
    it('sets error message when trying to save empty firstName', () => {
        const props = {
            users: [],
            user: {id: '', name: '', firstName: '', lastName: '', managerId: ''},
            actions: {saveUser: () => { return Promise.resolve(); }}
        };

        const wrapper = mount(<ManageUserPage {...props} />);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.firstName).toBe('First name must be at least 3 characters.');
    });
});
