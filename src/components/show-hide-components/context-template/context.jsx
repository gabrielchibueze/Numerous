import React, { createContext, useEffect, useState } from "react";
import SendFeautureData from "../components";
export const FutureFlagsContext = createContext()

export default function GloabalFlags({children}) {
    const [loading, setLoading] = useState(false)
    const [flaggedData, setFlaggedData] = useState([])

    async function fetchProposedFutureFlags() {
        try {
            setLoading(true);
            const response = await SendFeautureData()
            console.log(response)
            if (response) setFlaggedData(response)
            setLoading(false)

        } catch (err) {
            console.log(err)
            setLoading(false)
            throw new Error()
        }
    }

    useEffect(() => {
        fetchProposedFutureFlags()
    }, [])

    return <div>
        <FutureFlagsContext.Provider value={{ flaggedData }}>
            {children}
        </FutureFlagsContext.Provider>
    </div>
}