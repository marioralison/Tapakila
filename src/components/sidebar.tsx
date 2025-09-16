import { Link, useLocation } from "react-router-dom"
import { User2Icon, BookUserIcon, TicketCheckIcon, HouseIcon } from "lucide-react"
import Alert from "./alert"

export default function SideBar() {
  const location = useLocation()

  const menuItems = [
    { name: "Accueil", icon: <HouseIcon size={22} />, path: "/layout" },
    { name: "Mes tickets", icon: <TicketCheckIcon size={22} />, path: "/layout/ticket" },
    { name: "Mon profil", icon: <User2Icon size={22} />, path: "/layout/profil" },
    { name: "Devenir organisateur", icon: <BookUserIcon size={22} />, path: "/layout/organizerForm" },
  ]

  return (
    <div className="p-8">
      <aside className="w-70 h-full px-6 py-10 bg-indigo-950 flex flex-col border border-zinc-100 shadow-xl rounded-4xl">
        <div className="p-6 pt-7 text-2xl font-bold text-zinc-900">
          <h1 className="text-5xl text-white">Tapakila</h1>
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

        <div className="w-full flex flex-col justify-center items-center gap-10 text-sm text-zinc-500">
          <Alert/>
          <p className="p-4 text-white font-extralight border-t">© 2025 - Tapakila</p>
        </div>
      </aside>
    </div>
  )
}