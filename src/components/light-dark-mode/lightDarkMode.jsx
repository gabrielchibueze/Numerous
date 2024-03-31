import React, { useState } from "react";

import "./index.css"
import useThemeHook from "./useLocalStorageHook";

const LightDarkMode = () => {
    // const [lightMode, setLightMode] = useState(true)
    const [theme, setTheme] = useThemeHook("theme", "dark")

    const handleToggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light")
        console.log(theme)
    }
    return <div className={`${theme ==="light" ? "light" : "dark"} central-mode`}>

        <div className="header-section">
            <h1>Use the togggle button to switch modes</h1>
            <div className="switch-button">
                {theme === "light" ?
                    <div className="general-buttons">Dark mode
                        <div className="toggle-button-dark" onClick={handleToggleTheme} >
                            <button className="dark-button" ></button>
                            <p>"."</p>
                        </div>
                    </div>
                    : <div className="general-buttons" > Light mode
                        <div className="toggle-button-light" onClick={handleToggleTheme}>
                            <p>"."</p>
                            <button className="light-button" ></button>

                        </div>
                    </div>
                }
            </div>
        </div>

        <div className="content-section">
            <h1>Your Contents go here</h1>
        </div>

    </div>
}

export default LightDarkMode