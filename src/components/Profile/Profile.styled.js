import styled from 'styled-components';

export const UserDescription = styled.div`
  background-color: ${p => {
    return p.theme.colors.white;
  }};
  margin: 40px auto;
  text-align: center;
  width: 200px;
  height: 288px;
  padding-top: 50px;
  border: 1px solid silver;
  border-radius: 8px;
`;

export const Avatar = styled.img`
  margin: 0 auto;
`;

export const UserName = styled.p`
  color: ${p => {
    return p.theme.colors.black;
  }};
  font-weight: 700;
  margin-top: 10px;
`;

export const UserInfo = styled.p`
  color: gray;
  font-size: 12px;
  margin-top: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 60px;
  margin-top: 40px;
  background-color: ${p => {
    return p.theme.colors.lightsteelblue;
  }};
  border-radius: 0 0 8px 8px;
  overflow: hidden;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid silver;
  width: 100%;
  height: 100%;
`;

export const StatsNumbers = styled.span`
  color: ${p => {
    return p.theme.colors.black;
  }};
  font-size: 14px;
  font-weight: 500;
`;
