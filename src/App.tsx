import { useReducer, useEffect } from "react"
import MenuItem from "./components/MenuItem"
import OrderItems from "./components/OrderItems"
import OrderTotals from "./components/OrderTotals"
import Tip from "./components/Tip"
import {initialState, orderReducer} from "./reducers/order-reducer"
import { menuItems } from "./data/db"

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(state.order))
  }, [state.order])

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
              <MenuItem key={menuItem.id} menuItem={menuItem} dispatch={dispatch}/>
            ))}
          </div>
            
        </div>
        <div className="p-5 border-2">
          {state.order.length ? (
            <>
              <OrderItems order={state.order} dispatch={dispatch}/>
              <Tip tip={state.tip} dispatch={dispatch}/>
              <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch}/>
            </>
          ): <p className=" text-center">The order is empty!</p>}
          
        </div>
      </main>

    </> 
  )
}

export default App
