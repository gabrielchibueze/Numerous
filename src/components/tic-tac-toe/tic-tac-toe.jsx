import React, { useEffect, useRef, useState } from "react";
import "./tic-tac-toe.css"
import UseOutsideHookRef from "./useOutsideHookRef";
import UseRefCloseModalHook from "../modal-popup/useRefCloseModalHook";

// 0 1 2
// 3 4 5
// 6 7 8

export default function TicTacToe() {
    const [TicTac, setTicTac] = useState([{ id: 1, value: "" }, { id: 2, value: "" }, { id: 3, value: "" }, { id: 4, value: "" }, { id: 5, value: "" }, { id: 6, value: "" }, { id: 7, value: "" }, { id: 8, value: "" }, { id: 9, value: "" }])
    const [isXPlaying, setIsXPlaying] = useState(false)
    const [playerStatus, setPlayerStatus] = useState("")
    const [winnerResult, setWinnerResult] = useState("")
    const [first, setFirst] = useState(false)
    const ref = useRef()

    function handleWinner(tictac) {
        const winningPattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < winningPattern.length; i++) {
            const [a, b, c] = winningPattern[i]
            if (tictac[a].value && tictac[a].value === tictac[b].value && tictac[a].value === tictac[c].value) {
                return tictac[a].value
            }
        }
        return null
    }

    function handleValueChange(currentId) {
        const currentTicIndex = TicTac.findIndex(tics => tics.id === currentId)
        if (!handleWinner(TicTac) && !TicTac[currentTicIndex].value) {
            setTicTac(prevValue => {
                const copyPrevValue = [...prevValue]
                copyPrevValue[currentTicIndex].value = isXPlaying ? "X" : "O";
                return copyPrevValue
            })
            setIsXPlaying(!isXPlaying)
        }
        else {
            return null
        }
    }

    function restartGame() {
        setTicTac(prevValue => {
            const copyPrevValue = [...prevValue]
            for (let i = 0; i < copyPrevValue.length; i++) {
                copyPrevValue[i].value = ""
            }
            return copyPrevValue
        })
        setWinnerResult("")
        setIsXPlaying(!isXPlaying)
        setFirst(false)
    }
    useEffect(() => {
        if (!handleWinner(TicTac) && TicTac.every(tics => tics.value !== "")) {
            setWinnerResult("The game is a draw, please restart")
        }
        else if (handleWinner(TicTac)) {
            setWinnerResult(`The winner is player ${handleWinner(TicTac)}`)
        }
        else {
            setPlayerStatus(`Next player is: ${isXPlaying ? "X" : "O"}`)
        }
    }, [TicTac, isXPlaying])

    UseRefCloseModalHook(ref, () => setWinnerResult(prv => {
        setFirst(true)
        return ""
    }))

    return <div className="tic-tac-section">
        <div className="tic-tac-toe" >

            {TicTac.map(tics => {
                return <div key={tics.id} className="tics" onClick={() => handleValueChange(tics.id)}>
                    <h1>{tics.value ? tics.value : null}</h1>
                </div>
            })}
        </div>
        <h2>{playerStatus}</h2>
        {
            first &&
            <div className="restart-btn">
                <button  onClick={restartGame}>Restart Game</button>
            </div>
        }

        {winnerResult?.trim() !== "" ?
            <div className="winner-status" >
                <div className="result-section" ref={ref}>
                    <h2>{winnerResult}</h2>
                    <button onClick={restartGame}>Restart Game</button>
                </div>
            </div> : null
        }
    </div>
}