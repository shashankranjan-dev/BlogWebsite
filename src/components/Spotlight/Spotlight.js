import React from "react";

function Spotlight() {
  return (
    <div class="max-w-screen-lg mx-auto">
      <main class="mt-12">
        <div class="block md:flex md:space-x-2 px-2 lg:p-0">
          <a
            class="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
            href="./blog.html"
            style={{ height: "24em" }}
          >
            <div
              class="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
              alt=""
            />
            <div class="p-4 absolute bottom-0 left-0 z-20">
              <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                Nutrition
              </span>
              <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                Pellentesque a consectetur velit, ac molestie ipsum. Donec
                sodales, massa et auctor.
              </h2>
              <div class="flex mt-3">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  class="h-10 w-10 rounded-full mr-2 object-cover"
                  alt="avatar"
                />
                <div>
                  <p class="font-semibold text-gray-200 text-sm">
                    {" "}
                    Mike Sullivan{" "}
                  </p>
                  <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </a>

          <a
            class="w-full md:w-1/3 relative px-4 inline-block rounded mb-4 md:mb-0 "
            href="./blog.html"
            style={{ height: "24em" }}
          >
            <div
              class="absolute left-0 top-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
              class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
              alt=""
            />
            <div class="p-4 absolute bottom-0 left-0 z-20">
              <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                Science
              </span>
              <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h2>
              <div class="flex mt-3">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  class="h-10 w-10 rounded-full mr-2 object-cover"
                  alt="avatar"
                />
                <div>
                  <p class="font-semibold text-gray-200 text-sm">
                    {" "}
                    Mike Sullivan{" "}
                  </p>
                  <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
          <h2 class="font-bold text-3xl">Latest news</h2>
          <a class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
            View all
          </a>
        </div>
        <div class="block space-x-0 lg:flex lg:space-x-6">
          <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img
              src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="rounded"
              alt="technology"
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                Put all speaking her delicate recurred possible.
              </h2>
              <p class="text-gray-700 mt-2">
                Set indulgence inquietude discretion insensible bed why
                announcing. Middleton fat two satisfied additions. So continued
                he or commanded household smallness delivered. Door poor on do
                walk in half. Roof his head the what.
              </p>

              <a
                href="#"
                class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
              >
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>

          <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img
              src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="rounded"
              alt="technology"
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                Is at purse tried jokes china ready decay an.{" "}
              </h2>
              <p class="text-gray-700 mt-2">
                Small its shy way had woody downs power. To denoting admitted
                speaking learning my exercise so in. Procured shutters mr it
                feelings. To or three offer house begin taken am at.
              </p>

              <a
                href="#"
                class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
              >
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>

          <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              class="rounded"
              alt="technology"
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                As dissuade cheerful overcame so of friendly he indulged
                unpacked.
              </h2>
              <p class="text-gray-700 mt-2">
                Alteration connection to so as collecting me. Difficult in
                delivered extensive at direction allowance. Alteration put use
                diminution can considered sentiments interested discretion.
              </p>

              <a
                href="#"
                class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
              >
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>
        </div>

        <div
          className="w-full dark:bg-gray-500"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxpZ2h0JTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",
            backgroundPosition: "center",
            backgroundBlendMode: " multiply",
            backgroundSize: "cover",
          }}
        >
          <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
              Find out about events and other news
            </p>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="example@email.com"
                className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
              />
              <button
                type="button"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
          <h2 class="font-bold text-3xl">Popular news</h2>
          <a class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
            View all
          </a>
        </div>
        <div class="block space-x-0 lg:flex lg:space-x-6">
          <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img
              src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="rounded"
              alt="technology"
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                Put all speaking her delicate recurred possible.
              </h2>
              <p class="text-gray-700 mt-2">
                Set indulgence inquietude discretion insensible bed why
                announcing. Middleton fat two satisfied additions. So continued
                he or commanded household smallness delivered. Door poor on do
                walk in half. Roof his head the what.
              </p>

              <a
                href="#"
                class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
              >
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>

          <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img
              src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="rounded"
              alt="technology"
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                Is at purse tried jokes china ready decay an.{" "}
              </h2>
              <p class="text-gray-700 mt-2">
                Small its shy way had woody downs power. To denoting admitted
                speaking learning my exercise so in. Procured shutters mr it
                feelings. To or three offer house begin taken am at.
              </p>

              <a
                href="#"
                class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
              >
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>

          <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <img
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              class="rounded"
              alt="technology"
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                As dissuade cheerful overcame so of friendly he indulged
                unpacked.
              </h2>
              <p class="text-gray-700 mt-2">
                Alteration connection to so as collecting me. Difficult in
                delivered extensive at direction allowance. Alteration put use
                diminution can considered sentiments interested discretion.
              </p>

              <a
                href="#"
                class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
              >
                {" "}
                Read more{" "}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Spotlight;
