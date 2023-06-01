import css from "./Transactions.module.css"

export const TransactionHistory = ({ items }) => {
    return (
      <table className={css.transaction_history}>
        <thead>
          <tr>
            <th className={css.table_head}>Type</th>
            <th className={css.table_head}>Amount</th>
            <th className={css.table_head}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {/* Пройтися по кожній транзакції з атрибуту items та створіть рядки таблиці */}
          {items.map(transaction => (
            <tr key={transaction.id}>
              <td className={css.table_data}>{transaction.type}</td>
              <td className={css.table_data}>{transaction.amount}</td>
              <td className={css.table_data}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }