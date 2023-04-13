


const Squre=({value,onClick})=>{
    return (
        <button type="button"className={`square ${value==='X'?'text-green':'text-orange'}`} onClick={onClick}>{value}</button>
     
    )
}
export default Squre