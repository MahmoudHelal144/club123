import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, CreditCard, Dumbbell, MapPin, Bell, TrendingUp, Award, Calendar } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlayerDashboardPage() {
  const upcomingSessions = [
    {
      id: "TS001",
      title: "تدريب القوة الصباحي",
      time: "07:00 - 08:30",
      date: "2023-06-16",
      location: "القاعة الرئيسية",
      coach: "أحمد السعود",
      coachAvatar: "/avatars/coach.png",
      coachInitials: "أس",
    },
    {
      id: "TS002",
      title: "تمارين القلب والأوعية الدموية",
      time: "14:00 - 15:30",
      date: "2023-06-16",
      location: "غرفة الكارديو",
      coach: "فاطمة الزهراني",
      coachAvatar: "/avatars/coach-female.png",
      coachInitials: "فز",
    },
  ]

  const notifications = [
    {
      id: "N001",
      title: "تغيير موعد جلسة التدريب",
      message: "تم تغيير موعد جلسة تدريب كمال الأجسام المسائي من الساعة 18:00 إلى الساعة 19:00.",
      time: "منذ ساعتين",
      icon: Calendar,
      iconColor: "text-club-primary",
      iconBg: "bg-club-primary/10",
    },
    {
      id: "N002",
      title: "تذكير بتجديد الاشتراك",
      message: "سينتهي اشتراكك بعد 7 أيام. يرجى زيارة الاستقبال لتجديد عضويتك.",
      time: "منذ يوم واحد",
      icon: CreditCard,
      iconColor: "text-club-accent",
      iconBg: "bg-club-accent/10",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight gradient-text">مرحباً، خالد</h2>
          <p className="text-muted-foreground">نتمنى لك يوماً مليئاً بالنشاط والحيوية</p>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse">
          <CalendarDays className="h-4 w-4 opacity-50 ml-2" />
          <span className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString("ar-SA", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="card-hover-effect md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-club-primary" />
              حالة العضوية
            </CardTitle>
            <CardDescription>تفاصيل اشتراكك الحالي</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <Badge className="mb-2 bg-club-success">نشط</Badge>
                  <p className="text-sm text-muted-foreground">الباقة: قياسية</p>
                  <p className="text-sm text-muted-foreground">تاريخ الانتهاء: 15 يوليو 2023</p>
                </div>
                <div className="h-14 w-14 rounded-full bg-club-primary/10 flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-club-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>المدة المتبقية</span>
                  <span className="font-medium">30 يوم</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>

              <Button variant="outline" className="w-full btn-effect">
                عرض تفاصيل الاشتراك
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover-effect md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-club-secondary" />
              الإحصائيات
            </CardTitle>
            <CardDescription>إحصائيات نشاطك في النادي</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                <div className="mb-2 rounded-full bg-club-primary/10 p-2">
                  <Award className="h-6 w-6 text-club-primary" />
                </div>
                <h3 className="text-2xl font-bold">85%</h3>
                <p className="text-sm text-muted-foreground">نسبة الحضور</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                <div className="mb-2 rounded-full bg-club-secondary/10 p-2">
                  <Dumbbell className="h-6 w-6 text-club-secondary" />
                </div>
                <h3 className="text-2xl font-bold">12</h3>
                <p className="text-sm text-muted-foreground">جلسة هذا الشهر</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                <div className="mb-2 rounded-full bg-club-accent/10 p-2">
                  <Calendar className="h-6 w-6 text-club-accent" />
                </div>
                <h3 className="text-2xl font-bold">3</h3>
                <p className="text-sm text-muted-foreground">برامج مسجل فيها</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="col-span-7 md:col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5 text-club-primary" />
              جلسات التدريب القادمة
            </CardTitle>
            <CardDescription>جلسات التدريب المجدولة لك</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="upcoming">الجلسات القادمة</TabsTrigger>
                <TabsTrigger value="history">سجل الحضور</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="mt-4 space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between border-b pb-4">
                    <div className="space-y-1">
                      <h4 className="font-semibold">{session.title}</h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(session.date).toLocaleDateString("ar-SA")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{session.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={session.coachAvatar || "/placeholder.svg"} alt={session.coach} />
                          <AvatarFallback>{session.coachInitials}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{session.coach}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="btn-effect">
                      <Dumbbell className="h-4 w-4 ml-2" />
                      تفاصيل الجلسة
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  عرض جميع الجلسات
                </Button>
              </TabsContent>
              <TabsContent value="history" className="mt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">تدريب القوة الصباحي</h4>
                        <Badge className="bg-club-success">حضرت</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">15 يونيو 2023 • 07:00 - 08:30</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">تمارين القلب والأوعية الدموية</h4>
                        <Badge variant="destructive">غائب</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">14 يونيو 2023 • 14:00 - 15:30</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">تدريب كمال الأجسام المسائي</h4>
                        <Badge className="bg-club-success">حضرت</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">13 يونيو 2023 • 18:00 - 19:30</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="col-span-7 md:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-club-accent" />
              الإشعارات
            </CardTitle>
            <CardDescription>آخر الإشعارات والتنبيهات</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-3 border-b pb-3">
                <div className={`${notification.iconBg} p-2 rounded-full mt-1`}>
                  <notification.icon className={`h-4 w-4 ${notification.iconColor}`} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-sm">{notification.title}</h4>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full btn-effect">
              <Bell className="h-4 w-4 ml-2" />
              عرض جميع الإشعارات
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
