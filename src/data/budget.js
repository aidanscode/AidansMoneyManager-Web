const BudgetData = {
  getByTimeframe: async (year, month) => {
    const response = await fetch(`/api/budget/${year}/${month}`)
    if (response.status === 404) return null
    if (!response.ok) {
      console.error(
        'Failed to fetch budget data for time period',
        year,
        month,
        response
      )
      return 'An unexpected error occurred while attempting to fetch the budget data'
    }
    return await response.json()
  }
}

export default BudgetData
