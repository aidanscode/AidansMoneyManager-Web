import { useEffect, useState } from 'react'
import { getCurrentTimeframe } from '../../util/time'
import TimeframePicker from '../../components/budget/timeframe-picker'
import Spinner from '../../components/util/spinner'
import BudgetData from '../../data/budget'

function Budget() {
  const [timeframe, setTimeframe] = useState(getCurrentTimeframe())
  const { year, month } = timeframe
  const [budgetData, setBudgetData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchBudget = async timeframe => {
    const response = await BudgetData.getByTimeframe(year, month)
    if (response === null) {
      setError('No budget found for selected time period. Create one?')
      setBudgetData(null)
    } else if (typeof response === 'string') {
      setError(response)
      setBudgetData(null)
    } else {
      setBudgetData(response.budget)
      setError(null)
    }
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchBudget(year, month)
  }, [year, month])

  return (
    <div className='container'>
      <TimeframePicker timeframe={timeframe} setTimeframe={setTimeframe} />
      <h3>
        Currently viewing data for: {year}-{month}
      </h3>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p className='text-danger'>{error}</p>
      ) : (
        JSON.stringify(budgetData)
      )}
    </div>
  )
}

export default Budget
