import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const EventCard: React.FC<CardProps> = ({ imageSrc, imageAlt, title }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl sm:rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <Image
          className="rounded-xl"
          src={imageSrc}
          alt={imageAlt}
          width={400} // Adjust as needed
          height={250} // Adjust as needed
          layout="responsive"
          quality={100}
        />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default EventCard;
