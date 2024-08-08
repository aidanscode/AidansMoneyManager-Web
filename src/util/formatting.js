import { createContext, useContext } from 'react'

const FormatingContext = createContext()

export const ProvideFormatting = ({ children }) => {
  const auth = useProvideFormatting()
  return (
    <FormatingContext.Provider value={auth}>
      {children}
    </FormatingContext.Provider>
  )
}

export const useFormatting = () => {
  return useContext(FormatingContext)
}

const numberFormatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const useProvideFormatting = () => {
  const formatCurrency = amount => numberFormatter.format(amount)

  return { formatCurrency }
}
