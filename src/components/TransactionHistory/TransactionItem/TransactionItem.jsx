import s from './TransactionItem.module.css';

function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={s.row}>
      <td className={s.tableData}>{type}</td>
      <td className={s.tableData}>{amount}</td>
      <td className={s.tableData}> {currency}</td>
    </tr>
  );
}

export default TransactionItem;
