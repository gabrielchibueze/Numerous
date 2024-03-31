import React from "react";
import MainMenu from "./mainMenu.jsx"
import { FaMinus, FaPlus } from "react-icons/fa6"



const SubMenu = ({ subMenuItems, handleMenu }) => {
    return (
        <div>
            <div className="main-menu">

                {subMenuItems && subMenuItems.length && subMenuItems.map(subItems => {
                    return (
                        <ul className="sub-menu" key={subItems.label}>
                            <li>{subItems.label} {subItems.children
                                && subItems.children.length &&
                                <span onClick={() => handleMenu.handleMenuOpenAndClose(subItems.label)}>
                                    {handleMenu.displayChildren[subItems.label] ?
                                       <FaMinus style={{alignSelf: "center", fontSize: "20px"}} />
                                       : <FaPlus style={{alignSelf: "center", fontSize: "20px"}} />}
                                </span>}
                            </li>
                            {handleMenu.displayChildren[subItems.label] &&
                                <div>{subItems.children &&
                                    subItems.children.length &&
                                    <MainMenu mainMenu={subItems.children} />}
                                </div>
                            }
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default SubMenu