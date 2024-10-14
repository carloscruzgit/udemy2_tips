import {  OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderProps = {
    order: OrderItem[],
    dispatch:  React.Dispatch<OrderActions>
}

function OrderItems({order, dispatch} : OrderProps) {
    return (
        <>
        <h2 className="text-4xl mb-5 font-bold">Order</h2>
        <div className="mb-5">
            {order.map(orderItem => (
                <div key={orderItem.id} className="flex w-full p-4 border-b-2 items-center">
                    <div className="flex-auto">
                        <p>{orderItem.name} - {formatCurrency(orderItem.price)}</p>
                        <p className=" font-bold">Cantidad: {orderItem.quantity} - {formatCurrency(orderItem.price * orderItem.quantity)}</p>
                        <button className="bg-teal-400 text-white w-7 h-7 rounded-full mr-4 pb-1" onClick={() => dispatch({type: 'MODIFY_QUANTITY_ITEM', payload: {itemId: orderItem.id, quantity: orderItem.quantity-1}})}>-</button> 
                        <button className="bg-teal-400 text-white w-7 h-7 rounded-full pb-1" onClick={() => dispatch({type: 'MODIFY_QUANTITY_ITEM', payload: {itemId: orderItem.id, quantity: orderItem.quantity+1}})}>+</button>
                    </div>
                    <button
                    className=" bg-teal-400 text-white w-8 h-8 rounded-full"
                    onClick={() => dispatch({type: 'REMOVE_ITEM_FROM_ORDER', payload: {itemId: orderItem.id}})}>
                        X
                    </button>
                </div>
              ))}
        </div>
        </>

    )   
}

export default OrderItems