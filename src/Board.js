import React from "react";
import Cells from "./Cells";

class Board extends React.Component {
    render(){
        return(
            <div id="board">
                <Cells/>
                <div id="announce-winner"></div>
                <button id="clear">Clear Board</button>
            </div>
        )
    }
}

export default Board;