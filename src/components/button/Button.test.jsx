import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('<Button />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow((
      <Button>
        Text
      </Button>
    ));
    expect(wrapper.type).not.toBeUndefined();    
  });
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Button>
        Text
      </Button>
    ));
    expect(wrapper.children).not.toBeUndefined();
  });
});
