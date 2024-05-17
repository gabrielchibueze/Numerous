import { Children, React, useRef } from "react";
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
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import "./App.css"
import TestingSearchBar from "./components/search-bar/testing-search-bar.jsx";
import TestingTicTacToe from "./components/tic-tac-toe/testing-tic-tac-toe.jsx";
import GloabalFlags from "./components/show-hide-components/context-template/context.jsx";
import TestingFeatureFlags from "./components/show-hide-components/testing.jsx";
import ScrollTO from "./components/scroll-to-section/scroll-to.jsx";
import WeatherAPI from "./components/weather-API/weather-api.jsx";

const App = () => {

  const bottomRef = useRef(null)
  const CRef = useRef()

  function scrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" })
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="app-section">
      <button className="scroll-to bottom" onClick={scrollToBottom} >Scroll to Bottom <FaArrowDownLong /></button>
      {/* <Accordion />
      <RandomColor />
      <StarRating numOfStars={5} />
      <SlidingImage url={"https://picsum.photos/v2/list?"} limit={10} />
      <Pagination />
      <TreeView mainMenu={menuData} />
      <QRCode />
      <LightModeDarkMode ref={CRef} />
      <ScrollBar url={"https://dummyjson.com/products?limit=100"} />
      <CustomTabs />
      <ModalTesting />
      <TestGitFinder />
      <TestingSearchBar url={"https://dummyjson.com/products?limit=100"} />
      <TestingTicTacToe /> */}

      {/* <GloabalFlags>
        <TestingFeatureFlags />
      </GloabalFlags> */}


      {/* <ScrollTO/> */}
      <WeatherAPI />

      <button className="scroll-to top" onClick={scrollToTop} ref={bottomRef}>Scroll to Top <FaArrowUpLong/></button>

    </div>)
}

export default App