import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  background-color: ${p => {
    return p.theme.colors.white;
  }};
  padding: 10px;
  box-shadow: 18px -18px -18px 18px rgba(245, 245, 247, 0.1);
  border-radius: 4px;
`;

export const OnlineStatus = styled.span`
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  align-self: center;
  width: 15px;
  height: 15px;
  border-radius: 28px;
  margin-right: 16px;
`;

export const UserName = styled.p`
  margin-left: 15px;
  align-self: center;
  font-weight: 700;
`;
