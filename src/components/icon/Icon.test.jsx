import React from 'react';
import { shallow } from 'enzyme';
import Icon from '.';

describe('Icon', () => {
  it('renders without crashing', () => {
    const el = shallow(<Icon />);
    expect(el.type).not.toBeUndefined();
  });
});
