import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

const randomColor = () => '#' + (((1 << 24) * Math.random()) | 0).toString(16);

function StatisticsItem({ id, label, percentage }) {
  return (
    <li className={s.item} style={{ backgroundColor: randomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

export default StatisticsItem;

StatisticsItem.propTypes = PropTypes.exact({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}).isRequired;
