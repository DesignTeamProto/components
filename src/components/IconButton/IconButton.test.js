import React from 'react';
import { shallow } from 'enzyme';
import IconButton from '.';

describe('<IconButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <IconButton />));
  });

  describe('Basic validation', () => {
    it('renders without crashing', () => {
      expect(wrapper).not.toBeNull();
      expect(wrapper).not.toBeUndefined();
    });
  });
});
