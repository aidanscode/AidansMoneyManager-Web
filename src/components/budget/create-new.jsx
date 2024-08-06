import getStarterTemplate from '../../data/budget/template'

function CreateNew({ setBudget }) {
  const create = () => {
    setBudget(getStarterTemplate())
  }

  return (
    <div className='text-center'>
      <p>You have no budget saved for this time period!</p>
      <button className='btn btn-primary' onClick={create}>
        Create One?
      </button>
    </div>
  )
}

export default CreateNew
