import CategoryHeader from './header'

function BudgetCategory({
  category,
  editCategory,
  deleteCategory,
  categoryType
}) {
  const editName = newName => {
    editCategory({ ...category, name: newName })
  }

  return (
    <div className='card my-3'>
      <CategoryHeader
        name={category.name}
        editName={editName}
        deleteCategory={deleteCategory}
        categoryType={categoryType}
      />
      <div className='card-body'>
        <pre>{JSON.stringify(category.items, null, 2)}</pre>
      </div>
    </div>
  )
}

export default BudgetCategory
