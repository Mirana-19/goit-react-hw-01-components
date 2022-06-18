import PropTypes from 'prop-types';
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

TransactionItem.propTypes = PropTypes.exact({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}).isRequired;
