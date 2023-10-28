import styled from 'styled-components';

export const TableTransaction = styled.table`
  width: 420px;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.white};
  border-collapse: collapse;
  border: 2px solid ${p => p.theme.colors.gray};
  border-radius: 4px;
  text-align: center;
  margin-bottom: 40px;
`;

export const HiglightTitle = styled.th`
  background-color: ${p => p.theme.colors.lightsteelblue};
  color: ${p => p.theme.colors.white};
  font-weight: 700;
  padding: 10px;
  width: 140px;
`;

export const Info = styled.td`
  text-transform: capitalize;
  height: 20px;
  font-size: 12px;
  font-weight: 400;
  padding: 0;
  border: 1px solid ${p => p.theme.colors.gray};
  color: ${p => p.theme.colors.gray};
`;
