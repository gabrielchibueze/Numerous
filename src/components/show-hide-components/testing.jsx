import React, { useContext } from "react";
import GloabalFlags, { FutureFlagsContext } from "./context-template/context";
import ModalTesting from "../modal-popup/modalTesting";
import GenerateQRCode from "../generate-QR-code/qrCode";
import TestingTicTacToe from "../tic-tac-toe/testing-tic-tac-toe";
import TreeView from "../tree-view-components/treeView";
import menuData from "../tree-view-components";
import CustomTabs from "../Custom-tabs/custom-tab";
import LightDarkMode from "../light-dark-mode/lightDarkMode";
import "./featured-flag.css"

export default function testingFeatureFlags() {
    const { flaggedData } = useContext(FutureFlagsContext)
    console.log(flaggedData)

    const flagComponents = [
        {
            key: "showLightDarkMode",
            component: <LightDarkMode />
        },
        {
            key: "showModalPopup",
            component: <ModalTesting />
        },
        {
            key: "showGenerateQRCode",
            component: <GenerateQRCode />
        },
        {
            key: "showTicTacToe",
            component: <TestingTicTacToe />
        },
        {
            key: "showTreeViewComponent",
            component: <TreeView mainMenu={menuData} />
        },
        {
            key: "showCustomTabs",
            component: <CustomTabs />
        },

    ]

    return <div className="featured-flags">
        <h1>Featured Flags</h1>
        <div>
            {
                flagComponents.length > 0 && flaggedData ?
                    flagComponents.map((flag, index) => flaggedData[flag.key] && <div key={index}>{flag.component}</div>)
                    : <div>
                        No Featured Flags
                    </div>
            }
        </div>
    </div>
}