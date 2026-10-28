import React from 'react'

const Card = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
          style={{
            height: '160px',
            objectFit: 'contain'
          }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {product.title}
          </h5>
          <p className="card-text">
            {product.description}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Rating:</strong>  {product.rating}
          </p>
          <p className="fw-bold">
            Price: ${product.price}
          </p>
          <button className="btn btn-primary">
            View Product
          </button>

        </div>
      </div>
    </div>
  )
}

export default Card