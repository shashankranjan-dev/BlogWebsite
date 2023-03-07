import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
function Navbar() {
  return (
    <div>
      <div class="flex flex-wrap ">
        <section class="relative mx-auto">
          <nav class="flex justify-between bg-black text-white w-screen ">
            <div class="px-5 xl:px-12 py-3 flex w-full items-center">
              <div class="hidden xl:flex items-center space-x-5 ">
                <a
                  class="hover:text-gray-900  hover:bg-gray-100 p-2 rounded-md"
                  href="#!"
                >
                  <FaFacebook />
                </a>
                <a
                  class="flex items-center hover:bg-gray-100 p-2 rounded-md hover:text-gray-900"
                  href="#!"
                >
                  <FaLinkedin />
                  <span class="flex absolute -mt-5 ml-4">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>

                <a
                  class="flex items-center hover:bg-gray-100 p-2 rounded-md hover:text-gray-900"
                  href="#!"
                >
                  <FaInstagram />
                </a>
              </div>

              <ul class="hidden md:flex  mx-auto  ">
                <li>
                  <a class="hover:text-gray-200" href="#!">
                    <img src="/Screenshot__150_-removebg-preview.png" alt="" />
                  </a>
                </li>
              </ul>
              <a
                class="text-xl font-semibold px-6 py-2 rounded-sm bg-red-400 "
                href="#!"
              >
                {/* <img class="h-9" src="logo.png" alt="logo" /> */}
                Subscribe
              </a>
              <Link class="text-xl font-semibold px-6" href="#!" to="/login">
                Login
              </Link>
            </div>

            <a class="xl:hidden flex mr-6 items-center" href="#!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <a class="navbar-burger self-center mr-12 xl:hidden" href="#!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>

      <div class="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              class="object-cover object-center w-full h-full rounded-full"
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
            />
          </a>
        </div>
      </div>

      {/* DownNavbar */}

      <div class="flex flex-wrap">
        <section class="relative mx-auto">
          <nav class="flex justify-between bg-stone-900 text-white w-screen">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>

              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link class="hover:text-gray-200" to="/">
                    <a class="hover:text-gray-200" href="#!">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link class="hover:text-gray-200" to="/topic">
                    <a class="hover:text-gray-200" href="#!">
                      Topic
                    </a>
                  </Link>
                </li>
                <li>
                  <Link class="hover:text-gray-200" to="/about">
                    <a class="hover:text-gray-200" href="#!">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <a class="hover:text-gray-200" href="#!">
                    Contact Us
                  </a>
                </li>
                <li>
                  <Link class="hover:text-gray-200" to="/collection">
                    <a class="hover:text-gray-200" href="#!">
                      Collections
                    </a>
                  </Link>
                </li>
                <li>
                  <Link class="hover:text-gray-200" to="/contact">
                    <a class="hover:text-gray-200" href="#!">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>

              <div class="hidden xl:flex items-center space-x-5 ">
                <a class="hover:text-gray-200" href="#!">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </a>

                <a class="flex items-center hover:text-gray-200" href="#!">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <a class="xl:hidden flex mr-6 items-center" href="#!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <a class="navbar-burger self-center mr-12 xl:hidden" href="#!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </div>
  );
}

export default Navbar;
