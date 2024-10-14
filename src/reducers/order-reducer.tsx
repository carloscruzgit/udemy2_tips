import { OrderItem, MenuItem } from "../types"

export type OrderActions = 
{ type: 'ADD_ITEM_TO_ORDER', payload: { item: MenuItem } } |
{ type: 'REMOVE_ITEM_FROM_ORDER', payload: {itemId: MenuItem['id'] } } |
{ type: 'MODIFY_QUANTITY_ITEM', payload: {itemId: MenuItem['id'], quantity: number}} |
{ type: 'PLACE_ORDER'} | 
{ type: 'ADD_TIP', payload: {value: number}}

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState: OrderState = {
    order: localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')!) : [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {

    if(action.type === 'ADD_ITEM_TO_ORDER'){
        const itemExists = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        let updatedOrder : OrderItem[] = []

        if(itemExists){
            updatedOrder = state.order
                .map(orderItem => orderItem.id === action.payload.item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            

        }else{
            const newItem : OrderItem = {...action.payload.item, quantity: 1}
            updatedOrder = [...state.order, newItem]
        }

        return {
            ...state,
            order: updatedOrder
        }
    }

    if(action.type === 'REMOVE_ITEM_FROM_ORDER'){
        const newOrder = state.order.filter(orderItem => orderItem.id != action.payload.itemId)
        return {
            ...state,
            order: newOrder
        }
    }

    if(action.type === 'MODIFY_QUANTITY_ITEM'){
        const newOrder = state.order
            .map(orderItem => orderItem.id === action.payload.itemId ? {...orderItem, quantity: action.payload.quantity}: orderItem)
            .filter(orderItem => orderItem.quantity > 0)
        return {
            ...state,
            order: newOrder
        }
    }

    if(action.type === 'PLACE_ORDER'){
        return {
            order: [],
            tip: 0
        }

    }

    if(action.type === 'ADD_TIP'){
        return {
            ...state,
            tip: action.payload.value
        }
    }

    return state
}

