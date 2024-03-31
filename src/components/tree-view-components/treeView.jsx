import MainMenus from "./mainMenu"


const TreeView = ({ mainMenu }) => {
    return (
        <div className="menu-preview">
            <div className="main-main">
                <MainMenus mainMenu={mainMenu} />
            </div>
            <div className="preview-section">
                <h2>Click on the Menu "+" to view menu options </h2>
            </div>
        </div>
    )
}

export default TreeView