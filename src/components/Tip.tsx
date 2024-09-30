import { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipProps = {
    tip: number,
    setTip: Dispatch<SetStateAction<number>>
}
function Tip({tip,setTip}: TipProps){
    return(
        <div className="mb-4">
            <h2 className="text-4xl mb-5 font-bold">Tip</h2>
            <form action="">
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex items-center gap-2">
                        <input
                            id={tipOption.id} 
                            type="radio"
                            name="tip" 
                            value={tipOption.value} 
                            onChange={(e) => setTip(+e.target.value)}
                            checked={tip === tipOption.value}/>
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default Tip