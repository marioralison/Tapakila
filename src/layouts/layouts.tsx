import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex w-screen h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <main className="flex-1 p-4">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold mb-4">Layout chargé ✅</h1>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
