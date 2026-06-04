import React from 'react'

function ProductDetails({ heading, para, discountPrice }) {

    return (
        <div className='bg-gray-200/70 border-2 inline-block p-6'>
            <h1 className='m-1'>{discountPrice ? <del>{heading}</del> : heading}</h1>
            <h2>{para}</h2>
            <h2>{discountPrice}</h2>
            <button className='bg-black/50 p-2 rounded-2xl'>Add to Cart</button>

        </div>
    )
}

export default ProductDetails