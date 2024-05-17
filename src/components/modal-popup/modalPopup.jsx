import React, { useEffect, useRef } from "react";
import "./modalPopup.css"
import UseRefCloseModalHook from "./useRefCloseModalHook";


const ModalPopup = ({ contents, closeModal }) => {
    const ref = useRef()
    UseRefCloseModalHook(ref, ()=>closeModal())

    return <div className="modal" onClick={(event) => UseRefCloseModalHook(event, ref, closeModal)}>

        <div className="popup-main" ref={ref} >

            <div className="content-modal" >
                <div className="popup-heading" >
                    <span className="close-modal" onClick={closeModal}>
                        <p >&times;</p>
                    </span>
                    {contents?.footer ? <div>{contents.heading} </div> : <h2>This is the heading</h2>}

                </div>
                <div className="popup-body">
                    {contents?.footer ? <div>{contents.body} </div> : <h2>This is the body</h2>}

                </div>
                <div className="popup-footer">
                    {contents?.footer ? <div>{contents.footer} </div> : <h2>This is the footer</h2>}
                </div>

            </div>
        </div>
    </div>
}

export default ModalPopup