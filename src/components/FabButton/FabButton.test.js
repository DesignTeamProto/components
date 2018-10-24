import React from 'react';
import { shallow } from 'enzyme';
import FabButton from '.';

describe('<FabButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <FabButton />));
  });

  describe('Basic validation', () => {
    it('renders without crashing', () => {
      expect(wrapper).not.toBeNull();
      expect(wrapper).not.toBeUndefined();
    });
  });
});
