import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('<Button />', () => {
  let wrapper;
  const variant = 'contained';
  const color = 'primary';
  const text = 'Primary';

  beforeEach(() => {
    wrapper = shallow((
      <Button variant={variant} color={color}>
        {text}
      </Button>));
  });

  describe('Basic validation', () => {
    it('renders without crashing', () => {
      expect(wrapper).not.toBeNull();
      expect(wrapper).not.toBeUndefined();
    });
    it('has child element', () => {
      expect(wrapper).toHaveProperty('children');
      expect(wrapper.children()).toHaveLength(1);
    });
  });
});
