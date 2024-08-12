export const sumAmountFromCategories = categories => {
  return categories.reduce((categoryAccumulator, category) => {
    return (
      categoryAccumulator +
      category.items.reduce((itemsAccumulator, item) => {
        return itemsAccumulator + item.amount
      }, 0)
    )
  }, 0)
}

export const sumTransactionAmountFromLineItem = lineItem => {
  return lineItem.transactions.reduce((accumulator, transaction) => {
    return accumulator + transaction.amount
  }, 0)
}
