import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CalendarDays,
  CreditCard,
  DollarSign,
  Users,
  Dumbbell,
  ClipboardCheck,
  AlertTriangle,
  TrendingUp,
  Activity,
  Award,
} from "lucide-react"
import { OverviewChart } from "@/components/dashboard/overview-chart"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ActivityCard } from "@/components/dashboard/activity-card"
import { ChartCard } from "@/components/dashboard/chart-card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const recentActivities = [
    {
      icon: ClipboardCheck,
      iconColor: "text-green-500",
      iconBg: "bg-green-100",
      title: "تم تسجيل الحضور",
      description: "قام المدرب أحمد بتسجيل الحضور لجلسة الصباح",
      time: "منذ 10 دقائق",
    },
    {
      icon: CreditCard,
      iconColor: "text-club-primary",
      iconBg: "bg-club-primary/10",
      title: "تم تجديد الاشتراك",
      description: "قام خالد الحربي بتجديد اشتراكه",
      time: "منذ ساعة واحدة",
      user: {
        name: "خالد الحربي",
        avatar: "/avatars/player.png",
        initials: "خح",
      },
    },
    {
      icon: Users,
      iconColor: "text-club-secondary",
      iconBg: "bg-club-secondary/10",
      title: "تمت إضافة عضو جديد",
      description: "تمت إضافة سارة القحطاني كعضو جديد",
      time: "منذ 3 ساعات",
      user: {
        name: "سارة القحطاني",
        avatar: "/avatars/player-female.png",
        initials: "سق",
      },
    },
    {
      icon: Dumbbell,
      iconColor: "text-club-accent",
      iconBg: "bg-club-accent/10",
      title: "جلسة تدريبية جديدة",
      description: "تم إنشاء جلسة تدريب القوة المسائية",
      time: "منذ 5 ساعات",
    },
  ]

  const subscriptions = [
    {
      name: "محمد العتيبي",
      email: "m.otaibi@example.com",
      daysLeft: 2,
      avatar: "/avatars/player.png",
      initials: "مع",
    },
    {
      name: "فاطمة الزهراني",
      email: "f.zahrani@example.com",
      daysLeft: 3,
      avatar: "/avatars/player-female.png",
      initials: "فز",
    },
    {
      name: "عبدالله الغامدي",
      email: "a.ghamdi@example.com",
      daysLeft: 5,
      avatar: "/avatars/player.png",
      initials: "عغ",
    },
    {
      name: "نورة القحطاني",
      email: "n.qahtani@example.com",
      daysLeft: 7,
      avatar: "/avatars/player-female.png",
      initials: "نق",
    },
  ]

  return (
    <div className="flex-1 space-y-6 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight gradient-text">لوحة التحكم</h2>
          <p className="text-muted-foreground">مرحباً بك في نظام إدارة النادي الرياضي</p>
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="إجمالي الأعضاء"
          value="245"
          trend={{ value: "12", isPositive: true }}
          icon={Users}
          iconColor="text-club-primary"
          iconBgColor="bg-club-primary/10"
        />
        <StatsCard
          title="الاشتراكات النشطة"
          value="218"
          trend={{ value: "4", isPositive: true }}
          icon={CreditCard}
          iconColor="text-club-secondary"
          iconBgColor="bg-club-secondary/10"
        />
        <StatsCard
          title="جلسات اليوم"
          value="8"
          description="3 مكتملة، 5 قادمة"
          icon={Dumbbell}
          iconColor="text-club-accent"
          iconBgColor="bg-club-accent/10"
        />
        <StatsCard
          title="نسبة الحضور اليوم"
          value="78%"
          trend={{ value: "5%", isPositive: true }}
          icon={ClipboardCheck}
          iconColor="text-club-success"
          iconBgColor="bg-club-success/10"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">
            نظرة عامة
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">
            التحليلات
          </TabsTrigger>
          <TabsTrigger value="reports" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">
            التقارير
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-7">
            <ChartCard
              title="نظرة عامة على الحضور"
              description="نسبة حضور الأعضاء خلال آخر 30 يوم"
              icon={TrendingUp}
              className="col-span-7 md:col-span-4"
            >
              <OverviewChart />
            </ChartCard>

            <ActivityCard
              title="الأنشطة الأخيرة"
              description="آخر الأنشطة في النظام"
              activities={recentActivities}
              className="col-span-7 md:col-span-3"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-7">
            <Card className="col-span-7 md:col-span-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-1">
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-club-warning" />
                    الاشتراكات التي ستنتهي قريباً
                  </CardTitle>
                  <CardDescription>الاشتراكات التي ستنتهي خلال الـ 7 أيام القادمة</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subscriptions.map((subscription, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={subscription.avatar || "/placeholder.svg"} alt={subscription.name} />
                          <AvatarFallback>{subscription.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{subscription.name}</p>
                          <p className="text-xs text-muted-foreground">{subscription.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-club-warning">
                          <CalendarDays className="h-4 w-4" />
                          <span className="text-sm font-medium">متبقي {subscription.daysLeft} أيام</span>
                        </div>
                        <Button size="sm" variant="outline" className="btn-effect">
                          تجديد
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-7 md:col-span-3">
              <CardHeader>
                <CardTitle>الإيرادات الشهرية</CardTitle>
                <CardDescription>الإيرادات من الاشتراكات</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-3xl font-bold text-emerald-600">
                      <DollarSign className="h-6 w-6" />
                      <span>8,450</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="text-emerald-600 font-medium">+12.5%</span> مقارنة بالشهر الماضي
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-club-primary">قياسية</Badge>
                        <span className="text-sm">الباقة القياسية</span>
                      </div>
                      <span className="font-medium">4,250 ريال</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-club-secondary">متميزة</Badge>
                        <span className="text-sm">الباقة المتميزة</span>
                      </div>
                      <span className="font-medium">3,600 ريال</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-club-accent">أساسية</Badge>
                        <span className="text-sm">الباقة الأساسية</span>
                      </div>
                      <span className="font-medium">600 ريال</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-2">
                    <Activity className="h-4 w-4 ml-2" />
                    عرض التقرير المفصل
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-club-primary" />
                  أفضل المدربين أداءً
                </CardTitle>
                <CardDescription>بناءً على نسبة الحضور والتقييمات</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-club-primary">
                      <AvatarImage src="/avatars/coach.png" alt="أحمد السعود" />
                      <AvatarFallback>أس</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">أحمد السعود</p>
                      <p className="text-xs text-muted-foreground">مدرب القوة واللياقة</p>
                    </div>
                    <Badge className="mr-auto bg-club-primary">95%</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/avatars/coach-female.png" alt="فاطمة الزهراني" />
                      <AvatarFallback>فز</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">فاطمة الزهراني</p>
                      <p className="text-xs text-muted-foreground">مدربة الكارديو</p>
                    </div>
                    <Badge className="mr-auto bg-club-secondary">92%</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/avatars/coach-2.png" alt="خالد الحربي" />
                      <AvatarFallback>خح</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">خالد الحربي</p>
                      <p className="text-xs text-muted-foreground">مدرب كمال الأجسام</p>
                    </div>
                    <Badge className="mr-auto bg-club-accent">88%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-club-secondary" />
                  الجلسات الأكثر حضوراً
                </CardTitle>
                <CardDescription>الجلسات ذات أعلى نسبة حضور</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">تدريب القوة الصباحي</p>
                      <p className="text-xs text-muted-foreground">أحمد السعود</p>
                    </div>
                    <Badge className="bg-club-success">95%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">تمارين القلب والأوعية الدموية</p>
                      <p className="text-xs text-muted-foreground">فاطمة الزهراني</p>
                    </div>
                    <Badge className="bg-club-success">92%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">تدريب كمال الأجسام المسائي</p>
                      <p className="text-xs text-muted-foreground">خالد الحربي</p>
                    </div>
                    <Badge className="bg-club-success">90%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-club-accent" />
                  الأعضاء الجدد
                </CardTitle>
                <CardDescription>آخر الأعضاء المنضمين للنادي</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/avatars/player.png" alt="عبدالله الغامدي" />
                      <AvatarFallback>عغ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">عبدالله الغامدي</p>
                      <p className="text-xs text-muted-foreground">انضم اليوم</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/avatars/player-female.png" alt="سارة القحطاني" />
                      <AvatarFallback>سق</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">سارة القحطاني</p>
                      <p className="text-xs text-muted-foreground">انضمت بالأمس</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/avatars/player-2.png" alt="فهد الشمري" />
                      <AvatarFallback>فش</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">فهد الشمري</p>
                      <p className="text-xs text-muted-foreground">انضم منذ 3 أيام</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="flex items-center justify-center h-96 border rounded-lg">
            <p className="text-muted-foreground">سيتم إضافة محتوى التحليلات قريباً</p>
          </div>
        </TabsContent>

        <TabsContent value="reports">
          <div className="flex items-center justify-center h-96 border rounded-lg">
            <p className="text-muted-foreground">سيتم إضافة محتوى التقارير قريباً</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
