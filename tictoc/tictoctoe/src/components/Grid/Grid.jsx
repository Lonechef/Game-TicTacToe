import { useState } from "react";
import Card from "../Card/Card";
import isWinner from "../../helper/checkwinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Grid.css'



function Grid({numberofCards}){
    //Inside the Grid we have to render 9 Cards
    const[turn,SetTurn]=useState(true);  // false->X turn , true->0 turn
    //Now we will consider a board and set all the values in the board to be null
    const[board,SetBoard]=useState(Array(numberofCards).fill(""));
    const[winner,setWinner]=useState(null);
    //Now we will write the function to detect the winner
  
    function Play(index){
        // We will pass Play which is the callBack as the prop
        console.log("Move Played",index);
        if(turn==true){
            board[index]='O';      
        }
        else{
            board[index]='X';
        }
        const win=isWinner(board,turn?"O":"X");
        if(win){
           setWinner(win);

           //Now in documentation we see that success will show green tick
           toast.success(`Congratulation ${win} win the game` )
        }

        SetBoard([...board]);
        //Everytime use takes the turn we need to change the value
        SetTurn(!turn);
    }

    function reset(){
        SetBoard(Array(numberofCards).fill(""));
        setWinner(null);
        SetTurn(true);
    }


    return(
        <div className="grid-wrapper">
        {/* Now in this we will use the logic that when ever first condition is false it wont check the another one */}
        {winner && (
            <>
        <h1 className='turn-highlight'>Winner is {winner} </h1>
        <button className="reset" onClick={reset}>Reset Game</button>
        <ToastContainer position="top-center"/>

        </>
        )}

        <h1 className="turn-highlight">Current Turn: {(turn ? 'O' : 'X')} </h1>
        {/* Grid is one of the Child */}
        <div className="grid">
        {/* Basically grid will get total number of Cards and we will pass it in form of Array */}
         {/* {Array(numberofCards).map((el,idx)=><Card key={idx} iconname=""/>)} */}
         {/* The above line is throwing an empty array */}
         {/* {Array(numberofCards).fill(<Card/>).map((el,idx)=>{ */}
            {/* Instead of iterating on number of cards we will iterate on the board */}
            {/* What ever is the current value we will pass it as prop */}
            {board.map((value,idx)=>{
                return <Card gameEnd={winner ? true : false} onPlay={Play} player={value} key={idx} index={idx}/>
         })}
         </div>
         </div>
       
    )

}
export default Grid; 