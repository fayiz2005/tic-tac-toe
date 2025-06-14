import './components.css';
import React, { useState } from 'react';

export function Grid() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
const[winner, setWinner]=useState("")
  const handleClick = (number) => {
    if (lock || data[number] !== "") return;
    if (data[number] !== "") return;

    const newData = [...data];
    newData[number] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(prev => prev + 1)
    winCheck(newData)
  };

  const renderIcon = (value) => {
    if (value === "x") return <i className="bi bi-x-lg"></i>;
    if (value === "o") return <i className="bi bi-circle"></i>;
    return null;
  };

const winCheck = (board) => {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]         
  ];

  for (let [a, b, c] of wins) {
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      setLock(true);
      setWinner(board[a] === "x" ? "player-1" : "player-2");
      return;
    }
  }
};
const resetGame = () => {
  setData(["", "", "", "", "", "", "", "", ""]);
  setCount(0);
  setWinner(null);
  setLock(false);
};


  return (
    <>
    <div className="game-container">
        <h1 className='Header'>Tic-Tac-Toe</h1>
        <div className="grid-container">
        <div className="boxes" onClick={() => handleClick(0)}>{renderIcon(data[0])}</div>
        <div className="boxes" onClick={() => handleClick(1)}>{renderIcon(data[1])}</div>
        <div className="boxes" onClick={() => handleClick(2)}>{renderIcon(data[2])}</div>
        <div className="boxes" onClick={() => handleClick(3)}>{renderIcon(data[3])}</div>
        <div className="boxes" onClick={() => handleClick(4)}>{renderIcon(data[4])}</div>
        <div className="boxes" onClick={() => handleClick(5)}>{renderIcon(data[5])}</div>
        <div className="boxes" onClick={() => handleClick(6)}>{renderIcon(data[6])}</div>
        <div className="boxes" onClick={() => handleClick(7)}>{renderIcon(data[7])}</div>
        <div className="boxes" onClick={() => handleClick(8)}>{renderIcon(data[8])}</div>
        
        </div>
        <div>{winner && <div className="winner-message">🎉 Congratulations {winner}! 🎉</div>}</div>
        <button className="reset-button" onClick={resetGame}>Restart Game</button>


        </div>
    
    </>
  );
}
