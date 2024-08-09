import { useFormatting } from '../../../../../../../../util/formatting'

function Transaction({ transaction }) {
  const formatter = useFormatting()

  return (
    <tr>
      <td>{transaction.name}</td>
      <td>{transaction.date}</td>
      <td>{formatter.formatCurrency(transaction.amount)}</td>
      <td>Edit - Delete</td>
    </tr>
  )
}

export default Transaction
