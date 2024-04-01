import React from "react";
import "./modalPopup.css"


const ModalPopup = ({ contents, closeModal }) => {
    return <div className="modal">
        <div className="popup-main">

            <div className="content-modal">
                <div className="popup-heading">
                    <span className="close-modal" onClick={closeModal}>
                        <p >&times;</p>
                    </span>
                    {contents && contents.footer ? <div>{contents.heading} </div> : <h2>This is the heading</h2>}

                </div>
                <div className="popup-body">
                    {contents && contents.footer ? <div>{contents.body} </div> : <h2>This is the body</h2>}

                </div>
                <div className="popup-footer">
                    {contents && contents.footer ? <div>{contents.footer} </div> : <h2>This is the footer</h2>}
                </div>

            </div>
        </div>
    </div>
}

export default ModalPopup