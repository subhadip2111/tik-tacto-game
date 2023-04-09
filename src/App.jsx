import { useState } from 'react';
import  calculateWinner  from './winner';
//import reactLogo from './assets/react.svg'
import Board from './component/Board';
import './styles.scss';
import  Statusmessage  from './component/StatusMessage';
function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  //lets add a player function for playing
  //passing the initial value as false and next its flips
  const [isXnext, setisXnext] = useState(false);
  const winner = calculateWinner(squares);

   
  const handelSquareClick = clickedPosiion => {
    //its check if Already the value present then not run the next code or you can say
    //not update the value
    if (squares[clickedPosiion] || winner) {
      return
    }
    //to updated the value when we clicked
    //we must use setsqure function to update the state

    setsquares(currentSquares => {
      return currentSquares.map((squaresValue, index_Of_SqureValue) => {
        if (clickedPosiion == index_Of_SqureValue) {
          return isXnext ? 'X' : 'O';
        }
        return squaresValue;
      });
    });
    setisXnext(currentIsnext => !currentIsnext);
  };
  return (
    <div className="app">
      
      <Statusmessage winner={winner} isXnext={isXnext} squares={squares}/>
      <Board squares={squares} handelSquareClick={handelSquareClick} />
    </div>
  );
  
  }
export default App;
