import React, { useEffect, useState } from "react";
import "./scroll-bar.css";


export default function ScrollBar({ url }) {
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null)
    const [currentWidthPercent, setCurrentWidthPercent] = useState(0)

    async function fetchProductData(productApi) {
        try {
            setLoading(true)
            const response = await fetch(productApi);
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setProductData(data.products)
            }
            setLoading(false)
        }
        catch (err) {
            setErrorMsg("An error occured while fetching product data", err)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProductData(url)
    }, [url])

    function handleScroll() {
        const clientHeight = document.documentElement.clientHeight
        const currentScrollHeight = document.body.scrollTop || document.documentElement.scrollTop
        const totalScrollheight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        setCurrentWidthPercent(((currentScrollHeight) / totalScrollheight) * 100)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", () => { })
        }
    }, [])

    if (loading) {
        return <div>Loading data.... please wait</div>
    }
    if (errorMsg) {
        return <div>Error Loading product data.... try again letter</div>
    }

    return <div className="scroll-bar-main-container">
        <div className="scroll-bar-display-container">
            <h1>Scroll Bar Percentage Display</h1>

            <div className="scroll-width">
                <div  className="current-percentage-width" style={{ width: `${currentWidthPercent}%` }}>
                    <p>{currentWidthPercent.toFixed()}%</p>
                </div>
            </div>
        </div>

        <div className="content-dispaly-contianer">
            {productData && productData.length > 0 ?
                productData.map((products, index) => {
                    return <p key={index}>{products.title}</p>
                }) : null}
        </div>
    </div>
}