import styled from 'styled-components';

export const StatisticSection = styled.section`
  background-color: ${p => {
    return p.theme.colors.white;
  }};
  width: 250px;
  margin: 20px auto;
  border-radius: 8px;
`;

export const Title = styled.h2`
  color: ${p => {
    return p.theme.colors.gray;
  }};
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.125;
  margin-bottom: 12px;
  padding-top: 15px;
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
  text-align: center;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
`;

export const StatsItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50px;
  gap: 5px;
  color: white;
`;

export const Label = styled.span`
  font-size: 10px;
  font-weight: 400;
`;

export const Percentage = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
