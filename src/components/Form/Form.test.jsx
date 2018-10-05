import React from 'react';
import { shallow } from 'enzyme';
import Form from '.';
import Input from '../Input';

describe('<Form />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow((
      <Form>
        <Input />
      </Form>
    ));
    expect(wrapper.type).not.toBeUndefined();
  });
});
