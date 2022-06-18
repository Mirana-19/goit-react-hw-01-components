import TransactionItem from './TransactionItem/TransactionItem';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
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
