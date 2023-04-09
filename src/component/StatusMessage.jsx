const Statusmessage = ({ winner, isXnext, squares }) => {
  const nextPlayer = isXnext ? 'X' : 'O';
  const noMovesLeft = squares.every(squresValue => 
    squresValue !== null
  )

  //-we donot use another usestate because the message variable is a derived state

  const renderStatusMessasge = () => {
    if (winner) {
      return <>winner is  
       <span className={winner ==="X" ?"text-green":'text-orange'}> {winner} </span></>;
    }
    if (!winner && noMovesLeft) {
        return <>
        <span className="text-green">X</span>  And
       <span className="text-orange">O</span>  tied</>
      }
    if (!winner && !noMovesLeft) {
      return <>
      Next player is {''}
      <span className={isXnext?"text-green":'text-orange'}>{nextPlayer}</span>
      
      </>
    }
   
    return null;
  };

  return <h2 className="status-message">{renderStatusMessasge()}</h2>;
};
export default Statusmessage;
