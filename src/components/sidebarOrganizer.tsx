import { Link, useLocation } from "react-router-dom"
import { CalendarFoldIcon, BookOpenCheckIcon, User } from "lucide-react"
import AlertLogout from "./alertLogout"
import barCode from "@/assets/barcode/barcode.svg"

export default function SideBarOrganizer() {
  const location = useLocation()

  const menuItems = [
    { name: "Evènements", icon: <CalendarFoldIcon size={22} />, path: "/layoutOrganizer" },
    { name: "Réservations", icon: <BookOpenCheckIcon size={22} />, path: "/layoutOrganizer/reservation" },
    { name: "Mon profil", icon: <User size={22} />, path: "/layoutOrganizer/profil" },
  ]

  return (
    <div className="p-8">
      <aside className="relative w-70 h-full px-6 pt-10 pb-5 bg-indigo-950 flex flex-col border border-zinc-100 shadow-xl rounded-4xl">
        <div className="absolute bg-white right-14 top-0 px-6 pb-2 rounded-b-xl">
          <p className="w-29 text-center text-black font-semibold text-lg pt-2">Organisateur</p>
        </div>
        <div className="p-6 pt-7 text-2xl text-zinc-900">
          <h1 className="text-5xl text-white font-bold">Tapakila</h1>
        </div>
        <nav className="flex-1 flex flex-col gap-2 p-2 pt-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-md font-medium transition-colors
                ${location.pathname === item.path
                  ? "bg-primary text-black"
                  : "text-white hover:bg-indigo-900/40 hover: hover:text-black-900"}`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="relative w-full flex flex-col justify-center items-center gap-4 text-sm text-zinc-500">
          <div className="w-full py-3 mb-5 rounded-xl cursor-pointer hover:bg-indigo-900/40">
            <AlertLogout/>
          </div>
          <div
            className="w-full h-[2px] mb-6"
            style={{
              backgroundImage: "repeating-linear-gradient(to right, white 0 10px, transparent 10px 20px)",
              opacity: 0.5,
            }}
          ></div>
          <div>
            <img src={barCode} alt="bar-code" className="rounded-lg"/>
          </div>
          <p className="p-4 text-white text-xl font-extralight">© 2025 - Tapakila</p>
        </div>
      </aside>
    </div>
  )
}