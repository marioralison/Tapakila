import SideBarOrganizer from "@/components/sidebarOrganizer"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return(
    <div className="flex w-screen h-screen bg-zinc-100">
        <SideBarOrganizer />
        <main className="w-full h-full flex-1 py-10 px-2 pr-10 overflow-y-auto">
          <Outlet />
        </main>
    </div>
  )
}