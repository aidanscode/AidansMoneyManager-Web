import Item from './item'
import AddItem from './item/add'

function BudgetItems({ items, addItem, editItem, deleteItem, textClass }) {
  return (
    <ul className='list-group'>
      {items.map((item, index) => {
        return (
          <li className='list-group-item' key={index}>
            <Item
              item={item}
              editItem={newItem => editItem(index, newItem)}
              deleteItem={() => deleteItem(index)}
              textClass={textClass}
            />
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
