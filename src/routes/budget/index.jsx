import { useState } from 'react'
import { getCurrentTimeframe } from '../../util/time'
import TimeframePicker from '../../components/budget/timeframe-picker'

function Budget() {
  const [timeframe, setTimeframe] = useState(getCurrentTimeframe())

  return (
    <div className='container'>
      <TimeframePicker timeframe={timeframe} setTimeframe={setTimeframe} />
      <h3>
        Currently viewing data for: {timeframe.year}-{timeframe.month}
      </h3>
    </div>
  )
}

export default Budget
