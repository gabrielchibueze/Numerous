import React, { useEffect, useState } from "react";
import "./gitProfileFinder.css"

export default function GitProfileFinder() {
    const [username, setUsername] = useState("gabrielchibueze")
    const [userData, setUserData] = useState([])
    const [createdAt, setCreatedAt] = useState("")
    const [isUser, setIsUser] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchGithubUser() {
        try {
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${username}`)
            const user = await response.json();

            if (user) {
                setUserData(user)
                setIsUser(true)
                setLoading(false)
            }

        } catch (err) {
            setLoading(false)
            setIsUser(false)
            setErrorMsg("An erro occured getting user:", err)
        }
    }
    console.log(username)

    console.log(userData)

    async function handleUserInput(event) {
        const userInput = event.target.value
        setUsername(userInput)
    }

    useEffect(() => {
        setCreatedAt(new Date(userData.created_at))
    }, [userData])

    return <div className="git-finder_main-section">

        <div className="git-finder-search-section">
            <input type="text" name="username" onChange={(event) => handleUserInput(event)} value={username} placeholder="Enter Github username" />
            <button onClick={fetchGithubUser}>Search</button>
        </div>

        {
            isUser ?

                <div>
                    {loading ?
                        <h2>Searching.... please wait</h2> :
                        <div className="git-user-profile">
                            {userData.login ?
                                <div className="profiler">
                                    <img src={userData.avatar_url} />
                                    <p className="span-login"> Username:
                                        <span>
                                            <a href={`https://github.com/${username}`} target="_blank">{userData.login}
                                            </a>
                                        </span>
                                    </p>
                                    <p>Pupblic Repositories: <span>{userData.public_repos}</span></p>
                                    <p>Followers: <span>{userData.followers}</span></p>
                                    <p>Following: <span>{userData.following}</span></p>
                                    <p>Joined: <span> {createdAt.getDate() + " " + createdAt.toLocaleString('en-us', { month: "short" }) + " " + createdAt.getFullYear()}</span></p>
                                </div> :
                                <div className="no-user_found">No such user ! Enter a valid GitHub username </div>}

                        </div>
                    }
                </div>
                :
                <div className="empty-search">
                    <h2>Search a user on GitHub</h2>
                </div>
        }

    </div >
}