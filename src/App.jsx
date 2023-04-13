import { useState } from 'react';
import  calculateWinner  from './winner';
//import reactLogo from './assets/react.svg'
import Board from './component/Board';
import './styles.scss';
import History from "./component/History"
import  Statusmessage  from './component/StatusMessage';
//i am doing that for create a reset game functionality .
//that the reason for puting this
//inside  an glovbal variable
const NEW_GAME= [{squares:Array(9).fill(null),isXnext:false}]

function App() {
//we know that History is a array of object so that  we creatae a state for this   
  const [history ,sethistory]=useState(NEW_GAME)
 
  //lets add a player function for playing
  //passing the initial value as false and next its flips
  const [currentMove,setcurrentMove]=useState(0)

  const gamingBoard=history[currentMove]
  const winner = calculateWinner(gamingBoard.squares);

   
  const handelSquareClick = clickedPosiion => {
    //its check if Already the value present then not run the next code or you can say
    //not update the value
    if (gamingBoard.squares[clickedPosiion] || winner) {
      return
    }
    //to updated the value when we clicked
    //we must use setsqure function to update the state

    sethistory(currentHistory => {
const isTraversing=currentMove+1!=currentHistory.length
const lastGamingState = isTraversing? currentHistory[currentMove]:history[history.length-1]//in this way we can get the latest history ,because it is an  array of object.


      const nextSquareaState=  lastGamingState.squares.map((squaresValue, index_Of_SqureValue) => {
        if (clickedPosiion == index_Of_SqureValue) {
          return lastGamingState.isXnext ? 'X' : 'O';
        }
        return squaresValue;
      });
const base=isTraversing?currentHistory.slice(0,currentHistory.indexOf(lastGamingState)+1):currentHistory
      return base.concat({squares:nextSquareaState,isXnext:!lastGamingState.isXnext}) 
      //  !lastGamingState.isXnext we use it for flip the boolean value
    });
    setcurrentMove(move=>move+1)
  };

  const moveTo=(move)=>{
    setcurrentMove(move)
  }

   const Reset_function=()=>{
    sethistory(NEW_GAME)
    setcurrentMove(0)
   }
  return (
    <div className="app">
      <h1>TIC   <span className='text-green'>TAC</span> TO</h1>
      <Statusmessage winner={winner} gamingBoard={gamingBoard}/>
      <Board squares={gamingBoard.squares} handelSquareClick={handelSquareClick} />
      <button onClick={Reset_function} className={`btn-reset ${winner?'active':''}`}> RESTART GAME</button>
      <h2 style={{
        frontWeight:'normal'
      }}> Current Game History</h2>
      <History  history={history} moveTo={moveTo} currentMove={currentMove}/>
      <div className='bg-balls'/>
    </div>

  );
  
  }
export default App;
