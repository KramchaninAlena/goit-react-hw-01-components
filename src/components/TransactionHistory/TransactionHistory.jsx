import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css'
export function TransactionHistory({ transactions }) {
    return (
    <table className={css['transaction-history']}>
      <thead className={css.body}>
        <tr className={css['table-row']}>
          <th className={css['table-cell']}>Type</th>
          <th className={css['table-cell']}>Amount</th>
          <th className={css['table-cell']}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css['table-cell']}>{type}</td>
            <td className={css['table-cell']}>{amount}</td>
            <td className={css['table-cell']}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
 
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      type: PropTypes.string.isRequired, 
        amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      })),
}