import Icon from "../Icon/Icon";
import './Card.css';
//So now when we are rendering the card we will expect a prop
function Card({onPlay,player,index,gameEnd}){

    // function playMove(){
    //     //Basically onPlay changes the turn
    //     onPlay();

    // }
    let icon=<Icon/>
    if(player=="X"){
        icon=<Icon name={"cross"} />

    }
    else if(player=="O"){
        icon=<Icon name={"circle"} />

    }

  
    return(
        <div className="card" onClick={()=> !gameEnd && player=="" && onPlay(index)}>
            
              {/* Now we will Print whatever the value of Icon is */}
              {icon}
            
           
        </div>
    )
}
export default Card;
