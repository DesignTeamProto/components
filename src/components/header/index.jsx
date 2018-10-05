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

const InputStyleWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
`;

const Header = () => (
  <MainHeader>
    <Logo />
    <Form>
      <InputStyleWrapper>
        <Icon
          className="icon"
        />
        <Input
          type="text"
          placeholder="Zoek naar klanten en relaties"
        />
      </InputStyleWrapper>
    </Form>
  </MainHeader>
);

export default Header;
