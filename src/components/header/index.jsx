import React from 'react';
import styled from 'styled-components';
import Form from '../Forms';
import Input from '../Input';
import Logo from '../Logo';
import Icon from '../Icon';

const MainHeader = styled.header`
  background: red;
  grid-area: header;
  background-color: #001134;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem;
  height: 7rem;
`;

const Header = () => (
  <MainHeader>
    <Logo />
    <Form>
      <div className="input-wrapper">
        <Icon 
          className="test"
        />
        <Input
          type="text"
          placeholder="Zoek naar klanten en relaties"
        />
      </div>
    </Form>
  </MainHeader>
);

export default Header;
