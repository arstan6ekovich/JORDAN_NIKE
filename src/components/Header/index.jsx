import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import jordan from "../../components/images/Frame 1.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { basket } = useSelector((s) => s.basket);
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  return (
    <div id="Header">
      <div className="container">
        <div className="Header flex align-center justify-center py-[30px] gap-[200px]">
          <div className=" flex gap-[20px]">
            <img alt="img" src={jordan} />
            <img
              className=" w-[100px]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAclBMVEUAAAD///94eHjp6enHx8f29vaZmZlnZ2f09PSUlJTR0dG7u7vw8PDt7e1HR0dWVlahoaHc3Nzh4eFQUFCHh4cqKio2NjZCQkKvr68fHx+pqaldXV28vLx0dHQZGRkeHh6AgICMjIwODg44ODhra2snJyemI6sGAAADxElEQVR4nO3biXqqMBCG4QZwxQV3a7XFau//Fo+16AESNoUk+HzvBTDDSMNPoG9vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxkxNN1DSeqOt1FZbpWc4flffb+eH2ko96mPndoJvffW6Y321HjHpDoWY9XSWdITWctWsll5HCLFda636IeZa61Xg7MeXeQg31Fx3I8RBc8lSeltXXHkL3aU/hejrrlloGsz+5iH6waf+8peLs6u/ao7NYChuZkau4N/f491EYaVoQY34+vJZnH8pPTRSWfJ18Ef/5yHGA0N9DH6rh4aKx90X1MjQWDr4uNY3Vf1mcV9QbzSHkbj1309irP5bckGNuEuTDV3zkLm7ziqML6jCVBhJiH4hM00c/LE0D9EJDN8CB1Ej+iv3dnN5Hpcw4uhvJWkRdaL5WUdeUCOGwkjC7U/Z01fydJQW1IixMJLg3drZ6an3Ge77GQMxGEYSwntDOm47Z9/NmscljKw0dFDC+/+Wmk4DH+oFNTI3GkYSYutc2GCZ655hDs+itwVhrK9jQzXWR0UiizMeRhK+460FDRT4yVlQI+bDSJIXb86v+eDf523OgnorakEYSVgk2pvVeehpViKLGw00vqYpKXUfqOuwRQtqZHiuq2CNDqkm6whMp6WnHIDEljCSkn4efTbcvzuJPcMcZndGcjhSq19PHK3MgnqbvUVhJEU+h0fvPKUW1EjHxGuasnqKhh/YVZrIe4Y5bAsjKapTqfgeMPkSppg/aeZU6vKj/h3LH8BR7Rnm6FuxM5Jrp+683FB627xHXBVLdkbyZd013aLckLlnmMPga5oKFtknkHONnwbDSgvI35RtDSNpGX86V52u6nY5OXpFj7gqFoeRtIKANd8d7g+sX5Nz16+6fkTTtTmMpKnvOtIpjcePXBo3loeRNDnX125veRiRbBseyMj+MCKpksera0UYkTyzTBRpRxiRNTaQ1oQRSbnbTnUtCiOSSRMD6QTP7EkZl5PsHzVvVxiR1X6dtC6MyFa1DqSNYUShxom0M4wo1JZP2hpGFEq+mCrQ3jCiMig+4UJtDiMq62cH0tnZ9M1IParvqca1PowonZ+YyN62b0bq8thm4iWM2PW/YLXaPDQRK78ZqU+3+kReKIxkqJhR3Ka+i7RKlXvP/sXCSKayu7IWfePcvLy3gfe/meDlV5GkRdH7wOBkukUDwsypdLzlj+nuTJn68s6Buz++algta+Xs9jN3PBq786EfOO3fSAQAAAAAAAAAAAAAAAAAAAAAAAAAAMDr+AcFHSZIJLIKigAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
          <div className="box flex align-center gap-[50px]  mt-[20px]">
            <Link to={"/"}>HOME</Link>
            <Link to={"/man"}>MAN</Link>
            <Link to={"/woman"}>WOMAN</Link>
            <Link to={"/kids"}>KIDS</Link>
            <Link to={"/sale"}>SALE</Link>
          </div>
          <div className="buttons">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              className="inputm w-[100px] text-black"
              type="text"
            />
            <button onClick={() => nav(`/search/${inputValue}`)}>
              <FaSearch />
            </button>
            {basket.length ? <h1 className="quwantity">{basket.length}</h1> : null}
            <Link to={"/basket"}>
              <button>
                <FaShoppingCart />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
