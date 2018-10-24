import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow((
      <Footer />
    ));
    expect(wrapper.type).not.toBeUndefined();
  });
});
