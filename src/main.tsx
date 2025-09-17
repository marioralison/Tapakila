import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/routes.tsx'

import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    <AppRoutes/>
  </StrictMode>,
)
