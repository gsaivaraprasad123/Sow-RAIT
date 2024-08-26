import Image from "next/image";
import udaanimg from "../../../public/img/udaan.png";
import imag from "../../../public/img/image-1.jpg";
import EventCard from "@/components/EventCard";

export default function events() {
  return (
    <div className="relative w-full ">
      {/* Full-screen background image with text overlay */}
      <div className="relative w-full h-screen">
        <Image
          src={udaanimg}
          alt="NSS Event"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl sm:text-7xl font-bold text-center">
            YOU RUN
            <br />
            THEY LEARN
          </h1>
        </div>
      </div>

      {/* Content below the background image */}
      <div className="relative z-10 mt-16 flex flex-row flex-wrap px-16 mx-auto xl:px-10 gap-10 justify-center">
        <EventCard
          imageSrc={imag.src}
          imageAlt="Diwali Celebration"
          title="Diwali Celebration"
        />
        <EventCard
          imageSrc={imag.src}
          imageAlt="Diwali Celebration"
          title="Diwali Celebration"
        />
        <EventCard
          imageSrc={imag.src}
          imageAlt="Diwali Celebration"
          title="Diwali Celebration"
        />
      </div>
    </div>
  );
}
