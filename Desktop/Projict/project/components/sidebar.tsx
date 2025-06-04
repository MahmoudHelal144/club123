"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart3,
  Calendar,
  ClipboardCheck,
  CreditCard,
  Home,
  LogOut,
  Settings,
  Users,
  Bell,
  Dumbbell,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Menu,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

interface SidebarProps {
  isCollapsed: boolean
  setIsCollapsed: Dispatch<SetStateAction<boolean>>
  isMobile: boolean
}

export function Sidebar({ isCollapsed, setIsCollapsed, isMobile }: SidebarProps) {
  const pathname = usePathname()
  const [userRole, setUserRole] = useState<"admin" | "coach" | "player">("admin")
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  // محاكاة لتغيير الدور للعرض التوضيحي
  useEffect(() => {
    const role = (localStorage.getItem("userRole") as "admin" | "coach" | "player") || "admin"
    setUserRole(role)
  }, [])

  const adminRoutes = [
    {
      href: "/dashboard",
      icon: Home,
      title: "لوحة التحكم",
      badge: null,
    },
    {
      href: "/members",
      icon: Users,
      title: "الأعضاء",
      badge: null,
    },
    {
      href: "/trainings",
      icon: Dumbbell,
      title: "جلسات التدريب",
      badge: null,
    },
    {
      href: "/attendance",
      icon: ClipboardCheck,
      title: "الحضور",
      badge: null,
    },
    {
      href: "/subscriptions",
      icon: CreditCard,
      title: "الاشتراكات",
      badge: "5",
    },
    {
      href: "/schedule",
      icon: Calendar,
      title: "الجدول",
      badge: null,
    },
    {
      href: "/notifications",
      icon: Bell,
      title: "الإشعارات",
      badge: "3",
    },
    {
      href: "/reports",
      icon: BarChart3,
      title: "التقارير",
      badge: null,
    },
    {
      href: "/settings",
      icon: Settings,
      title: "الإعدادات",
      badge: null,
    },
  ]

  const coachRoutes = [
    {
      href: "/coach/dashboard",
      icon: Home,
      title: "لوحة التحكم",
      badge: null,
    },
    {
      href: "/coach/sessions",
      icon: Dumbbell,
      title: "جلساتي التدريبية",
      badge: null,
    },
    {
      href: "/coach/attendance",
      icon: ClipboardCheck,
      title: "تسجيل الحضور",
      badge: "2",
    },
    {
      href: "/coach/trainees",
      icon: Users,
      title: "المتدربين",
      badge: null,
    },
    {
      href: "/coach/notifications",
      icon: Bell,
      title: "الإشعارات",
      badge: "1",
    },
    {
      href: "/coach/profile",
      icon: Settings,
      title: "الملف الشخصي",
      badge: null,
    },
  ]

  const playerRoutes = [
    {
      href: "/player/dashboard",
      icon: Home,
      title: "الرئيسية",
      badge: null,
    },
    {
      href: "/player/schedule",
      icon: Calendar,
      title: "جدول التدريب",
      badge: null,
    },
    {
      href: "/player/subscription",
      icon: CreditCard,
      title: "اشتراكي",
      badge: "1",
    },
    {
      href: "/player/notifications",
      icon: Bell,
      title: "الإشعارات",
      badge: "2",
    },
    {
      href: "/player/profile",
      icon: Settings,
      title: "الملف الشخصي",
      badge: null,
    },
  ]

  const routes = userRole === "admin" ? adminRoutes : userRole === "coach" ? coachRoutes : playerRoutes
  const userName = userRole === "admin" ? "مدير النظام" : userRole === "coach" ? "أحمد المدرب" : "خالد اللاعب"
  const userEmail =
    userRole === "admin"
      ? "admin@sportsclub.com"
      : userRole === "coach"
        ? "coach@sportsclub.com"
        : "player@sportsclub.com"

  // للأجهزة المحمولة
  if (isMobile) {
    return (
      <>
        <Button variant="ghost" size="icon" className="fixed top-4 right-4 z-50 md:hidden" asChild>
          <SheetTrigger>
            <Menu className="h-6 w-6" />
          </SheetTrigger>
        </Button>

        <Sheet>
          <SheetContent side="right" className="p-0 w-64">
            <div className="flex h-full flex-col">
              {/* Top section: Logo and Collapse Button */}
              <div
                className={cn(
                  "flex h-16 items-center border-b px-4",
                  isCollapsed && !isMobile ? "justify-center" : "justify-between"
                )}
              >
                {(!isCollapsed || isMobile) && (
                  <Link href="/" className="flex items-center gap-2 font-semibold">
                    <Dumbbell className="h-7 w-7 text-club-primary" />
                    <span className="gradient-text text-lg">النادي الرياضي</span>
                  </Link>
                )}
                {isCollapsed && !isMobile && <Dumbbell className="h-7 w-7 text-club-primary" />}
                {!isMobile && (
                  <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)} className="h-8 w-8">
                    {isCollapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </Button>
                )}
              </div>

              {/* Middle section: Navigation Links */}
              <div className="flex-1 overflow-auto py-4">
                <nav className="grid items-start px-3 text-sm font-medium gap-1">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "relative flex items-center gap-3 rounded-lg px-4 py-3 text-muted-foreground transition-all hover:bg-muted hover:text-club-primary",
                        pathname === route.href && "bg-muted text-club-primary font-bold",
                        isCollapsed && !isMobile ? "justify-center" : ""
                      )}
                    >
                      <route.icon className={cn("h-5 w-5", pathname === route.href && "text-club-primary")} />
                      {(!isCollapsed || isMobile) && <span className="text-base">{route.title}</span>}
                      {route.badge && (
                        <Badge
                          className={cn(
                            "absolute bg-club-accent text-white",
                            isCollapsed && !isMobile ? "top-1 right-1" : "top-2 left-2"
                          )}
                          variant="default"
                        >
                          {route.badge}
                        </Badge>
                      )}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Bottom section: Theme Toggle and User Info/Settings/Logout */}
              <div className="mt-auto p-4 border-t flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="mb-3 h-9 w-9 rounded-full"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                {/* Conditional rendering for User Info, Settings/Logout, or just Avatar */}
                {isCollapsed && !isMobile ? (
                  // Collapsed desktop state: Show only centered avatar
                  <div className="flex justify-center w-full">
                    <Avatar className="h-10 w-10 ring-2 ring-club-primary ring-offset-2">
                      <AvatarImage src={`/avatars/${userRole}.png`} alt="Avatar" />
                      <AvatarFallback className="bg-club-primary text-white">
                        {userRole === "admin" ? "مد" : userRole === "coach" ? "مد" : "لا"}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                ) : (
                  // Expanded or mobile state: Show avatar, user info, and buttons
                  <div
                    className={cn(
                      "flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm w-full"
                    )}
                  >
                    <Avatar className="h-10 w-10 ring-2 ring-club-primary ring-offset-2">
                      <AvatarImage src={`/avatars/${userRole}.png`} alt="Avatar" />
                      <AvatarFallback className="bg-club-primary text-white">
                        {userRole === "admin" ? "مد" : userRole === "coach" ? "مد" : "لا"}
                      </AvatarFallback>
                    </Avatar>

                    {/* User Info */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-sm font-semibold truncate">{userName}</span>
                      <span className="text-xs text-muted-foreground truncate">{userEmail}</span>
                    </div>

                    {/* Settings/Logout buttons */}
                    <div className="flex items-center gap-2 ml-auto">
                      <Link href="/settings" passHref legacyBehavior>
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                          <Settings className="h-5 w-5" />
                          <span className="sr-only">الإعدادات</span>
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9"
                        onClick={() => {
                          localStorage.removeItem("userRole");
                          router.push("/login");
                        }}
                      >
                        <LogOut className="h-5 w-5" />
                        <span className="sr-only">تسجيل الخروج</span>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </>
    )
  }

  // للأجهزة المكتبية
  return (
    <div
      className={cn(
        "fixed top-0 right-0 h-full flex flex-col border-l bg-card/50 backdrop-blur-sm transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      {/* Top section: Logo and Collapse Button */}
      <div
        className={cn(
          "flex h-16 items-center border-b px-4",
          isCollapsed && !isMobile ? "justify-center" : "justify-between"
        )}
      >
        {(!isCollapsed || isMobile) && (
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Dumbbell className="h-7 w-7 text-club-primary" />
            <span className="gradient-text text-lg">النادي الرياضي</span>
          </Link>
        )}
        {isCollapsed && !isMobile && <Dumbbell className="h-7 w-7 text-club-primary" />}
        {!isMobile && (
          <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)} className="h-8 w-8">
            {isCollapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        )}
      </div>

      {/* Middle section: Navigation Links */}
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid items-start px-3 text-sm font-medium gap-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "relative flex items-center gap-3 rounded-lg px-4 py-3 text-muted-foreground transition-all hover:bg-muted hover:text-club-primary",
                pathname === route.href && "bg-muted text-club-primary font-bold",
                isCollapsed && !isMobile ? "justify-center" : ""
              )}
            >
              <route.icon className={cn("h-5 w-5", pathname === route.href && "text-club-primary")} />
              {(!isCollapsed || isMobile) && <span className="text-base">{route.title}</span>}
              {route.badge && (
                <Badge
                  className={cn(
                    "absolute bg-club-accent text-white",
                    isCollapsed && !isMobile ? "top-1 right-1" : "top-2 left-2"
                  )}
                  variant="default"
                >
                  {route.badge}
                </Badge>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom section: Theme Toggle and User Info/Settings/Logout */}
      <div className="mt-auto p-4 border-t flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="mb-3 h-9 w-9 rounded-full"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>

        {/* Conditional rendering for User Info, Settings/Logout, or just Avatar */}
        {isCollapsed && !isMobile ? (
          // Collapsed desktop state: Show only centered avatar
          <div className="flex justify-center w-full">
            <Avatar className="h-10 w-10 ring-2 ring-club-primary ring-offset-2">
              <AvatarImage src={`/avatars/${userRole}.png`} alt="Avatar" />
              <AvatarFallback className="bg-club-primary text-white">
                {userRole === "admin" ? "مد" : userRole === "coach" ? "مد" : "لا"}
              </AvatarFallback>
            </Avatar>
          </div>
        ) : (
          // Expanded or mobile state: Show avatar, user info, and buttons
          <div
            className={cn(
              "flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm w-full"
            )}
          >
            <Avatar className="h-10 w-10 ring-2 ring-club-primary ring-offset-2">
              <AvatarImage src={`/avatars/${userRole}.png`} alt="Avatar" />
              <AvatarFallback className="bg-club-primary text-white">
                {userRole === "admin" ? "مد" : userRole === "coach" ? "مد" : "لا"}
              </AvatarFallback>
            </Avatar>

            {/* User Info */}
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-sm font-semibold truncate">{userName}</span>
              <span className="text-xs text-muted-foreground truncate">{userEmail}</span>
            </div>

            {/* Settings/Logout buttons */}
            <div className="flex items-center gap-2 ml-auto">
              <Link href="/settings" passHref legacyBehavior>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">الإعدادات</span>
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={() => {
                  localStorage.removeItem("userRole");
                  router.push("/login");
                }}
              >
                <LogOut className="h-5 w-5" />
                <span className="sr-only">تسجيل الخروج</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
