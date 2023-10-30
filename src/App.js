import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Country from "./Country.js";
import Japanese from "./CuisinePosts/Japanese";
import Indian from "./CuisinePosts/Indian";
import Italian from "./CuisinePosts/Italian";
import Chinese from "./CuisinePosts/Chinese";
import Mexican from "./CuisinePosts/Mexican";
import American from "./CuisinePosts/American";
import Spanish from "./CuisinePosts/Spanish";
import Contact from "./Contact";
import Search from "./Search/Search";
import Logo from "./Logo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Logo />} />
          {/* <Route path="/" element={< />} /> */}

          <Route path="/MainPage/Country" element={<Country />} />
          <Route path="/MainPage/Country/Indian" element={<Indian />} />
          <Route path="/MainPage/Country/Chinese" element={<Chinese />} />
          <Route path="/MainPage/Country/Japanese" element={<Japanese />} />
          <Route path="/MainPage/Country/Italian" element={<Italian />} />
          <Route path="/MainPage/Country/Mexican" element={<Mexican />} />
          <Route path="/MainPage/Country/American" element={<American />} />
          <Route path="/MainPage/Country/Spanish" element={<Spanish />} />
          <Route path="/MainPage/Contact" element={<Contact />} />
          <Route path="/MainPage" element={<MainPage />} />

          <Route path="/MainPage/search" Component={Search} />

          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
