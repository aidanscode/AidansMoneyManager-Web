import BudgetCategory from './category'

function EditBudget({ budget, setBudget }) {
  const editCategory = (type, index, newCategory) => {
    const newBudget = structuredClone(budget)
    newBudget[type][index] = newCategory
    setBudget(newBudget)
  }

  const deleteCategory = (type, index) => {
    const newBudget = structuredClone(budget)
    newBudget[type].splice(index, 1)
    setBudget(newBudget)
  }

  return (
    <div className='row'>
      <div className='col-lg-8'>
        <h3 className='h-3 text-success'>Income</h3>
        {budget.Income.map((incomeCategory, index) => {
          return (
            <BudgetCategory
              key={'income-' + index}
              category={incomeCategory}
              editCategory={newCategory =>
                editCategory('Income', index, newCategory)
              }
              deleteCategory={() => deleteCategory('Income', index)}
              categoryType='Income'
            />
          )
        })}

        <h3 className='h-3 text-warning'>Assignment</h3>
        {budget.Assignments.map((assignmentCategory, index) => {
          return (
            <BudgetCategory
              key={'assignment-' + index}
              category={assignmentCategory}
              editCategory={newCategory =>
                editCategory('Assignments', index, newCategory)
              }
              deleteCategory={() => deleteCategory('Assignments', index)}
              categoryType='Assignment'
            />
          )
        })}
      </div>
    </div>
  )
}

export default EditBudget
