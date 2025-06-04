"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell, LogIn, User, Lock, Mail, Phone, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [userRole, setUserRole] = useState<"admin" | "coach" | "player">("admin")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // محاكاة لعملية تسجيل الدخول
    localStorage.setItem("userRole", userRole)

    toast({
      title: "تم تسجيل الدخول بنجاح",
      description: `مرحباً بك في نظام إدارة النادي الرياضي (${
        userRole === "admin" ? "مدير النظام" : userRole === "coach" ? "المدرب" : "اللاعب"
      })`,
      variant: "success",
    })

    // توجيه المستخدم إلى الصفحة المناسبة
    if (userRole === "admin") {
      router.push("/dashboard")
    } else if (userRole === "coach") {
      router.push("/coach/dashboard")
    } else {
      router.push("/player/dashboard")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-club-primary/10 to-club-secondary/10 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Dumbbell className="h-12 w-12 text-club-primary" />
              <div className="absolute inset-0 rounded-full animate-pulse-ring bg-club-primary/20"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold gradient-text">نظام إدارة النادي الرياضي</h1>
          <p className="text-muted-foreground mt-2">مرحباً بك في منصة إدارة النادي الرياضي الشاملة</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
            <TabsTrigger value="register">إنشاء حساب</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>تسجيل الدخول</CardTitle>
                <CardDescription>أدخل بيانات الدخول الخاصة بك للوصول إلى حسابك</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="role">نوع الحساب</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      type="button"
                      variant={userRole === "admin" ? "default" : "outline"}
                      className={userRole === "admin" ? "border-2 border-club-primary" : ""}
                      onClick={() => setUserRole("admin")}
                    >
                      مدير النظام
                    </Button>
                    <Button
                      type="button"
                      variant={userRole === "coach" ? "default" : "outline"}
                      className={userRole === "coach" ? "border-2 border-club-primary" : ""}
                      onClick={() => setUserRole("coach")}
                    >
                      مدرب
                    </Button>
                    <Button
                      type="button"
                      variant={userRole === "player" ? "default" : "outline"}
                      className={userRole === "player" ? "border-2 border-club-primary" : ""}
                      onClick={() => setUserRole("player")}
                    >
                      لاعب
                    </Button>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        type="email"
                        autoComplete="email"
                        required
                        className="pr-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">كلمة المرور</Label>
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                        نسيت كلمة المرور؟
                      </Button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        placeholder="أدخل كلمة المرور"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute left-1 top-1 h-8 w-8"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        <span className="sr-only">{showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}</span>
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-effect">
                    <LogIn className="ml-2 h-4 w-4" />
                    تسجيل الدخول
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-muted-foreground">
                  ليس لديك حساب؟{" "}
                  <Button variant="link" className="h-auto p-0">
                    إنشاء حساب جديد
                  </Button>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>إنشاء حساب جديد</CardTitle>
                <CardDescription>أدخل بياناتك لإنشاء حساب جديد في النظام</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-role">نوع الحساب</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button type="button" variant="outline" className="border-2 border-club-primary">
                      مدرب
                    </Button>
                    <Button type="button" variant="default">
                      لاعب
                    </Button>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <div className="relative">
                      <User className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="name" placeholder="أدخل اسمك الكامل" required className="pr-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">البريد الإلكتروني</Label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-email"
                        placeholder="أدخل بريدك الإلكتروني"
                        type="email"
                        required
                        className="pr-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" placeholder="أدخل رقم هاتفك" type="tel" required className="pr-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">كلمة المرور</Label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-password"
                        placeholder="أدخل كلمة المرور"
                        type="password"
                        required
                        className="pr-10"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-effect">
                    إنشاء حساب
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-muted-foreground">
                  لديك حساب بالفعل؟{" "}
                  <Button variant="link" className="h-auto p-0">
                    تسجيل الدخول
                  </Button>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
