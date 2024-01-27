import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
 
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import Applayout from "./pages/Applayout";
import Blog from "./pages/Blog";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to="homepage" />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="about" element={<About/>} />
            <Route path="services" element={<Services/>} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
