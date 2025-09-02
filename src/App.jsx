import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import QuizzesPage from "./pages/QuizzesPage";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
        </Routes>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
