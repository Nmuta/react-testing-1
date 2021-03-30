import React from 'react';
import { shallow } from 'enzyme';
import UserStory from './UserStory';

describe('Test UserStory deliver', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const userStory = shallow((<UserStory updateStatus = {mockCallBack}/>));
    userStory.find('[data-behavior="deliver"]').simulate('click');
    expect(mockCallBack.mock.calls[0][0]).toEqual("delivered");
  });
});

describe('Test UserStory finish', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
      const userStory = shallow((<UserStory updateStatus = {mockCallBack} />));
      userStory.find('[data-behavior="finish"]').simulate('click');
      expect(mockCallBack.mock.calls[0][0]).toEqual("finished");
    });
  });