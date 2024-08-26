import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import userImg from "../../public/assets/heroicons_sm-user.svg";
import locationImg from "../../public/assets/gridicons_location.svg";
import serverImg from "../../public/assets/bx_bxs-server.svg";

interface ListUser {
  name: string;
  number: string;
  icon: string;
}

export const Hero: React.FC = () => {
  const listUser: ListUser[] = [
    {
      name: "Users",
      number: "390",
      icon: userImg,
    },
    {
      name: "Locations",
      number: "20",
      icon: locationImg,
    },
    {
      name: "Server",
      number: "50",
      icon: serverImg,
    },
  ];

  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Free Landing Page Template for startups
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nextly is a free landing page & marketing website template for
              startups and indie projects. It’s built with Next.js & TailwindCSS
              and is completely open-source.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-lg"
              >
                Register
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width={616}
              height={617}
              className="object-cover"
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="relative w-full flex">
          <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
            {listUser.map((listUsers, index) => (
              <div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                key={index}
              >
                <div className="flex mx-auto w-40 sm:w-auto">
                  <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                    <Image
                      src={listUsers.icon}
                      alt={listUsers.name}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl text-black-600 font-bold">
                      {listUsers.number}+
                    </p>
                    <p className="text-lg text-black-500">{listUsers.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </Container>
    </>
  );
};
