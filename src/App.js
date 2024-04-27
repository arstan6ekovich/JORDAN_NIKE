import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Product from "./components/Product";
import ProductCard from "./components/ProductCard";
import Details from "./components/Details";
import Search from "./components/Search";
import Man from "./components/Man";
import Basket from "./components/Basket";
import Woman from "./components/woman";
import ProductCards from "./components/ProductCard/ProductCard";
import Sale from "./components/Sale";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/productCards" element={<ProductCards />} />
        <Route path="/details/:redID" element={<Details />} />
        <Route path="/search/:redName" element={<Search />} />
        <Route path="/man" element={<Man />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </div>
  );
}

export default App;
