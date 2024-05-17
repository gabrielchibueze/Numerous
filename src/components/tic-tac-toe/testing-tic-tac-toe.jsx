import React, { useState } from "react";
import ticTacIcon from "./tictactoe.png"
import TicTacToe from "./tic-tac-toe";

export default function TestingTicTacToe() {
    const [showHint, setShowHint] = useState(false)

    return <div className="tictactoe_main-section">
        <div className="tictactoe-heading">
            <img src={ticTacIcon} style={{ width: "60px" }} />
            <h1>Game of TicTacToe</h1>
        </div>
        <div className="hint-section">
            <button className="hint-button" onClick={() => setShowHint(!showHint)}>{showHint ? " Hide" : "Show"} hint:</button>
            {showHint &&
                <div className="hint">
                    <p>Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O.</p>
                    <p>The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner</p>
                </div>
            }
        </div>
        <TicTacToe />
    </div>
}