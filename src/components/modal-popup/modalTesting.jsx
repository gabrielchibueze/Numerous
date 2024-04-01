import React, { useState } from "react";
import ModalPopup from "./modalPopup";


const modalTesting = ()=>{

    const [showPopup, setShowPopup] = useState(false)

    const contents = {
        heading: <div><h1>Customized heading</h1></div>,
        body: <div><h5>Customized body</h5></div>,
        footer: <div><h1>Customized footer</h1></div>

    }

    const handlePopup = () =>{
        setShowPopup(true)
    }
    const handleCloseModla = ()=>{
        setShowPopup(false)
    }

    return <div className="testing-modal-main">
        <h1>Welcome to my Blog</h1>
        <button onClick={handlePopup}>Show popup</button>
        {showPopup && <ModalPopup closeModal = {handleCloseModla} contents={contents} />}

    </div>
}

export default modalTesting