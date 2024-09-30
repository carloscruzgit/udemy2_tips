import { useState } from "react"
import { OrderItem, MenuItem } from "../types"
import { formatCurrency } from "../helpers"

const useOrder = ()=> {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState<number>(0)

    const addItemToOrder = (item: MenuItem) => {
            const itemIndex = order.findIndex(product => product.id === item.id)
            if(itemIndex >= 0){
                const newOrder = [...order]
                newOrder[itemIndex].quantity += 1
                setOrder(newOrder)
            }else{
                const newItem : OrderItem = {...item, quantity: 1}
                setOrder([...order, newItem])
            }
    }

    /*const addItemToOrder2 = (item: MenuItem) => {
        const itemExists = order.find(product => product.id === item.id)
        if(itemExists){
            const newOrder = order.map(product => product.id === item.id ? {...product, quantity : product.quantity +1} : product)
            setOrder(newOrder)
        } else{
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }*/

    const removeItemFromorder = (id: MenuItem["id"]) => {
        const newOrder = order.filter(product => product.id !== id)
        setOrder(newOrder)
    }

    const modifyQuantityItemFromOrder = (id: MenuItem["id"], quantity: number) => {
        const newOrder = order.map(product => product.id === id ? {...product, quantity} : product).filter(product => product.quantity > 0)
        setOrder(newOrder)
    }

    const getSubTotal = () => {
        return formatCurrency(order.reduce((total, orderItem) => total + orderItem.price * orderItem.quantity, 0))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItemToOrder,
        removeItemFromorder,
        modifyQuantityItemFromOrder,
        getSubTotal,
        placeOrder
    }    
}

export default useOrder