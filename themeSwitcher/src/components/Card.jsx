import React from 'react'

const Card = () => {
  return (
    <div className="card dark:bg-base-300 bg-white dark:text-white text-gray-700 w-96 shadow-xl">
        <figure className="px-10 pt-10">
            <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
            <button className="btn dark:bg-purple-700 bg-gray-700 text-white">Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Card