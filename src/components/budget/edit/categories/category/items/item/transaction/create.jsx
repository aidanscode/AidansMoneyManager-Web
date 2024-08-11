import { useState } from 'react'
import Icon from '../../../../../../../util/icon'

function CreateTransaction({ addTransaction }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')

  const updateAmount = e => {
    const val = e.target.value
    if (!val || val.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(val)
    }
  }

  const handleSubmit = () => {
    if (!name || !date || !amount) {
      setError('Please enter a valid name, date, and amount to submit!')
      return
    }

    addTransaction({ name, date, amount })
    setName('')
    setDate('')
    setAmount('')
    setError('')
  }

  const handleKeydown = e => {
    e.key === 'Enter' && handleSubmit(name)
  }

  return (
    <>
      <tr>
        <td>
          <input
            type='text'
            placeholder='Label'
            className='form-control'
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={handleKeydown}
          />
        </td>
        <td>
          <input
            type='date'
            placeholder='Transaction Date'
            className='form-control'
            value={date}
            onChange={e => setDate(e.target.value)}
            onKeyDown={handleKeydown}
          />
        </td>
        <td>
          <input
            type='number'
            placeholder='Transaction Amount'
            className='form-control'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={updateAmount}
            onKeyDown={handleKeydown}
          />
        </td>
        <td className='fs-5'>
          <Icon name='bi-floppy' onClick={handleSubmit} />
        </td>
      </tr>
      {error && (
        <tr>
          <td colSpan='4' className='text-danger'>
            {error}
          </td>
        </tr>
      )}
    </>
  )
}

export default CreateTransaction
