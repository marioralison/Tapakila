import { CalendarIcon, Clock10Icon, MapPinnedIcon } from "lucide-react";

type EventCardProps = {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string | number;
  characteristic: string;
  onClick?: () => void;
};

export default function EventCard({
  image,
  title,
  date,
  time,
  location,
  price,
  characteristic,
  onClick,
}: EventCardProps) {
  return (
    <div
      onClick={onClick}
      className="w-120 h-55 bg-white flex justify-center items-start rounded-xl relative border border-zinc-100 shadow-md hover:shadow-xl cursor-pointer transition delay-180 duration-180 ease-in-out hover:-translate-y-1 hover:scale-102"
    >
      <div className="px-4 py-1 top-0 right-0 bg-red-400 absolute rounded-tr-lg rounded-bl-2xl">
        <p className="text-white">{characteristic}</p>
      </div>
      <div className="w-4/12 h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full rounded-tl-xl rounded-bl-xl object-cover"
        />
      </div>
      <div className="w-8/12 h-full flex flex-col items-start justify-center py-4 px-5 rounded-lg">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="w-full flex flex-col justify-center items-start py-4 space-y-1">
          <div className="flex items-center">
            <CalendarIcon size={22} />
            <p className="pl-2">{date}</p>
          </div>
          <div className="flex items-center">
            <Clock10Icon size={22} />
            <p className="pl-2">{time}</p>
          </div>
          <div className="flex items-center">
            <MapPinnedIcon size={22} />
            <p className="pl-2">{location}</p>
          </div>
        </div>
        <div className="flex font-semibold text-xl">
          <span>MGA</span>
          <h3 className="pl-2">{price}</h3>
        </div>
      </div>
    </div>
  );
}