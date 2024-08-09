import { useFormatting } from '../../../util/formatting'

function BudgetOverview({ budget }) {
  const formatter = useFormatting()

  const incomeTotal = sumFieldFromCategoryItems(budget.Income, 'amount')
  const assignmentsTotal = sumFieldFromCategoryItems(
    budget.Assignments,
    'amount'
  )
  const remaining = incomeTotal - assignmentsTotal

  return (
    <div>
      <h3 className='h-3 text-success'>Overview</h3>
      <div className='card'>
        <div className='card-body'>
          <h5>Budgeted</h5>
          <div className='d-flex justify-content-between'>
            <span className='text-success fw-bold'>Total Income</span>
            <span className='text-success'>
              {formatter.formatCurrency(incomeTotal)}
            </span>
          </div>

          <div className='d-flex justify-content-between'>
            <span className='text-warning fw-bold'>Total Expenses</span>
            <span className='text-warning'>
              {formatter.formatCurrency(assignmentsTotal)}
            </span>
          </div>

          <hr />

          <div
            className={`d-flex justify-content-between ${remaining >= 0 ? 'text-success' : 'text-danger'}`}
          >
            <span className='fw-bold'>Amount Remaining</span>
            <span>{formatter.formatCurrency(remaining)}</span>
          </div>
          {remaining < 0 && (
            <span className='text-danger'>
              Can any expenses be slimmed or cut?
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

const sumFieldFromCategoryItems = (categories, field) => {
  return categories.reduce((categoryAccumulator, category) => {
    return (
      categoryAccumulator +
      category.items.reduce((itemsAccumulator, item) => {
        return itemsAccumulator + item[field]
      }, 0)
    )
  }, 0)
}

export default BudgetOverview
