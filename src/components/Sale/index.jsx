import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProductSale } from "../../redux/ProductSlice";
import ProductCards from "../ProductCard/ProductCard";

const Sale = () => {
  const { sale } = useSelector((s) => s.main);
  console.log(sale);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AddProductSale());
  }, []);

  return (
    <div>
      <div className="container">
        <div className="">
          {sale.map((el, idx) => (
            <ProductCards el={el} saleIcon={true} key={idx}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
