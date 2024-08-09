import { useState } from 'react'
import Icon from '../../../../../../../util/icon'

function CreateTransaction({ addTransaction }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')

  

  return (
    <tr>
      <td>
        <input
          type='text'
          placeholder='Label'
          className='form-control'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </td>
      <td>
        <input
          type='date'
          placeholder='Transaction Date'
          className='form-control'
          value={date}
          onChange={e => setDate(e.target.value)}
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
          onChange={e => setAmount(e.target.value)}
        />
      </td>
      <td className='fs-5'>
        <Icon name='bi-floppy' />
      </td>
    </tr>
  )
}

export default CreateTransaction
