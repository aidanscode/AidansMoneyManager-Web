function Spinner({ center }) {
  return (
    <div className={center ? 'd-flex justify-content-center' : ''}>
      <div className='spinner-grow text-secondary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )
}

export default Spinner
