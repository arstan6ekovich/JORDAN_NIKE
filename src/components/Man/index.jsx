import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProductCaty } from "../../redux/ProductSlice";

const Man = () => {
  const { catygory } = useSelector((s) => s.main);
  const dispatch = useDispatch();
  console.log(catygory);

  useEffect(() => {
    dispatch(AddProductCaty());
  }, []);
  return (
    <div>
      <div className="container">
        <div className="Man flex justify-center gap-[30px]">
          {catygory.map((el) => (
            <div>
              <a
                href="#"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={el.url}
                  alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {el.title}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {el.catygory}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Man;
