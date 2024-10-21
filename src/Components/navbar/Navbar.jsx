/* eslint-disable no-constant-condition */
import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import MyContext from "../../context/data/myContext";
// eslint-disable-next-line no-unused-vars
import { toast } from "react-toastify";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const context = useContext(MyContext);
  const { toggleMode, mode } = context;

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear("user");

    window.location.href = "/login";
  };

  return (
    <div className="bg-white sticky top-0 z-50  ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  <div className="flow-root">
                    {/* <Link
                      to={"/order"}
                      style={{ color: mode === "dark" ? "white" : "" }}
                      className="-m-2 block p-2 font-medium text-gray-900 hidden"
                      
                    >
                      Order
                    </Link> */}
                  </div>

                  {user?.user?.email === "aman@gmail.com" ? (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        admin
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      {/* <img
                        className="inline-block w-10 h-10 rounded-full"
                       
                        alt="Dan_Abromov"
                      />{" "} */}
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      PAK
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free delivery on orders over Rs300
        </p>

        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Dream-Bazar
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  {/* {user ? (
                    <Link
                      to={"/order"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Order
                    </Link>
                  ) : (
                    ""
                  )} */}

                  {user?.user?.email === "aman@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  ) : (
                    ""
                  )}
                </div>
                {user ? (
                  ""
                ) : (
                  <div className="hidden lg:ml-8 lg:flex">
                    <Link
                      to={"/signup"}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Signup
                    </Link>
                  </div>
                )}

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      PAK
                    </span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    {/* <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="data:image/png;base64,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"
                      alt="Dan_Abromov"
                    /> */}
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}