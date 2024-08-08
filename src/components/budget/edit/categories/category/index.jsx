import CategoryHeader from './header'
import BudgetItems from './items'

function BudgetCategory({
  category,
  editCategory,
  deleteCategory,
  textClass,
  bgClass
}) {
  const editName = newName => {
    const newCategory = structuredClone(category)
    editCategory({ ...newCategory, name: newName })
  }

  const addItem = newItem => {
    const newCategory = structuredClone(category)
    newCategory.items.push(newItem)
    editCategory(newCategory)
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
        <BudgetItems
          items={category.items}
          addItem={addItem}
          textClass={textClass}
        />
      </div>
    </div>
  )
}

export default BudgetCategory
