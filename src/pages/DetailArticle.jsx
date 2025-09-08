import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const DetailArticle = () => {

  const { id } = useParams()
  const [article, setArticle] = useState({})

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res =>
      setArticle(res.data))
  }, [])

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12" key={article.id}>
          <div className="card h-100">
            <img src={article.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{article.category}</li>
              <li className="list-group-item">{article.price + "€"}</li>
              <li className="list-group-item text-center m-3"><Link to={`/articles`} className="btn btn-success">TORNA ALLA PAGINA ARTICOLI</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailArticle
