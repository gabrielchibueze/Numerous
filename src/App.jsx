import {React} from "react";
import Accordion from "./components/accordion/accordion"
import RandomColor from "./components/random-color-generator/randomColor";
import StarRating from "./components/star-rating/star-rating";
import SlidingImage from "./components/sliding-image/sliding-image";
import Pagination from "./components/pagination&skip/index.jsx";
import TreeView from "./components/tree-view-components/treeView.jsx";
import menuData from "./components/tree-view-components/index.js"
import QRCode from "./components/generate-QR-code/qrCode.jsx";
import LightModeDarkMode from "./components/light-dark-mode/lightDarkMode.jsx";
import ScrollBar from "./components/scroll-bar-percentage/scroll-bar.jsx";
import CustomTabs from "./components/Custom-tabs/custom-tab.jsx";
import ModalTesting from "./components/modal-popup/modalTesting.jsx";
import TestGitFinder from "./components/github-profile-finder/testGitFinder.jsx";
import "./App.css"

const App = ()=>{
  return (
  <div className="app-section">
    {/* <Accordion />
    <RandomColor />
    <StarRating numOfStars={5} />
    <SlidingImage url={"https://picsum.photos/v2/list?"} limit={10} />
    <Pagination />
    <TreeView mainMenu={menuData} />
    <QRCode />
    <LightModeDarkMode />
    <ScrollBar url={"https://dummyjson.com/products?limit=100"} />
    <CustomTabs />
    <ModalTesting /> */}
    <TestGitFinder />

  </div>)
}

export default App