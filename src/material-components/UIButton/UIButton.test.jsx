import React from 'react';
import { shallow } from 'enzyme';
import should from 'should';
import Button from '.';

const wrapper = shallow((
  <Button>
    Text
  </Button>
));

describe('Button', () => {
  it('renders without crashing', () => {
    wrapper.should.not.be.unDefined;
  });
});

describe('Button', () => {
  it('has children (=required)', () => {
    wrapper.should.have.property('children');
  });
});
