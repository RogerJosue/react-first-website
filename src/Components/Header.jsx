import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="" className="w-full bg-amber-200 flex justify-end items-center">
        <div className="w-3/12  h-[45px] flex justify-center items-center">
          <Link to="/home">
            <button>
              <p>Home</p>
            </button>
          </Link>
        </div>

        <div className=" w-3/12 h-[45px] flex justify-center items-center">
          <Link to="/characters">
            <button>
              <p>Characters</p>
            </button>
          </Link>
        </div>

        <div className="w-3/12 h-[45px] flex justify-center items-center">
          <Link to="/comments">
            <button>
              <p>Comments</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
