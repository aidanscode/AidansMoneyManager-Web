function Icon({ name, margin, onClick }) {
  return (
    <i
      className={getIconClassName(name, margin)}
      role={onClick ? 'button' : ''}
      onClick={onClick}
    ></i>
  )
}

const getIconClassName = (name, margin) => {
  return `bi ${name} ${margin ?? null}`
}

export default Icon
