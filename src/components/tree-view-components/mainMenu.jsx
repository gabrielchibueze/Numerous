import React, { useState } from "react";
import SubMenu from "./subMenu.jsx";
import { FaMinus, FaPlus } from "react-icons/fa6"
import "./index.css"


const MainMenu = ({ mainMenu }) => {
    const [isInOpenArray, SetIsInOpenArray] = useState([])
    const [displayChildren, ssetDisplayChildren] = useState({})

    const handleMenuOpenAndClose = (itemId) => {

        ssetDisplayChildren({
            ...displayChildren, [itemId]: !displayChildren[itemId]
        })
        // SetIsInOpenArray(prevArray => {
        //     if (prevArray.find(item => item.id === itemId)) {
        //         return prevArray.filter(array => array.id !== itemId)
        //     }
        //     return [...prevArray, { id: itemId, isOpen: true }]
        // })

    }

    console.log(displayChildren)
    return (
        <div className="tree-view-components">
            {
                mainMenu && mainMenu.length > 0 ? mainMenu.map(items => {
                    return <ul key={items.label}>
                        <li>{items.label} {items.children &&
                            items.children.length &&

                            <span onClick={() => handleMenuOpenAndClose((items.label))}>
                                {displayChildren[items.label] ?
                                    <FaMinus style={{alignSelf: "center", fontSize: "20px"}} />
                                    : <FaPlus style={{alignSelf: "center", fontSize: "20px"}} />}
                            </span>}
                        </li>
                        {displayChildren[items.label] &&
                            <SubMenu subMenuItems={items.children} handleMenu={{ handleMenuOpenAndClose, displayChildren }} />}
                    </ul>
                }) : <h2>No UI components to load</h2>
            }
        </div>)
}

export default MainMenu