function placeOrder (order) {
  try {
    // 1. Validate Input
    if (!order || !order.item || !order.quantity) {
      throw new Error('INvalid order: missing items or quantity')
    }
    console.log(`Checking stock for item : ${order.item}`)

    // 2 check stock
    const stock = {
      book: 5,
      pen: 10,
      laptop: 0
    }
    if (!stock[order.item]) {
      throw new Error(`Item ${order.item} is out of stock`)
    }

    if (order.quantity > stock[order.item]) {
      throw new Error(`Not enough stock for ${order.item}. Only ${stock[order.item]} left.`)
    }
    // 3 SAVE THE ORDER
    console.log(`Order placed : ${order.quantity} x ${order.item}`)
  } catch (error) {
    // handling th errors
    console.log('Some error occured with the order\n', error.message)
  } finally {
    console.log('Order process completed\n\n')
  }
}

placeOrder({ item: 'book', quantity: 2 })
placeOrder({ item: 'laptop', quantity: 1 })
placeOrder({ item: 'pen', quantity: 15 })
placeOrder({ quantity: 2 })
