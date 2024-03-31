import React, { useState } from "react";
import { FaStar } from "react-icons/fa"
import "./star-rating.css"

const StarRating = ({ numOfStars }) => {
    const [ratingIndex, setRating] = useState(0)
    const [hoverIndex, setHoveredIndex] = useState(0)
    function clickedStarRating(indexNumber) {
        setRating(indexNumber)
    }
    function onMouseEnterSelect(indexNumber) {
        setHoveredIndex(indexNumber)

    }
    function onMouseLeaveSelect(indexNumber) {
        setHoveredIndex(ratingIndex)
    }

    return (
        <div className="star-ratings">
            <div className="star-rating-main">
                {[...Array(numOfStars)].map((xx, index) => {
                    index += 1
                    return (
                        <FaStar
                            key={index}
                            className={index <= hoverIndex || index <= ratingIndex ? "active" : "inactive"}
                            onClick={() => clickedStarRating(index)}
                            onMouseEnter={() => onMouseEnterSelect(index)}
                            onMouseLeave={() => onMouseLeaveSelect(index)}
                            size={40}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default StarRating