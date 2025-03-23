import React from 'react'

function Cardanimal({ product }) {
  return (
    <div>

       
          <div className="food-card">
            <img src={product?.img} alt={product?.titel} />
            <div className="food-sec">
              <h4 className="food-title">{product?.titel}</h4>
              <p className="food-desc">{product?.description}</p>
              <p className="food-desc">{product?.age}</p>
            </div>
          </div>

      </div>
  )
}

export default Cardanimal