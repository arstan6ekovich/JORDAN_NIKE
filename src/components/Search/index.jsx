import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddToBasket } from "../../redux/BasketSlice";

const Search = () => {
  const { redName } = useParams();
  const { product } = useSelector((s) => s.main);
  let findSerach = product.find((el) => el.title === redName);

  const dispatch = useDispatch()
  return (
    <div id="Search">
      <div className="container">
        <img src={findSerach?.url} alt="" />
        <h1
          style={{
            color: "white",
            marginLeft: "700px",
            marginTop: "-400px",
            fontSize: "50px",
            width: "500px",
          }}
        >
          {findSerach?.title}
        </h1>
        <h2
          style={{
            fontSize: "40px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "white",
            marginLeft: "700px",
          }}
        >
          {findSerach?.price} <ion-icon name="pricetags-outline"></ion-icon>
        </h2>
        <button className=" text-white ml-[700px] mt-[30px]">
        category: {findSerach?.catygory}
        </button>
      </div>
      <button onClick={() => dispatch(AddToBasket(findSerach))} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 ml-[780px] mt-[50px]">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Add to Basket
        </span>
      </button>
    </div>
  );
};

export default Search;
