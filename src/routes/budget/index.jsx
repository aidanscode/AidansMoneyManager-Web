import { useEffect, useState } from 'react'
import { getCurrentTimeframe } from '../../util/time'
import TimeframePicker from '../../components/budget/timeframe-picker'
import Spinner from '../../components/util/spinner'
import BudgetData from '../../data/budget/db'
import CreateNew from '../../components/budget/create-new'
import EditBudget from '../../components/budget/edit'

function Budget() {
  const [timeframe, setTimeframe] = useState(getCurrentTimeframe())
  const { year, month } = timeframe
  const [budget, setBudget] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBudget = async (year, month) => {
      const response = await BudgetData.getByTimeframe(year, month)
      if (response === null) {
        setBudget(null)
        setError(null)
      } else if (typeof response === 'string') {
        setError(response)
        setBudget(null)
      } else {
        setBudget(response.budget)
        setError(null)
      }
      setLoading(false)
    }

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
      ) : budget ? (
        <EditBudget budget={budget} setBudget={setBudget} />
      ) : (
        <CreateNew setBudget={setBudget} />
      )}
    </div>
  )
}

export default Budget
