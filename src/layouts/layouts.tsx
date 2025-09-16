import SideBar from "@/components/sidebar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return(
    <div className="flex w-screen h-screen">
        <SideBar />
        <main className="w-full h-full flex-1 py-10 px-10 overflow-y-auto border border-black">
            <Outlet />
        </main>
    </div>
  )
}