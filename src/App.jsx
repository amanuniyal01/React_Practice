import React from 'react'
import ProductDetails from './components/PropsAndComponents/ProductDetails'
import DisplayAsYouWant from './components/StatesAndEventHandlers/DisplayAsYouWant'
import Multideropsown from './components/Multidropdown/Multideropsown'
import ChipsInput from './components/ChipsInput/ChipsInput'
import { Provider } from 'react-redux'
import store from './utils/store'
import EvenOrOddChecker from './components/EvenOdd/EvenOdd'

function App() {
  return (
    <Provider store={store}>
      <>
        <p className='text-center font-bold'>Hello, Welcome to React Practice Series.</p>
        {/* <ProductDetails heading="Cotton Socks" para="Price : $10.9" discountPrice="$5.45" />
      <ProductDetails heading="Plain T-shirt" para="Price : $20.9" discountPrice="" />
      <ProductDetails heading="Tennis Ball" para="Price : $15.5" discountPrice="" /> */}
        {/* <DisplayAsYouWant /> */}
        {/* <Multideropsown /> */}

        {/* <ChipsInput /> */}
        <EvenOrOddChecker />

      </>
    </Provider>
  )
}

export default App