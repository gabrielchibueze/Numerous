import React from "react";
import GitProfileFinder from "./gitProfileFinder";
import { FaGithub } from "react-icons/fa"


const TestGitFinder = () => {
    return <div className="general-section">
        <div className="testing-main">
            <FaGithub className="github-icon" />
            <div className="testing-heading">
                <h1>GitHub Profiler</h1>
                <p>....... Quickly find a github account</p>

            </div>
        </div>
        <GitProfileFinder />
    </div>

}

export default TestGitFinder