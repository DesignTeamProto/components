import React from 'react';
import { shallow } from 'enzyme';
import Icon from '.';

describe('<Icon />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow((
      <Icon />
    ));
    expect(wrapper.type).not.toBeUndefined();
  });
});
