import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticlePage = () => {

  const [fromData, setFromData] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setFromData(response.data));
  }, [])

  return (
    <div className="container py-5">
      <div className="row gy-4">
        <div className="col-12">
          <h1 className="text-center text-green">ARTICOLI</h1>
        </div>
        {fromData.map(art => {
          const { category, id, description, image, price, title } = art
          return (
            <div className="col-12 col-md-4 col-lg-3" key={id}>
              <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="text-center m-3">
                    <Link to={`/articles/${id}`} className="btn btn-success">SHEDA ARTICOLO</Link>
                  </div>
                  <h5 className="card-title">{title}</h5>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default ArticlePage