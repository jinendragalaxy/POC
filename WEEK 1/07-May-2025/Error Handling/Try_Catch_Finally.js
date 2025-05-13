function divideNumber (a, b) {
  try {
    if (c === 0) {
      throw new Error('Cannot divide by zero!!!')
    }
    const result = a / b
    console.log('Result', result)
  } catch (error) {
    // if error comes it shows here
    console.log('Error :', error.message)
  } finally {
    console.log('Divide is Completed')
  }
}

divideNumber(2, 0)
