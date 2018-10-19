import React from 'react';
import { shallow } from 'enzyme';
import TestIcon from '.';

/** Test for component <TestButton /> */
describe('<TestIcon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <TestIcon />));
  });

  /** Basic output validation */
  describe('Output tests', () => {
    it('Should render output', () => {
      expect(wrapper).toHaveLength(1);
    });
  });
});
