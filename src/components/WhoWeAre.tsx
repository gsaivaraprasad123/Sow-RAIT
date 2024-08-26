import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import IlusImg from "../../public/img/Illustration2.png";

const features = [
  "Powerful online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

const WhoWeAre = () => {
  return (
    <div
      className="max-w-screen-xl mt-2 mb-6 sm:mt-2 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src={IlusImg}
              alt="VPN Illustration"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Who Are We ?
          </h3>
          <p className="my-2 text-black-500 mt-4">
            With an intent to work towards societal betterment and to help the
            students maintain their socially traditional roots, Social Wing RAIT
            was founded in the year 2013. We are dedicated to providing a
            grass-roots outlook of societal issues to our student members and
            finding and working on solutions to these issues. Ever since its
            inception, Social Wing has become a significant part of RAIT and has
            observed increasing participation of students with each passing
            year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
