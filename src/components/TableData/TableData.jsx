import PropTypes from 'prop-types';
import s from './TableData.module.css';
const TableData = ({ type, amount, currency }) => {
  return (
    <tr className={s.tr}>
      <td className={s.tdType}>{type}</td>
      <td className={s.td}>{amount}</td>
      <td className={s.td}>{currency}</td>
    </tr>
  );
};

TableData.propTypes = {
  type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit']),
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TableData;
