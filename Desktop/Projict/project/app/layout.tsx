"use client"

import type React from "react"
import "@/app/globals.css"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { usePathname } from 'next/navigation'
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Dumbbell, ChevronLeft, ChevronRight, Sun, Moon, Settings, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'
  const [isMobile, setIsMobile] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <title>نظام إدارة النادي الرياضي</title>
        <meta name="description" content="نظام إدارة النادي الرياضي الشامل" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className={`flex h-screen ${isLoginPage ? '' : 'flex-row'}`}>
            {!isLoginPage && (
              <div className={`flex-shrink-0 transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-64'} ${isMobile ? 'hidden' : 'block'}`}>
                <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} isMobile={isMobile} />
              </div>
            )}
            <main className={`flex-1 overflow-auto transition-all duration-300 p-3 md:p-5`}>
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
