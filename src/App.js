import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/Home";
import AddArticle from "../src/pages/addArticle/AddArticle";
import Article from "./components/article/Article";
import EditArticle from "../src/pages/editArticle/EditArticle";
import Articles from "./pages/article/Article";
import Courses from "./pages/course/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/edit-article/:articleId" element={<EditArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
