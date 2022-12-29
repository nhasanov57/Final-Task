import { useState } from "react";
import logo from "../img/logo.png";
import avatar from "../img/avatar.jpg";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/stateProvider";
import { actionType } from "../context/reducer";

function Header() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  const [menu, setMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(auth, provider);

      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setMenu(!menu);
    }
  };
  const logout = () => {
    setMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <header className="fixed z-50 w-screen px-4 py-3 bg-red-200 md:py-6 md:px-16">
      {/* desktop and tablet */}
      <div className="hidden  md:flex w-full h-full">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="w-12 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Food Mood</p>
        </Link>

        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer ">
            Home
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer ">
            Menu
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer ">
            About
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer ">
            Services
          </li>
        </ul>

        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className=" text-textColor text-2xl ml-8 cursor-pointer" />
          <div className="absolute top-0 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">3</p>
          </div>
        </div>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            className="rounded-full w-10 min-w-[40px] h-10 min-h-[40px] ml-8 cursor-pointer"
            alt="user"
            onClick={login}
          />
          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="w-40  shadow-xl rounded-lg flex flex-col absolute  -right-10 top-12"
            >
              {user && user.email === "aydan2903@gmail.com" && (
                <Link to={"/createItem"}>
                  {" "}
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-300 ease-out text-textColor text-base">
                    New item <MdAdd />
                  </p>
                </Link>
              )}

              <p
                onClick={logout}
                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-300 ease-out text-textColor text-base"
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden items-center justify-between  flex w-full h-full ">
        <div className="relative ">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            className="rounded-full w-10 min-w-[40px] h-10 min-h-[40px] ml-8 cursor-pointer"
            alt="user"
            onClick={login}
          />
          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="w-40  shadow-xl rounded-lg flex flex-col absolute  -right-10 top-12"
            >
              {user && user.email === "aydan2903@gmail.com" && (
                <Link to={"/createItem"}>
                  {" "}
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-300 ease-out text-textColor text-base">
                    New item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
                <li className="px-4 py-3 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer hover:bg-slate-100">
                  Home
                </li>
                <li className=" px-4 py-3 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer hover:bg-slate-100">
                  Menu
                </li>
                <li className=" px-4 py-3 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer hover:bg-slate-100">
                  About
                </li>
                <li className=" px-4 py-3 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer hover:bg-slate-100">
                  Services
                </li>
              </ul>
              <p
                onClick={logout}
                className="px-4 py-2 flex items-center gap-3 cursor-pointer bg-slate-200 hover:bg-slate-300 shadow-md transition-all duration-300 ease-out text-textColor text-base"
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="w-12 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Food Mood</p>
        </Link>
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className=" text-textColor text-2xl ml-8 cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">3</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
