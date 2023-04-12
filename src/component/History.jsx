const History=({history,moveTo,currentMove})=>{
    return <div className="history-wrapper" >
    
<ul className="history">
{/* Here i am passing key {index} by maping and send the index  because react wants to keep track all the maping elements */}
    {history.map((_,index)=>
  <li key={index} className="">  <button  type="button" className={`btn-move ${currentMove===index ?'active': ''  }` } onClick={()=>moveTo(index)}
    key={index}>
        {index===0?`Go To Game Start`:`Go To Move # ${index}`}
    </button></li>
    )
    }
</ul>
    </div>
}
export default History