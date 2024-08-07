import { useEffect, useRef, useState } from 'react'
import Icon from '../../../../util/icon'

function EditCategoryName({ name, save, cancel }) {
  const [newName, setNewName] = useState(name)
  const input = useRef(null)

  const handleKeydown = e => {
    e.key === 'Escape' && cancel()
    e.key === 'Enter' && save(newName)
  }

  useEffect(() => {
    input.current.focus()
    input.current.select()
  }, [])

  return (
    <div className='row align-items-center'>
      <div className='col col-auto'>
        <input
          type='text'
          className='form-control'
          placeholder='Category Name'
          aria-label='New name for category'
          onChange={e => setNewName(e.target.value)}
          value={newName}
          onKeyDown={handleKeydown}
          ref={input}
        />
      </div>
      <div className='col col-auto text-white'>
        <Icon name='bi-floppy' margin='me-2' onClick={() => save(newName)} />
        <Icon name='bi-x-square' onClick={cancel} />
      </div>
    </div>
  )
}

export default EditCategoryName
