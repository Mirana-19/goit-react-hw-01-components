import PropTypes, { arrayOf, shape } from 'prop-types';
import s from './TransactionHistory.module.css';
import TransactionItem from './TransactionItem/TransactionItem';

function TransactionHistory({ items }) {
  console.log(items);
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.tableHead}>Type</th>
          <th className={s.tableHead}>Amount</th>
          <th className={s.tableHead}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.item}>
        {items.map(t => (
          <TransactionItem
            key={t.id}
            type={t.type}
            amount={t.amount}
            currency={t.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = arrayOf(
  shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  })
).isRequired;
