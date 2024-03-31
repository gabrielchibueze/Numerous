import React, { useState } from "react";

import contentTabs from "./tabs"

import "./custom-tab.css"

export default function CustomTabs() {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    
    function handleActivateTab (thisIndex){
        setCurrentTabIndex(thisIndex)
    }

    console.log(currentTabIndex)
    return (<div className="custom-tabs">
        <div className="custom-heading">
            <h1>Custom Tab SniPpet</h1>
        </div>
        <div className=" all-tabs">
            {contentTabs && contentTabs.length > 0 && contentTabs.map((tab, index) =>{
                return (
                    <div key={index} className={`${currentTabIndex === index ? "active" : "main-tabs" }`} onClick={()=>handleActivateTab(index)}>
                        <h2>{tab.name}</h2>
                    </div>

                )
            })}
        </div>
        {contentTabs && contentTabs.map((tab, index) =>{
            return (
                <div className={`${currentTabIndex === index ?  "current-content" : "current-content all-content" } `}>
                    {tab.content.map(content =>{
                        return <div className="displayed-content">
                            <h2>{content.heading1.title}</h2>
                            <p>{content.heading1.details}</p>
                            <h2>{content.heading2.title}</h2>
                            <p>{content.heading2.details}</p>
                            <h2>{content.heading3.title}</h2>
                            <p>{content.heading3.details}</p>
                        </div>
                    })}
                </div>
            )
        })}
    </div>)
}