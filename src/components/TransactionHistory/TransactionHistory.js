import s from './TransactionHistory.module.scss';

const TransactionHistoryItem = ({ type, amount, currency, id }) => {
  return (
    <tr className={s.tr} key={id}>
      <td className={s.tdType}>{type}</td>
      <td className={s.td}>{amount}</td>
      <td className={s.td}>{currency}</td>
    </tr>
  );
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{items.map(TransactionHistoryItem)}</tbody>
    </table>
  );
};
export default TransactionHistory;
