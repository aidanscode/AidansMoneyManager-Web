export const sumLineItemAmountFromCategories = categories => {
  return categories.reduce((categoryAccumulator, category) => {
    return (
      categoryAccumulator +
      category.items.reduce((itemsAccumulator, item) => {
        return itemsAccumulator + item.amount
      }, 0)
    )
  }, 0)
}

export const sumTransactionAmountFromCategories = categories => {
  return categories.reduce((categoryAccumulator, category) => {
    return (
      categoryAccumulator +
      category.items.reduce((itemsAccumulator, item) => {
        return itemsAccumulator + sumTransactionAmountFromLineItem(item)
      }, 0)
    )
  }, 0)
}

export const sumTransactionAmountFromLineItem = lineItem => {
  return lineItem.transactions.reduce((accumulator, transaction) => {
    return accumulator + transaction.amount
  }, 0)
}
