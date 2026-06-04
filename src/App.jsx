import React from 'react'
import ProductDetails from './components/PropsAndComponents/ProductDetails'

function App() {
  return (
    <>
      <p>Hello, Welcome to my website.</p>
      <ProductDetails heading="Cotton Socks" para="Price : $10.9" discountPrice="$5.45" />
      <ProductDetails heading="Plain T-shirt" para="Price : $20.9" discountPrice="" />
      <ProductDetails heading="Tennis Ball" para="Price : $15.5" discountPrice="" />
    </>
  )
}

export default App