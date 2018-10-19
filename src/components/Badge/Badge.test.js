import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Badge from '.';

describe('Badge', () => {
  let wrapper;
  const text = 'Text';
  const color = 'primary';
  const number = 3;

  beforeEach(() => {
    wrapper = shallow((
      <Badge badgeContent={number} color={color}>
        {text}
      </Badge>));
  });

  describe('Basic checks', () => {
    it('not be undefined', () => {
      expect(wrapper.not.undefined);
    });

    it('should have child element', () => {
      expect(wrapper).to.have.property('children');
      expect(wrapper.children()).to.have.lengthOf(1);
    });

    it('prop:badgeContent should be a value and a number', () => {
      const prop = wrapper.prop('badgeContent');
      expect(prop).to.equal(3);
      expect(prop.isNumber);
    });

    it('prop:badgeContent should not have a string value', () => {
      const prop = wrapper.prop('badgeContent');
      expect(prop.isNotString);
    });

    it('prop:color should be one of 4 string values', () => {
      const prop = wrapper.prop('color');
      expect(prop.isString);
      expect(prop).to.be.oneOf(['default', 'primary', 'secondary', 'error']);
    });

    it('prop:component should be a string, function or object', () => {
      const prop = wrapper.prop('component');
      expect(prop.isString);
      expect(prop.isFunction);
      expect(prop.isObject);
    });
  });
});
