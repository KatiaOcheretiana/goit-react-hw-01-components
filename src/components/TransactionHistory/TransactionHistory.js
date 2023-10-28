import PropTypes from 'prop-types';
import {
  TableTransaction,
  HiglightTitle,
  Info,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <thead>
        <tr>
          <HiglightTitle>Type</HiglightTitle>
          <HiglightTitle>Amount</HiglightTitle>
          <HiglightTitle>Currency</HiglightTitle>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <Info>{item.type}</Info>
            <Info>{item.amount}</Info>
            <Info>{item.currency}</Info>
          </tr>
        ))}
      </tbody>
    </TableTransaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
