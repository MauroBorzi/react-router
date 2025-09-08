import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const DetailArticle = () => {

  const { id } = useParams()
  const [article, setArticle] = useState({})

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/:${id}`).then(res =>
      setArticle(res.data))
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{article.title}</h1>
        </div>
      </div>
    </div>
  )
}

export default DetailArticle
