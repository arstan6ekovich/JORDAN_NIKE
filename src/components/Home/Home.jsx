import React from "react";
import home from "../../components/images/home.png";
import kross from "../../components/images/SHoes in different color.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { product } = useSelector((s) => s.main);
  const nav = useNavigate();
  return (
    <div
      id="Home"
      style={{
        background: `url("${home}") no-repeat center/cover`,
        minHeight: "70vh",
      }}
    >
      <div className="container">
        <div className=" absolute mt-[500px] ">
          <div className="Home text-white flex">
            <div className=" ml-[-70px]">
              <h1 className=" ml-[100px]">CHOOSE COLOR : </h1>
              <img src={kross} alt="" />
            </div>
            <div className=" flex gap-[50px]">
              <button onClick={() => nav("/product")} className="btn">
                ADD TO CART
              </button>
              {product.length ? <h1 className=" absolute ml-[500px] mt-[20px] bg-red-800">{product.length}</h1> : null}
              <button onClick={() => nav("/productCard")} className="btn1">
                BUY NOW
              </button>
            </div>
            <div className="description">
              <h1>INSPIRATION</h1>
              <p>
                Inspired by the design of the latest Air Jordan game shoe,
                <br /> the Jordan Jumpman 2021 helps up-and-coming players{" "}
                <br /> level up their game.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
