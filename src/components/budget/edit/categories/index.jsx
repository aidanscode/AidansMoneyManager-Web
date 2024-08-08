import BudgetCategory from './category'
import CreateCategory from './category/create'

function CategoryGroup({
  categoryGroup,
  categoryType,
  textClass,
  bgClass,
  addCategory,
  editCategory,
  deleteCategory
}) {
  return (
    <div className='mb-3'>
      <h3 className={`h-3 ${textClass}`}>{categoryType}</h3>
      {categoryGroup.map((incomeCategory, index) => {
        return (
          <BudgetCategory
            key={index}
            category={incomeCategory}
            editCategory={newCategory => editCategory(index, newCategory)}
            deleteCategory={() => deleteCategory(index)}
            textClass={textClass}
            bgClass={bgClass}
          />
        )
      })}
      <CreateCategory save={addCategory} bgClass={bgClass} />
    </div>
  )
}

export default CategoryGroup
