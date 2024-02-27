import './App.css'
import OrderPage from './Components/OrderPage/OrderPage'
import Products from './Components/Products/Products'

function App() {

  return (
    <div className='max-w-7xl mx-auto m-2'>
      <div className='md:flex '>
        <div className='md:w-1/2'>
          <OrderPage className=''></OrderPage>
        </div>
        <Products className='md:w-1/2' ></Products>
      </div>
    </div>
  )
}

export default App
