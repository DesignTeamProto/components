import React from 'react';
import { shallow } from 'enzyme';
import Logo from '.';

describe('<Logo />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow((
      <Logo />
    ));
    expect(wrapper.type).not.toBeUndefined();
  });
});
