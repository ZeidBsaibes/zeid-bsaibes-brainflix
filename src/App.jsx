import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import MainPage from "./pages/MainPage/MainPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import monster from "./scripts/utils/monster";

console.log("Hello Dom!", monster);

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/videos/:videoId" element={<MainPage />}></Route>
          <Route path="/upload" element={<UploadPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
