import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ArticlePage from "./pages/ArticlePage"
import DetailArticle from "./pages/DetailArticle"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles">
            <Route index element={<ArticlePage />} />
            <Route path=":id" element={<DetailArticle />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
