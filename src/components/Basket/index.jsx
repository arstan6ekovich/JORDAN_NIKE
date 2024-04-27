import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBasketDel } from "../../redux/BasketSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loading from "../../components/images/loading.svg";

const Basket = () => {
  const { basket } = useSelector((s) => s.basket);
  const [modalWindow, setModalWindow] = useState(false);
  const dispatch = useDispatch();
  const [valueText, setValueText] = useState("");
  const [valuePhone, setValuePhone] = useState("");

  let all = basket.reduce((acc, el) => {
    return (acc += +el.price);
  }, 0);

  const getError = () => {
    toast.error("🦄 Заполните полный!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };


  function submitTelegram() {
    if ((valueText.trim() === "", valuePhone.trim() === "")) {
      getError();
    } else {
      setTimeout(() => {
        toast.success("🦄 Успешно заказ отправлено!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, 2000);
      let my_id = `-1002146072801`;
      let token = `7010674986:AAHDT4AFpL0zHzQx4P__ijHjyJSDL4fDqJ0`;
      let my_api = `https://api.telegram.org/bot${token}/sendMessage`;

      let userDate = {
        chat_id: my_id,
        parse_model: "html",
        text: `Заказ: \n name: ${valueText} \n phone: ${valuePhone}`,
      };
      setValuePhone("");
      setValueText("");
      axios.post(my_api, userDate);
    }
  }

  function addToModal() {
    setModalWindow(false)
  }

  return (
    <div id="Basket">
      <div
        style={{
          width: all ? `${(all / 100) * 3}px` : "10px",
          height: "5px",
          borderRadius: "5px",
          background: "yellowgreen",
          overflow: "hidden",
          transition: ".5s",
          marginLeft: "50px",
          position: "absolute",
          marginTop: "100px",
        }}
      ></div>
      <div className="basket">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product URL
                </th>
                <th scope="col" class="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Product Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Product Price
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            {basket.map((el) => (
              <tbody>
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img src={el.url} alt="" />
                  </th>
                  <td class="px-6 py-4">{el.title}</td>
                  <td class="px-6 py-4">{el.catygory}</td>
                  <td class="px-6 py-4">{el.price} $</td>
                  <td class="px-6 py-4 text-right">
                    <a
                      onClick={() => dispatch(AddBasketDel(el.id))}
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <h1 className="root text-white ml-[50px] text-[30px]">
          Total price: {all} <ion-icon name="pricetags-outline"></ion-icon>
        </h1>
      </div>
      <div className=" w-[500px] flex justify-center flex-col mx-auto gap-[30px]">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            onChange={(e) => setValueText(e.target.value)}
            value={valueText}
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            onChange={(e) => setValuePhone(e.target.value)}
            value={valuePhone}
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <ToastContainer />
      </div>
      <div className="modal-window">
        <div
          className="modal-content"
          style={{
            display: modalWindow ? "flex" : "none",
          }}
        >
          <button onClick={() => setModalWindow(false)} className="text-btn">
            <ion-icon name="close-circle-outline"></ion-icon>
          </button>
          <h1 className="text-h1">Проверьте ваши даные</h1>
          <h2 className="text-h2">
            {valueText}, {valuePhone}
          </h2>
          <button onClick={() => (submitTelegram(), addToModal())} className="button">
            Add To Telegram
          </button>
        </div>
      </div>
      <button
        onClick={() => (setModalWindow(true))}
        class=" inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 ml-[650px] my-[20px]"
      >
        <span class=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Submit
        </span>
      </button>
    </div>
  );
};

export default Basket;
