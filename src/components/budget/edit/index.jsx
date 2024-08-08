import CategoryGroup from './categories'

function EditBudget({ budget, setBudget }) {
  const addCategory = (type, name) => {
    const newBudget = structuredClone(budget)
    newBudget[type].push({ name: name, items: [] })
    setBudget(newBudget)
  }

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
        <CategoryGroup
          categoryGroup={budget.Income}
          categoryType='Income'
          textClass='text-success'
          bgClass='bg-success text-white'
          addCategory={name => addCategory('Income', name)}
          editCategory={(index, newCategory) =>
            editCategory('Income', index, newCategory)
          }
          deleteCategory={index => deleteCategory('Income', index)}
        />

        <CategoryGroup
          categoryGroup={budget.Assignments}
          categoryType='Assignments'
          textClass='text-warning'
          bgClass='bg-warning'
          addCategory={name => addCategory('Assignments', name)}
          editCategory={(index, newCategory) =>
            editCategory('Assignments', index, newCategory)
          }
          deleteCategory={index => deleteCategory('Assignments', index)}
        />
      </div>
    </div>
  )
}

export default EditBudget
