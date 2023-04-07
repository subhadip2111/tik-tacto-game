import Squre from "./Squre"

import { useState } from "react"
const Board=()=>{
   const [squares,setsquares]=useState(Array(9).fill(null))
   const handelSquareClick=clickedPosiion=>{
//to updated the value when we clicked we must use setsqure function to update the state

setsquares((currentSquares)=>{
    return  currentSquares.map((squaresValue,index_Of_SqureValue)=>{
        if(clickedPosiion==index_Of_SqureValue){
            return "X"
        }
        else 
        return squaresValue
    })
})

   }
   const renderSquare=(position)=>{
return (
    <Squre value={squares[position]}
        onClick={()=>{handelSquareClick(position)}}
    />
)
   }

    return (
        <div className="board">
<div className="board-row">
   
{renderSquare(0)}
{renderSquare(1)}
{renderSquare(2)}
</div>
<div className="board-row">
{renderSquare(3)}
{renderSquare(4)}
{renderSquare(5)}
</div>
<div className="board-row">
{renderSquare(6)}
{renderSquare(7)}
{renderSquare(8)}
</div>
        </div>
    )
}
export default Board