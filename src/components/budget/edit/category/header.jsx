import { useState } from 'react'
import Icon from '../../../util/icon'
import EditCategoryName from './edit-name'

function CategoryHeader({ name, editName, deleteCategory, categoryType }) {
  const [isInEditMode, setIsInEditMode] = useState(false)

  const submitNewName = newName => {
    setIsInEditMode(false)
    editName(newName)
  }

  return (
    <div className={getCardHeaderClassName(categoryType)}>
      <div className='d-flex justify-content-between align-items-center fs-5'>
        {isInEditMode ? (
          <EditCategoryName
            name={name}
            save={newName => submitNewName(newName)}
            cancel={() => setIsInEditMode(false)}
          />
        ) : (
          <span role='button' onClick={() => setIsInEditMode(true)}>
            {name}
          </span>
        )}
        <div>
          {!isInEditMode && (
            <Icon
              name='bi-pencil-square'
              margin='me-2'
              onClick={() => setIsInEditMode(true)}
            />
          )}
          <Icon name='bi-trash3' onClick={deleteCategory} />
        </div>
      </div>
    </div>
  )
}

const getCardHeaderClassName = categoryType => {
  return `card-header ${categoryType === 'Income' ? 'bg-success text-white' : 'bg-warning'}`
}

export default CategoryHeader
