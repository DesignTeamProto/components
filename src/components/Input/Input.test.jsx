import React from 'react';
import { shallow } from 'enzyme';
import Input from '.';

describe('<Input />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow((
      <Input />
    ));
    expect(wrapper.type).not.toBeUndefined();
  });
});