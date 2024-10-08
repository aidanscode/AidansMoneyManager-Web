import { useState } from 'react'
import { useFormatting } from '../../../../../../../util/formatting'
import CreateTransaction from './transaction/create'
import Transaction from './transaction'
import { sumTransactionAmountFromLineItem } from '../../../../../../../util/budget'

function Item({ item, textClass, editItem, deleteItem }) {
  const formatter = useFormatting()
  const [isExpanded, setIsExpanded] = useState(false)

  const addTransaction = newTransaction => {
    const newItem = structuredClone(item)
    newItem.transactions.push(newTransaction)
    editItem(newItem)
  }

  const editTransaction = (index, newTransaction) => {
    const newItem = structuredClone(item)
    newItem.transactions[index] = newTransaction
    editItem(newItem)
  }

  const deleteTransaction = index => {
    const newItem = structuredClone(item)
    newItem.transactions.splice(index, 1)
    editItem(newItem)
  }

  return (
    <div>
      <div
        className='d-flex justify-content-between align-items-center'
        role='button'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h5 className='card-title'>{item.name}</h5>
        <div className='d-flex flex-row'>
          <div className='d-flex flex-column me-3'>
            <span className={textClass}>Budgeted</span>
            <span>{formatter.formatCurrency(item.amount)}</span>
          </div>
          <div className='d-flex flex-column'>
            <span className={textClass}>Actual</span>
            <span>
              {formatter.formatCurrency(sumTransactionAmountFromLineItem(item))}
            </span>
          </div>
        </div>
      </div>
      {isExpanded && (
        <>
          <hr />
          <div className='d-flex justify-content-end'>
            <button className='btn btn-danger btn-sm' onClick={deleteItem}>
              Delete Line Item
            </button>
          </div>
          <table className='table table-sm table-striped align-middle text-center'>
            <thead>
              <tr>
                <th scope='col'>Transaction Label</th>
                <th scope='col'>Date</th>
                <th scope='col'>Amount</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {item.transactions.map((transaction, index) => {
                return (
                  <Transaction
                    key={index}
                    transaction={transaction}
                    editTransaction={newTransaction =>
                      editTransaction(index, newTransaction)
                    }
                    deleteTransaction={() => deleteTransaction(index)}
                  />
                )
              })}
              <CreateTransaction addTransaction={addTransaction} />
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default Item
