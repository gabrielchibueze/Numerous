import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./qrCode.css"


const GenerateQRCode = () => {
    const [qrCode, setQRCode] = useState("");
    const [inputValue, setInputValue] = useState("")

    const handleGenerateQRCode = () => {
        setQRCode(inputValue)
        console.log(inputValue)
    }
    return (
        <div className="qr-code-generator">
            <div className="heading">
                <h1>Welcome to Awesome QR generator</h1>
            </div>
            <div className="input-section">
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    type="text" name="qr-code"
                    placeholder="Enter QR code initiation label" />
                <button disabled={inputValue === "" && inputValue.trim() === "" ? true : false} onClick={handleGenerateQRCode}>Generate</button>
            </div>
            <div className="qr-code__section">
                <QRCode id="qr-code" value={qrCode} />
            </div>

        </div>
    )
}

export default GenerateQRCode