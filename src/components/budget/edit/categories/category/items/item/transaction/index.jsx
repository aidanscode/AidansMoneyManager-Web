import { useState } from 'react'
import { useFormatting } from '../../../../../../../../util/formatting'
import CreateTransaction from './create'
import Icon from '../../../../../../../util/icon'

function Transaction({ transaction, editTransaction, deleteTransaction }) {
  const formatter = useFormatting()
  const [isInEditMode, setIsInEditMode] = useState(false)

  const update = newTransaction => {
    setIsInEditMode(false)
    editTransaction(newTransaction)
  }

  return isInEditMode ? (
    <CreateTransaction
      addTransaction={update}
      defaultName={transaction.name}
      defaultDate={transaction.date}
      defaultAmount={transaction.amount}
    />
  ) : (
    <tr>
      <td>{transaction.name}</td>
      <td>{transaction.date}</td>
      <td>{formatter.formatCurrency(transaction.amount)}</td>
      <td>
        <Icon
          name='bi-pencil-square'
          margin='me-2'
          onClick={() => setIsInEditMode(true)}
        />
        <Icon name='bi-trash3' onClick={deleteTransaction} />
      </td>
    </tr>
  )
}

export default Transaction
