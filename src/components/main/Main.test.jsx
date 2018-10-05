import React from 'react';
import { shallow } from 'enzyme';
import Main from '.';

describe('<Main />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow((
      <Main />
    ));
    expect(wrapper.type).not.toBeUndefined();
  });
});
