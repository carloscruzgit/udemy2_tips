import type { MenuItem} from "../types"
import { OrderActions } from "../reducers/order-reducer"

type Props = {
    menuItem: MenuItem,
    dispatch:  React.Dispatch<OrderActions>
}

function MenuItem({menuItem, dispatch} : Props){
    return (
        <button
            className=" justify-between flex border-teal-400 w-full border-2 p-4 hover:bg-teal-400"
            onClick={() => dispatch({type: 'ADD_ITEM_TO_ORDER', payload: {item: menuItem}})}
        >
            <p>{menuItem.name}</p>
            <p className="font-bold">{menuItem.price}€</p>
        </button>
    )
}

export default MenuItem