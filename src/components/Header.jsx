import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <div>
              <h2>BoolArticles</h2>
            </div>
            <div>
              <ul className="list-unstyled d-flex">
                <li className="me-3">
                  <NavLink to="/"><strong>HOME</strong></NavLink>
                </li>
                <li className="me-3">
                  <NavLink to="/about"><strong>CHI SIAMO</strong></NavLink>
                </li>
                <li className="me-3">
                  <NavLink to="/articles"><strong>ARTICOLI</strong></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
