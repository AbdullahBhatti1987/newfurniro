import { Avatar, Navbar, NavbarBrand } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
// import { IoFingerPrintSharp } from "react-icons/io5";
import { TbUserExclamation } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { CartSidebar } from "./CartSidebar";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState, useRef } from "react";
import { DropdownOption } from "./dropdownOption";
import { auth } from "../utils/userfirebase";
import { signOut } from "firebase/auth";
import { AddtoCartContext } from "../context/AddToCart";
import InputwithSearch from "./InputwithSearch";

export function Component() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("");

  const { user } = useContext(UserContext);
  const { addtoCart } = useContext(AddtoCartContext);
  
  const navigate = useNavigate();
  const logoutTimer = useRef(null);


  useEffect(() => {
    const startTimer = () => {
      logoutTimer.current = setTimeout(() => {
        HandleSignOut();
        navigate("/");
        
      }, 10000);
    };

    const resetTimeout = () => {
      if (logoutTimer.current) {
        clearTimeout(logoutTimer.current);
      }
      startTimer();
    };

    startTimer();

    window.addEventListener("mousemove", resetTimeout);
    window.addEventListener("keydown", resetTimeout);

    return () => {
      if (logoutTimer.current) {
        clearTimeout(logoutTimer.current);
      }
      window.removeEventListener("mousemove", resetTimeout);
      window.removeEventListener("keydown", resetTimeout);
    };
  }, []);

  const HandleSignOut = async () => {
    await signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        navigate("/");
      })
      .catch((error) => {
        console.log("An error happened.", error);
        alert("An error happened.", error);
      });
  };
  const value = searchItem;

  useEffect(() => {
    console.log("isLoading=>", isLoading);
    console.log(user);
    
    {
      searchItem && console.log("SearchItem=>", searchItem);
    }
    console.log("Total Carts", addtoCart);
  }, [isLoading]);

  return (
    <div className="w-full">
      <div className="lg:w-11/12 w-full mx-auto">
        <Navbar>
          <NavbarBrand>
            <img
              src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V-KgMF65bBpedJXfxnEh5Re44eKl0ptjo1vHE0H2caKlZSKxSiipCgF9xMEBLT8rrCzA4qLXt6vUNroksYtvS2SrZ4PFU1TG6OtrH5UjO~XMt8JFfNVgS~fQzJiRvpPn7hvXPyXfdgVMgVfyKtFgkwlDXg7B9QBgKybRWGg8BTCd5RlnYtNW57N4FcL3m9o64gdFFannJlge4WJFhm1UKBfZ3js-VcQb6DhAmaNCdg9XL8cr0cbT68Y6XV6g1S3IZcJUjmWtbQhteIxuhhMdTsAiglZLBo1WRY6tIoLAz3Sjq8xJxydvHnf76FX-HmucGkl6FgUjLxbUYIiwEPPCNw__"
              className="lg:h-16 h-16"
              alt="Flowbite React Logo"
            />

            <span className="self-center whitespace-nowrap text-2xl lg:text-3xl font-bold dark:text-white">
              Furniro
            </span>
          </NavbarBrand>
          <div className="flex md:order-2">
            <div className="flex lg:gap-8 md:gap-4 gap-2 justify-evenly items-center min-w-[25%] me-4">
              {user.isLogin ? (
                <DropdownOption
                  label={<Avatar img={user.picture} rounded />}
                  email={user.email}
                  displayName={user.displayName}
                  onClick={HandleSignOut}
                />
              ) : (
                <Link to="auth/login">
                  <TbUserExclamation className="text-lg lg:text-3xl" />
                </Link>
              )}

              <button onClick={() => setIsLoading(false)}>
                {isLoading && <IoIosSearch className="text-xl lg:text-3xl" />}
              </button>

              {!isLoading && (
                <InputwithSearch
                  className={
                    "absolute top-3 right-15 z-50 transition-all duration-300 ease-in-out bg-white"
                  }
                  value={searchItem}
                  onChange={(e) => {
                    setSearchItem(e.target.value);
                  }}
                  onClick={() => setIsLoading(true)}
                  onMouseOut={() => {
                    setSearchItem("");
                    setTimeout(() => {
                      setIsLoading(true);
                    }, 360000);
                  }}
                />
              )}

              <FaRegHeart className="text-xl lg:text-2xl" />

              <CartSidebar totalCart={user.isLogin ? addtoCart.length : 0} />
            </div>

            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="transition-all duration-300 ease-in-out">
            <Link
              to={"/"}
              className="text-center p-2 border rounded-lg lg:border-0 md:border-0 lg:hover:bg-transparent md:hover:bg-transparent lg:p-0 md:p-0 hover:bg-gray-200 md:text-lg lg:text-lg font-semibold cursor-pointer dark:text-white hover:text-gray-500 focus:text-black"
            >
              Home
            </Link>
            <Link
              to={"/shop"}
              className="text-center p-2 border rounded-lg lg:border-0 md:border-0 lg:hover:bg-transparent md:hover:bg-transparent lg:p-0 md:p-0 hover:bg-gray-200 md:text-lg lg:text-lg font-semibold cursor-pointer dark:text-white hover:text-gray-500 focus:text-black"
            >
              Shop
            </Link>
            <Link
              to={"/blog"}
              className="text-center p-2 border rounded-lg lg:border-0 md:border-0 lg:hover:bg-transparent md:hover:bg-transparent lg:p-0 md:p-0 hover:bg-gray-200 md:text-lg lg:text-lg font-semibold cursor-pointer dark:text-white hover:text-gray-500 focus:text-black"
            >
              Blog
            </Link>
            <Link
              to={"/about"}
              className="text-center p-2 border rounded-lg lg:border-0 md:border-0 lg:hover:bg-transparent md:hover:bg-transparent lg:p-0 md:p-0 hover:bg-gray-200 md:text-lg lg:text-lg font-semibold cursor-pointer dark:text-white hover:text-gray-500 focus:text-black"
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className="text-center p-2 border rounded-lg lg:border-0 md:border-0 lg:hover:bg-transparent md:hover:bg-transparent lg:p-0 md:p-0 hover:bg-gray-200 md:text-lg lg:text-lg font-semibold cursor-pointer dark:text-white hover:text-gray-500 focus:text-black"
            >
              Contact
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
