import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div>
      <div class="py-10 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img src="/nazu.jpg" alt="" loading="lazy" width="" height="" />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-3xl">
                <span className="text-stone-900 text-5xl">I</span>ntroduction
              </h2>
              <p class="mt-6 text-gray-600 font-semibold text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p class="mt-4 text-gray-600 font-semibold  text-justify">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia. Nobis minus voluptatibus pariatur
                dignissimos libero quaerat iure expedita at? Asperiores nemo
                possimus nesciunt dicta veniam aspernatur quam mollitia.
              </p>
              <p class="mt-4 text-gray-600 font-semibold  text-justify">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia. Nobis minus voluptatibus pariatur
                dignissimos libero quaerat iure expedita at? Asperiores nemo
                possimus nesciunt dicta veniam aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container  px-6 mx-auto">
        <section class="mb-40 text-gray-800 background-radial-gradient">
          <div class="px-6 py-12 md:px-12 text-center lg:text-left">
            <div class="container mx-auto">
              <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                <div class="mt-12 lg:mt-0">
                  <h1
                    class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                    style={{ color: "black" }}
                  >
                    Are you ready <br />
                    <span style={{ color: "black" }}>for an adventure?</span>
                  </h1>
                  <p class="text-lg font-semibold text-zinc-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima officia consequatur adipisci tenetur repudiandae
                    rerum quos.
                  </p>
                </div>
                <div class="mb-12 lg:mb-0">
                  <div
                    class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <iframe
                      class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                      allowfullscreen=""
                      data-gtm-yt-inspected-2340190_699="true"
                      id="240632615"
                      alt="video"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
