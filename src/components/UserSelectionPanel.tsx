import * as React from 'react';
import styled from 'styled-components';

import { User } from '../types/User';
import Photo from './Photo';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.3);
  margin: 2px;
  color: ${props => props.theme.textColor};
  font-size: ${props => props.theme.fontSize};

  & > div {
    margin: 5px;
  }
`;

const UserSelectionPanel = (
  { users, selectedUser, selectUser }: 
  { users: Array<User>, selectedUser: User | null, selectUser: (user: User) => any }
) => {
  return (
    <Wrapper>
      {
        users.map(user => (
          <Photo
            key={user.email}
            onClick={() => selectUser(user)}
            selected={selectedUser !== null && selectedUser.email === user.email}
          >
            {user.name.substring(0, 2).toUpperCase()}
          </Photo>
        ))
      }
    </Wrapper>
  );
};

export default UserSelectionPanel;