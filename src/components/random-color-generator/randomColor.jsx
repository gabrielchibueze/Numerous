import React, { useState } from "react"
import "./randomColor.css"

const RandomColor = () => {
    const [color, setColor] = useState("green")
    const [typeOfColor, setTypeOfColor] = useState("HEX")


    const generateRandomNumbers = (length) => {
        return Math.floor(Math.random() * length)
    }

    const createRandomHexColor = () => {
        const colorNubers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#"
        for (let i = 0; i < 6; i++) {
            hexColor += colorNubers[generateRandomNumbers(colorNubers.length)]
        }
        setTypeOfColor("HEX")
        setColor(hexColor)

    }
    const createRandomRGBColor = () => {
        const r = generateRandomNumbers(256);
        const g = generateRandomNumbers(256);
        const b = generateRandomNumbers(256)

        const rgbColor = `${r},${g},${b}`
        setTypeOfColor("RGB")
        setColor(`rgb(${rgbColor})`)
    }

    return (<div className="random-top" style={
        {
            background: color,
            height: "100vh",
            // minWidth: "5px",
            paddingTop: "2rem",
            justifyContent: "center",
        }}>
        <div className="color-buttons">
            <button onClick={() => createRandomHexColor()}>Create HEX color</button>
            <button onClick={() => createRandomRGBColor()}>Create RGB color</button>
            <button onClick={() => typeOfColor === "HEX" ? createRandomHexColor() : createRandomRGBColor()}>Generate random color</button>
        </div>
        <div className="colors">
            <h1>Color type: {typeOfColor}</h1>
            <h1>Color code: {color}</h1>
        </div>
    </div>)
}

export default RandomColor