import PropTypes from 'prop-types';
import css from '../StatisticsSection/StatisticsSection.module.css'

export function StatisticsSection({title, children}) {
    return <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    {children}
    </section>
}

StatisticsSection.propTypes = {
    title: PropTypes.string,
    children:PropTypes.node,
}