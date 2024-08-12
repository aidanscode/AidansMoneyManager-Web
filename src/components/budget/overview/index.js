import {
  sumLineItemAmountFromCategories,
  sumTransactionAmountFromCategories
} from '../../../util/budget'
import OverviewBox from './overview-box'

function BudgetOverview({ budget }) {
  const budgetTotalIncome = sumLineItemAmountFromCategories(budget.Income)
  const budgetTotalExpenses = sumLineItemAmountFromCategories(
    budget.Assignments
  )

  const actualTotalIncome = sumTransactionAmountFromCategories(budget.Income)
  const actualTotalExpenses = sumTransactionAmountFromCategories(
    budget.Assignments
  )

  return (
    <>
      <OverviewBox
        header='Expected Overview'
        totalIncome={budgetTotalIncome}
        totalExpenses={budgetTotalExpenses}
        overspentMessage='Can any expenses be slimmed or cut?'
      />

      <OverviewBox
        header='Actual Overview'
        totalIncome={actualTotalIncome}
        totalExpenses={actualTotalExpenses}
        overspentMessage='Can any expenses be slimmed or cut?'
      />
    </>
  )
}

export default BudgetOverview
