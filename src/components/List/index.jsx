import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import IconNotificatons from '../../icons/notifications.svg';
import IconMessages from '../../icons/messages.svg';
import IconTasks from '../../icons/tasks.svg';


const UserShortCuts = styled.ul`
  background: red;
  grid-area: header;
  background-color: #001134;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem;
  height: 7rem;
  margin: 0;
`;

const ListStyleWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-right: 1.4rem;
  &:last-child {
    margin-right: 0;
  }
  img {
    opacity: 0.8;
  }
`;

const List = () => (
  <UserShortCuts>
    <ListStyleWrapper>
      <Icon image={IconTasks} />
    </ListStyleWrapper>
    <ListStyleWrapper>
      <Icon image={IconMessages} />
    </ListStyleWrapper>
    <ListStyleWrapper>
      <Icon image={IconNotificatons} />
    </ListStyleWrapper>
  </UserShortCuts>
);

export default List;
