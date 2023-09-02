import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css'
import { getRandomHexColor } from '../Utils/getRandomHexColor'

export function Statistics ({stats}) {
  return (
    <ul className={css['stat-list']}>
      {stats.map(({id, label, percentage}) => {
        const randomColor = getRandomHexColor();
        return <li key={id} className={css.item} style={{backgroundColor: `${randomColor}`}}>
          <span className="label">{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
})}
    </ul>
  );
}      

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      label: PropTypes.string.isRequired, 
      percentage: PropTypes.number.isRequired,
      })),
}