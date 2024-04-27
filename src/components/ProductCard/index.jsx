import React from "react";
import ProductCards from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { AddProductSort } from "../../redux/ProductSlice";
import { FaSort } from "react-icons/fa";

const ProductCard = () => {
  const { product } = useSelector((s) => s.main);
  const dispatch = useDispatch()

  return (
    <div>
      <div className=" ml-[120px] absolute mt-[0px]">
        <select onChange={(e) => dispatch(AddProductSort(e.target.value))}>
          <option className="" value="">
            <FaSort/>
          </option>
          <option value="expenses">EXPENSES</option>
          <option value="expen">EXPEN</option>
        </select>
      </div>
      <div className="flex justify-center flex-wrap gap-[50px]">
        {product.map((el, idx) => (
          <ProductCards el={el} key={idx}/>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
