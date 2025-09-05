import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ArticlePage from "./pages/ArticlePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/about" Component={AboutPage}></Route>
          <Route path="/articles" Component={ArticlePage}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
