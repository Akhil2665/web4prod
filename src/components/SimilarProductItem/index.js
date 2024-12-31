// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const SimilarProduct = props => {
  const {productDetails} = props
  const {imageUrl, title, brand, price, rating, id} = productDetails
  return (
    <li className="product-item">
      <Link to={`/products/${id}`} className="product-link">
        <img
          src={imageUrl}
          alt={`similar product ${title}`}
          className="thumbnail"
        />

        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>

            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default SimilarProduct
