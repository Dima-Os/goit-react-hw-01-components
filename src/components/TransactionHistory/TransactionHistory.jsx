import PropTypes from 'prop-types';
import TableData from '../TableData/TableData';
import s from './TransactionHistory.module.css';
const TransactionHistory = ({ data }) => {
  return (
    <table className={s.transaction}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(el => (
          <TableData
            type={el.type}
            amount={el.amount}
            currency={el.currency}
            key={el.id}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TransactionHistory;
