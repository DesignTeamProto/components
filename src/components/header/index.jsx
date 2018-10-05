import React from 'react';
import styled from 'styled-components';
import Form from '../Forms';
import Input from '../Input';
import Logo from '../Logo';

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
      <Input
        type="search"
      />
    </Form>
  </MainHeader>
);

export default Header;
