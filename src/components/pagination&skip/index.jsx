import React, { useEffect, useState } from "react";
import "./index.css"

const Pagination = () => {

    const [limit, setLimit] = useState(10);
    const [skip, setSkip] = useState(0);
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [productsExhausted, setProductsExhausted] = useState(false)

    const fetchProducts = async (productAPI) => {
        try {
            setLoading(true)
            const response = await fetch(productAPI)
            const data = await response.json()

            if (data) {
                setProductData(data.products)
                setLoading(false)
            }
        }
        catch (err) {
            setErrorMsg("Error loading Product data.... try again")
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    }, [skip])

    const handleSkipIncrement = () => {
        setSkip(prevSkip => prevSkip + 10)

        const checkIfExhausted = productData.find(product => product.id === 100)
        if (checkIfExhausted) {
            setProductsExhausted(true)
        }

    }

    const reloadProducts = () => {
        setSkip(0)
    }


    if (loading) {
        return <div>
            Loading produts.......
        </div>
    }

    if (errorMsg) {
        return <div>{errorMsg}</div>
    }
    return <div className="paged-Products">
        {
            productData ?
                <div className="products-section">
                    <h1 className="welcome">Welcome to ShOp DiReCt</h1>
                    <div className="all-products">
                        {
                            productData && productData.map((product) => {
                                return (
                                    <div key={product.id} className="single-product">

                                        <h2 className="product-title">{product.title}</h2>
                                        <img className="product-image" src={product.images[0]} alt={product.brand + "-" + product.category} />
                                        <div className="sub-desc">
                                            <p><span className="sub-details">Product description</span>: {product.description}</p>
                                            <p><span className="sub-details">Brand:</span> {product.brand}</p>
                                            <p><span className="sub-details">Price:</span> £{product.price}</p>
                                        </div>
                                    </div>)
                            })
                        }
                    </div>
                    {productData.find(product => product.id === 100) && <p>No more products to load.... Check other products</p>}
                    {productData.find(product => product.id === 100) ?
                        <div className={"load-more_button reload-products"} >
                            < button onClick={reloadProducts} > Reload Products</button>
                        </div> :
                        <div className={"load-more_button"} >
                            < button onClick={handleSkipIncrement} > Load more products</button>
                        </div>
                    }
                </div>
                : <div className="products-section product-error"> No product available</div>
        }

    </div >
}

export default Pagination