import axios from "axios"
import { useState } from "react";

const ArticlePage = () => {

  const [fromData, setFromData] = useState([])

  axios.get('https://fakestoreapi.com/products')
    .then(response => setFromData(response.data));

  return (
    <div className="container py-5">
      <div className="row gy-4">

        {fromData.map(art => {
          const { category, id, description, image, price, title } = art

          return (
            <div className="col-12 col-md-4 col-lg-3" key={id}>
              <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{category}</li>
                  <li className="list-group-item">{price}</li>
                </ul>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default ArticlePage