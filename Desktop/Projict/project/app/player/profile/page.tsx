import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CreditCard, Mail, Phone, User, MapPin, Shield, Save, Upload, Dumbbell, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

export default function PlayerProfilePage() {
  const player = {
    id: "M001",
    name: "خالد الحربي",
    email: "khalid@example.com",
    phone: "+966 54 456 7890",
    status: "نشط",
    joinDate: "2023-03-10",
    avatar: "/avatars/player.png",
    initials: "خح",
    address: "الرياض، حي النزهة، شارع الأمير سلطان",
    birthDate: "1995-08-20",
    gender: "ذكر",
    emergencyContact: "+966 55 555 5555",
    healthNotes: "لا توجد حساسية أو مشاكل صحية",
    goals: "زيادة اللياقة البدنية وبناء العضلات",
    subscription: {
      plan: "قياسية",
      startDate: "2023-03-10",
      endDate: "2023-09-10",
      progress: 65,
      amount: 800,
    },
    coach: "أحمد السعود",
    coachAvatar: "/avatars/coach.png",
    coachInitials: "أس",
    attendanceRate: 85,
    totalSessions: 45,
  }

  const stats = [
    {
      title: "جلسات حضرتها",
      value: player.totalSessions,
      icon: Dumbbell,
      color: "text-club-primary",
      bgColor: "bg-club-primary/10",
    },
    {
      title: "نسبة الحضور",
      value: `${player.attendanceRate}%`,
      icon: Clock,
      color: "text-club-secondary",
      bgColor: "bg-club-secondary/10",
    },
  ]

  const upcomingSessions = [
    {
      id: "S001",
      title: "تدريب القوة الصباحي",
      date: "2023-06-16",
      time: "07:00 - 08:30",
      location: "القاعة الرئيسية",
      coach: "أحمد السعود",
    },
    {
      id: "S002",
      title: "تمارين القلب والأوعية الدموية",
      date: "2023-06-16",
      time: "14:00 - 15:30",
      location: "غرفة الكارديو",
      coach: "فاطمة الزهراني",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight gradient-text">الملف الشخصي</h2>
          <p className="text-muted-foreground">عرض وتحديث معلوماتك الشخصية</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-1">
          <CardContent className="flex flex-col items-center space-y-4 pt-6">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-club-primary/20">
                <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                <AvatarFallback className="text-4xl">{player.initials}</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-0 right-0 rounded-full bg-background border-2 border-primary"
              >
                <Upload className="h-4 w-4" />
                <span className="sr-only">تغيير الصورة</span>
              </Button>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">{player.name}</h3>
              <p className="text-sm text-muted-foreground">رقم العضوية: {player.id}</p>
              <div className="mt-2 flex justify-center">
                <Badge className="bg-club-primary">عضو</Badge>
              </div>
            </div>

            <Separator />

            <div className="w-full space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{player.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{player.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{player.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">تاريخ الانضمام: {new Date(player.joinDate).toLocaleDateString("ar-SA")}</span>
              </div>
            </div>

            <Separator />

            <div className="w-full space-y-3">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <div className="flex items-center gap-2">
                  <span className="text-sm">المدرب:</span>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={player.coachAvatar || "/placeholder.svg"} alt={player.coach} />
                      <AvatarFallback>{player.coachInitials}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{player.coach}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-3 space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {stats.map((stat, index) => (
              <Card key={index} className="stats-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div className={`rounded-full p-2 ${stat.bgColor}`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="info" className="w-full">
            <TabsList className="w-full md:w-auto grid grid-cols-3 md:inline-flex">
              <TabsTrigger value="info">المعلومات الشخصية</TabsTrigger>
              <TabsTrigger value="subscription">الاشتراك</TabsTrigger>
              <TabsTrigger value="security">الأمان</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>المعلومات الشخصية</CardTitle>
                  <CardDescription>تحديث معلوماتك الشخصية</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل</Label>
                      <Input id="name" defaultValue={player.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" defaultValue={player.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input id="phone" type="tel" defaultValue={player.phone} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthDate">تاريخ الميلاد</Label>
                      <Input id="birthDate" type="date" defaultValue={player.birthDate} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">العنوان</Label>
                      <Input id="address" defaultValue={player.address} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact">رقم الطوارئ</Label>
                      <Input id="emergencyContact" defaultValue={player.emergencyContact} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="healthNotes">ملاحظات صحية</Label>
                    <Textarea id="healthNotes" defaultValue={player.healthNotes} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">الأهداف</Label>
                    <Textarea id="goals" defaultValue={player.goals} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscription" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>معلومات الاشتراك</CardTitle>
                  <CardDescription>تفاصيل اشتراكك الحالي</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">الباقة الحالية</span>
                        <Badge variant="outline" className="border-club-primary text-club-primary">
                          {player.subscription.plan}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>تاريخ البدء</span>
                        <span>{new Date(player.subscription.startDate).toLocaleDateString("ar-SA")}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>تاريخ الانتهاء</span>
                        <span>{new Date(player.subscription.endDate).toLocaleDateString("ar-SA")}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>المبلغ المدفوع</span>
                        <span>{player.subscription.amount} ريال</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">المدة المتبقية</span>
                        <span className="text-sm font-medium">{player.subscription.progress}%</span>
                      </div>
                      <Progress value={player.subscription.progress} className="h-2" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full">تجديد الاشتراك</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-club-primary" />
                    إعدادات الأمان
                  </CardTitle>
                  <CardDescription>تحديث إعدادات الأمان الخاصة بك</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">تغيير كلمة المرور</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">كلمة المرور الحالية</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div></div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">كلمة المرور الجديدة</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    <Button variant="outline">تغيير كلمة المرور</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}