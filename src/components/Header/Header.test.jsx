import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow((
      <Header />
    ));
    expect(wrapper.type).not.toBeUndefined();
  });
});
