import { useState } from 'react'
import Icon from '../../../../util/icon'

function CreateCategory({ save, bgClass }) {
  const [name, setName] = useState('')

  const submit = newName => {
    save(newName)
    setName('')
  }

  const handleKeydown = e => {
    e.key === 'Enter' && submit(name)
  }

  return (
    <div className='card'>
      <div className={`card-header ${bgClass} fs-5`}>
        <div className='row align-items-center'>
          <div className='col col-auto'>Create New:</div>
          <div className='col col-auto'>
            <input
              type='text'
              className='form-control'
              placeholder='Category Name'
              aria-label='New category name'
              onKeyDown={handleKeydown}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='col col-auto'>
            <Icon name='bi-floppy' margin='me-2' onClick={() => submit(name)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCategory
