import { useEffect, useRef, useState } from 'react'

function AddItem({ addItem }) {
  const [isInEditMode, setIsInEditMode] = useState(false)
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [error, setError] = useState(null)
  const nameRef = useRef(null)

  const updateAmount = e => {
    const val = e.target.value
    if (!val || val.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(val)
    }
  }

  const cancel = () => {
    setName('')
    setAmount('')
    setError(null)
    setIsInEditMode(false)
  }

  const save = e => {
    e.preventDefault()
    if (!name || !amount) {
      setError('Please enter a valid name and amount to submit!')
      return
    }
    addItem({ name, amount: Number(amount), transactions: [] })
    cancel()
  }

  useEffect(() => {
    isInEditMode && nameRef.current.focus()
  }, [isInEditMode])

  if (!isInEditMode) {
    return (
      <button className='btn btn-primary' onClick={() => setIsInEditMode(true)}>
        Add Line Item
      </button>
    )
  }

  return (
    <form onSubmit={save}>
      <div className='row'>
        <div className='col col-12 col-md-6 mb-3 mb-md-0'>
          <label htmlFor='' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            ref={nameRef}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className='col col-12 col-md-6'>
          <label htmlFor='' className='form-label'>
            Amount
          </label>
          <input
            type='number'
            className='form-control'
            min={0.0}
            step={0.01}
            value={amount}
            onChange={updateAmount}
          />
        </div>

        <div className='col col-12 mt-3'>
          {error && <p className='text-danger'>{error}</p>}
          <button className='btn btn-primary me-3' type='submit'>
            Save
          </button>
          <button className='btn btn-secondary' onClick={cancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddItem
