import MenuItem from "./components/MenuItem"
import OrderItems from "./components/OrderItems"
import OrderTotals from "./components/OrderTotals"
import Tip from "./components/Tip"
import { menuItems } from "./data/db"
import useOrder from './hooks/useOrder'

function App() {
  const {order, tip, setTip, addItemToOrder, removeItemFromorder, modifyQuantityItemFromOrder, placeOrder} = useOrder()

  console.log(order)
  return (
    <>
      <header className=" bg-teal-400 py-8">  
        <h1 className=" font-bold text-3xl text-white text-center">Order & Tips Calculator</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl mb-5 font-bold">Menu</h2>
          <div className="space-y-3">
            {menuItems.map(menuItem => (
              <MenuItem key={menuItem.id} menuItem={menuItem} addItemToOrder={addItemToOrder}/>
            ))}
          </div>
            
        </div>
        <div className="p-5 border-2">
          {order.length ? (
            <>
              <OrderItems order={order} removeItemFromorder={removeItemFromorder} modifyQuantityItemFromOrder={modifyQuantityItemFromOrder}/>
              <Tip tip={tip} setTip={setTip}/>
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder}/>
            </>
          ): <p className=" text-center">The order is empty!</p>}
          
        </div>
      </main>

    </> 
  )
}

export default App
