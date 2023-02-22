const formatAddress = (addr, num = 5, defaultSymbol = '...') => {
  if (!addr) {
    return defaultSymbol
  }
  return (
    addr.slice(0, num) +
    defaultSymbol +
    addr.split('').reverse().slice(0, num).reverse().join('')
  )
}

export {
  formatAddress
}