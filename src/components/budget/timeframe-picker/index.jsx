function TimeframePicker({ timeframe, setTimeframe }) {
  const updateMonth = newMonth => {
    setTimeframe({ year: timeframe.year, month: newMonth })
  }

  const updateYear = newYear => {
    setTimeframe({ year: newYear, month: timeframe.month })
  }

  const decrement = () => {
    if (timeframe.month <= 1) {
      setTimeframe({ year: timeframe.year - 1, month: 12 })
    } else {
      setTimeframe({ year: timeframe.year, month: timeframe.month - 1 })
    }
  }

  const increment = () => {
    if (timeframe.month >= 12) {
      setTimeframe({ year: timeframe.year + 1, month: 1 })
    } else {
      setTimeframe({ year: timeframe.year, month: timeframe.month + 1 })
    }
  }

  return (
    <div className='row'>
      <div className='col-md-7 col-xl-5 ms-md-auto'>
        <div className='d-flex d-flex-row'>
          <button className='btn btn-primary me-2' onClick={decrement}>
            &larr;
          </button>
          <div className='input-group'>
            <span className='input-group-text' id='input-timeframe-year'>
              Year
            </span>
            <input
              className='form-control'
              type='number'
              placeholder='Year'
              aria-label='Year'
              aria-describedby='input-timeframe-year'
              min={1000}
              max={9999}
              value={timeframe.year}
              onChange={e => updateYear(e.target.value)}
            />
          </div>

          <div className='input-group'>
            <span className='input-group-text' id='input-timeframe-month'>
              Month
            </span>
            <input
              className='form-control'
              type='number'
              placeholder='Month'
              aria-label='Month'
              aria-describedby='input-timeframe-month'
              min={1}
              max={12}
              value={timeframe.month}
              onChange={e => updateMonth(e.target.value)}
            />
          </div>

          <button className='btn btn-primary ms-2' onClick={increment}>
            &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}

export default TimeframePicker
