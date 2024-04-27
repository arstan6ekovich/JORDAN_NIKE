import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Details = () => {
  const { redID } = useParams();
  const { product } = useSelector((s) => s.main);
  let findDetails = product.find((el) => el.id === +redID);
  
  return (
    <div id="Details">
      <div className="container">
        <div className="Details"></div>
          <img
            style={{
              width: "700px",
            }}
            src={findDetails?.url}
            alt=""
          />
        <h1
          style={{
            color: "black",
            marginLeft: "700px",
            marginTop: "-500px",
            fontSize: "50px",
            width: "500px",
          }}
        >
          {findDetails?.title}
        </h1>
        <h2
          style={{
            fontSize: "40px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginLeft: "700px",
          }}
        >
          {findDetails?.price} <ion-icon name="pricetags-outline"></ion-icon>
        </h2>
        <button>{findDetails?.catygory}</button>
      </div>
    </div>
  );
};

export default Details;
