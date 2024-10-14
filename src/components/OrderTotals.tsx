import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type Props = {
    order: OrderItem[],
    tip: number,
    dispatch:  React.Dispatch<OrderActions>
}
function OrderTotals({order, tip, dispatch} : Props){

    const subTotal = useMemo(() => order.reduce((total, orderItem) => total + orderItem.price * orderItem.quantity, 0), [order])
    const tipAmount = useMemo(() => subTotal * tip, [tip, order])
    const totalAmount = useMemo(()=> subTotal + tipAmount, [tip, order])

    return (
        <>
            <h3 className="text-2xl font-bold">Order Totals</h3>
            <p className="text-xl">Subtotal: <span className="font-bold">{formatCurrency(subTotal)}</span></p>
            <p className="text-xl">Tip amount: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
            <p className="text-xl">Total to pay: <span className="font-bold">{formatCurrency(totalAmount)}</span></p>

            <button 
                className="w-full bg-black text-white p-3 mt-10 hover:bg-teal-400 font-bold uppercase disabled:opacity-50"
                disabled={order.length === 0}
                onClick={() => dispatch({type: 'PLACE_ORDER'})}
            >Complete Order</button>
        </>
    )
}

export default OrderTotals