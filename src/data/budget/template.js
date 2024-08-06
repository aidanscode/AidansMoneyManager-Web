const INCOME_CATEGORIES = ['Paychecks', 'Interest', 'Bonus']
const ASSIGNMENT_CATEGORIES = [
  'Housing',
  'Transportation',
  'Savings',
  'Giving',
  'Food',
  'Lifestyle',
  'Debt',
  'Vacation'
]

const getStarterTemplate = () => {
  const template = { Income: [], Assignments: [] }

  INCOME_CATEGORIES.forEach(incomeCategory => {
    template.Income.push({ name: incomeCategory, items: [] })
  })

  ASSIGNMENT_CATEGORIES.forEach(assignmentCategory => {
    template.Assignments.push({ name: assignmentCategory, items: [] })
  })

  return template
}

export default getStarterTemplate
