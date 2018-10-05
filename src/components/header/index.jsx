import React from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Logo from '../Logo';
import Icon from '../Icon';
import List from '../List';
import ProfileImage from '../../profile.jpg';

const MainHeader = styled.header`
  grid-area: header;
  background-color: #001134;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 2.8rem;
  height: 7rem;
`;

const InputStyleWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
`;

const FormStyleWrapper = styled.form`
  flex-grow: 1;
  max-width: 71rem;
  margin: 0 1.5rem;
`;

const FigureStyleWrapper = styled.figure`
  margin: 0;
  img {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
  }
`;

const UserSettingsStyleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Header = () => (
  <MainHeader>
    <Logo />
    <FormStyleWrapper>
      <InputStyleWrapper>
        <Icon className="search" />
        <Input type="text" placeholder="Zoek naar klanten en relaties" />
      </InputStyleWrapper>
    </FormStyleWrapper>
    <UserSettingsStyleWrapper>
      <List />
      <FigureStyleWrapper>
        <img src={ProfileImage} alt="User profile" />
      </FigureStyleWrapper>
    </UserSettingsStyleWrapper>
  </MainHeader>
);

export default Header;
