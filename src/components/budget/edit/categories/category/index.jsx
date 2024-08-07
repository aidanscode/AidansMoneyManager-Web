import CategoryHeader from './header'

function BudgetCategory({ category, editCategory, deleteCategory, bgClass }) {
  const editName = newName => {
    const newCategory = structuredClone(category)
    editCategory({ ...newCategory, name: newName })
  }

  return (
    <div className='card my-3'>
      <CategoryHeader
        name={category.name}
        editName={editName}
        deleteCategory={deleteCategory}
        bgClass={bgClass}
      />
      <div className='card-body'>
        <pre>{JSON.stringify(category.items, null, 2)}</pre>
      </div>
    </div>
  )
}

export default BudgetCategory
