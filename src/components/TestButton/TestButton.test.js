import React from 'react';
import { shallow } from 'enzyme';
import TestIcon from '@material-ui/icons/ThreeDRotation';
import CircularProgress from '@material-ui/core/CircularProgress';
import TestButton from '.';

/** Tests for component <TestButton /> */
describe('<TestButton />', () => {
  let wrapper;
  const text = 'Text';

  beforeEach(() => {
    wrapper = shallow((
      <TestButton>
        {text}
      </TestButton>));
  });

  /** Basic output validation */
  describe('Output tests', () => {
    it('Should render output', () => {
      expect(wrapper).toHaveLength(1);
    });
    it('Should output a button by default', () => {
      expect(wrapper.type()).toBe('button');
    });
    it('Should render children', () => {
      expect(wrapper.children()).toHaveLength(1);
    });
    it('Should have type=submit by default', () => {
      expect(wrapper.prop('type')).toEqual('submit');
    });
    it('Should have a button type if passed one', () => {
      wrapper.setProps({ type: 'button' });
      expect(wrapper.prop('type')).toEqual('button');
    });
    it('Should have a button name if passed one', () => {
      wrapper.setProps({ name: 'buttonName' });
      expect(wrapper.prop('name')).toEqual('buttonName');
    });
    it('Should default to button which is not disabled', () => {
      expect(wrapper.prop('disabled')).toBe(false);
    });
    it('Should have disabled attribute if button has state disabled', () => {
      wrapper.setProps({ disabled: true });
      expect(wrapper.prop('disabled')).toBe(true);
    });
    it('Should have a accessibilityLabel if passed one', () => {
      wrapper.setProps({ accessibilityLabel: 'ariaLabelText' });
      expect(wrapper.prop('aria-label')).toEqual('ariaLabelText');
    });
  });

  /** Action tests */
  describe('Action tests', () => {
    it('Should be an a tag if a href is passed', () => {
      wrapper.setProps({ href: 'www.google.com' });
      expect(wrapper.type()).toBe('a');
    });
    it('Should execute function on click', () => {
      const mockCallBack = jest.fn();
      wrapper.setProps({ onClick: mockCallBack });
      wrapper.simulate('click');
      expect(mockCallBack).toHaveBeenCalled();
    });
  });

  /** Variant tests */
  describe('Variant tests', () => {
    it('Should default to variant=contained', () => {
      expect(wrapper.hasClass('contained')).toBe(true);
    });
    it('Should have variant class if passed variant', () => {
      wrapper.setProps({ variant: 'outlined' });
      expect(wrapper.hasClass('outlined')).toBe(true);
    });
    it('Should have one of 3 allowed variant classes', () => {
      const allowedValues = [
        'contained primary',
        'outlined primary',
        'text primary',
      ];
      expect(allowedValues).toContain(wrapper.prop('className'));
      wrapper.setProps({ variant: 'somethingelse' });
      expect(allowedValues).not.toContain(wrapper.prop('className'));
    });
  });

  /** State tests */
  describe('State tests', () => {
    it('Should default to state=primary', () => {
      expect(wrapper.hasClass('primary')).toBe(true);
    });
    it('Should have state if passed one', () => {
      wrapper.setProps({ state: 'secondary' });
      expect(wrapper.hasClass('secondary')).toBe(true);
    });
    it('Should make text invisible and add loading indicator when pushed', () => {
      wrapper.setProps({ state: 'loading' });
      expect(wrapper.find(CircularProgress)).toHaveLength(1);
    });
    it('Should have text and no loading indicator when loading is done', () => {
      /** tests */
    });
  });

  /** Components as children */
  describe('Component children tests', () => {
    it('Should render icon if <Icon /> is passed', () => {
      const shallowWrapper = shallow((
        <TestButton>
          <TestIcon />
        </TestButton>));
      expect(shallowWrapper.find(TestIcon)).toHaveLength(1);
    });
  });
});
