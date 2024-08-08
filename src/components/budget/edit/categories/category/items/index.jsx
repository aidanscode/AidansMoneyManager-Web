import { useFormatting } from '../../../../../../util/formatting'
import AddItem from './item/add'

function BudgetItems({ items, addItem, textClass }) {
  const formatter = useFormatting()
  return (
    <ul className='list-group'>
      {items.map((item, index) => {
        return (
          <li className='list-group-item' key={index}>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='card-title'>{item.name}</h5>
              <div className='d-flex flex-column'>
                <span className={textClass}>Budgeted</span>
                <span>{formatter.formatCurrency(item.amount)}</span>
              </div>
            </div>
          </li>
        )
      })}
      <li className='list-group-item' index='add-item'>
        <AddItem addItem={addItem} />
      </li>
    </ul>
  )
}

export default BudgetItems
