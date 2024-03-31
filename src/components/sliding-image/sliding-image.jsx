import React, { useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import { FaRegCircle } from "react-icons/fa";
import "./sliding-image.css"

const SlidingImage = ({ url, limit }) => {
    const [errorMsg, setErrorMsg] = useState(null);
    const [fetchedImages, setFetchedImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loading, setLoading] = useState(false);

    const fetchImage = async (imageUrl) => {
        try {
            setLoading(true)
            const response = await fetch(imageUrl)
            const imageData = await response.json()
            if (imageData) {
                setFetchedImages(imageData)
                setLoading(false)
            }
        }
        catch (err) {
            setErrorMsg("An error occured: ", err.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== "") fetchImage(`${url}limit=${limit}`)
    }, [url]);


    const handleLoadNext = () => {
        setCurrentIndex(prevIndex => prevIndex === fetchedImages.length - 1 ? 0 : prevIndex + 1)
    }
    const handleLoadPrevious = () => {
        setCurrentIndex(prevIndex => prevIndex === 0 ? fetchedImages.length - 1 : prevIndex - 1)

    }
    const handleLoadThisImage = (index) => {
        setCurrentIndex(index)
    }

    if (loading) {
        return <h4 className="sliding-images">Loading images.... please wait</h4>
    }
    if (errorMsg) {
        return <h1>An error Occured: {errorMsg}</h1>
    }

    return <div className="sliding-images">
        <div className="loaded-images">
            {fetchedImages && fetchedImages.length > 1 ? <MdArrowBackIos className="arrow-button arrow-left" onClick={handleLoadPrevious}/> : null}

            {fetchedImages && fetchedImages.length > 0 ? fetchedImages.map((data, index) => {
                return <img
                    key={data.id}
                    src={data.download_url}
                    alt={data.download_url}
                    className={index === currentIndex ? "current-image" : "current-image all-images"}
                />
            }) : <h2>No Images Fetched</h2>}

            {fetchedImages && fetchedImages.length > 1 ? <MdArrowForwardIos className="arrow-button arrow-right" onClick={handleLoadNext} /> : null }
            <div className="button-selection">
                {fetchedImages.length > 1 && fetchedImages.map((_, index) => {
                    return (
                        <button key={index}  onClick={() => handleLoadThisImage(index)} className={index === currentIndex ? "active-icon" : "icons"}></button>
                )})}
            </div>

        </div>


    </div>
}

export default SlidingImage