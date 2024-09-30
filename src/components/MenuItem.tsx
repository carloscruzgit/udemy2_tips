import type { MenuItem} from "../types"

type Props = {
    menuItem: MenuItem,
    addItemToOrder : (item: MenuItem) => void
}

function MenuItem({menuItem, addItemToOrder} : Props){
    return (
        <button
            className=" justify-between flex border-teal-400 w-full border-2 p-4 hover:bg-teal-400"
            onClick={() => addItemToOrder(menuItem)}
        >
            <p>{menuItem.name}</p>
            <p className="font-bold">{menuItem.price}€</p>
        </button>
    )
}

export default MenuItem