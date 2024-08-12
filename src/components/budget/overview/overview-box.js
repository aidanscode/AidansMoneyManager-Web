import { useFormatting } from '../../../util/formatting'

function OverviewBox({ header, totalIncome, totalExpenses, overspentMessage }) {
  const formatter = useFormatting()
  const remaining = totalIncome - totalExpenses
  return (
    <div>
      <h3 className='h-3'>{header}</h3>
      <div className='card'>
        <div className='card-body'>
          <h5>Budgeted</h5>
          <div className='d-flex justify-content-between'>
            <span className='text-success fw-bold'>Total Income</span>
            <span className='text-success'>
              {formatter.formatCurrency(totalIncome)}
            </span>
          </div>

          <div className='d-flex justify-content-between'>
            <span className='text-warning fw-bold'>Total Expenses</span>
            <span className='text-warning'>
              {formatter.formatCurrency(totalExpenses)}
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
            <span className='text-danger'>{overspentMessage}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default OverviewBox
