import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ClipboardCheck, Dumbbell, MapPin, Users, TrendingUp, Calendar } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Progress } from "@/components/ui/progress"
import { ChartCard } from "@/components/dashboard/chart-card"

export default function CoachDashboardPage() {
  const todaySessions = [
    {
      id: "TS001",
      title: "تدريب القوة الصباحي",
      time: "07:00 - 08:30",
      location: "القاعة الرئيسية",
      totalMembers: 15,
      presentMembers: 12,
      status: "مكتمل",
    },
    {
      id: "TS002",
      title: "تمارين القلب والأوعية الدموية",
      time: "14:00 - 15:30",
      location: "غرفة الكارديو",
      totalMembers: 20,
      presentMembers: 0,
      status: "قادم",
    },
    {
      id: "TS003",
      title: "تدريب كمال الأجسام المسائي",
      time: "18:00 - 19:30",
      location: "غرفة الأوزان",
      totalMembers: 12,
      presentMembers: 0,
      status: "قادم",
    },
  ]

  const recentTrainees = [
    {
      id: "M001",
      name: "عبدالله الغامدي",
      avatar: "/avatars/player.png",
      initials: "عغ",
      attendance: "حاضر",
      lastSession: "تدريب القوة الصباحي",
    },
    {
      id: "M002",
      name: "سارة القحطاني",
      avatar: "/avatars/player-female.png",
      initials: "سق",
      attendance: "حاضر",
      lastSession: "تدريب القوة الصباحي",
    },
    {
      id: "M003",
      name: "محمد العتيبي",
      avatar: "/avatars/player.png",
      initials: "مع",
      attendance: "غائب",
      lastSession: "تدريب القوة الصباحي",
    },
    {
      id: "M004",
      name: "ليلى الدوسري",
      avatar: "/avatars/player-female.png",
      initials: "لد",
      attendance: "حاضر",
      lastSession: "تدريب القوة الصباحي",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight gradient-text">لوحة تحكم المدرب</h2>
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="جلسات اليوم"
          value="3"
          description="1 مكتمل، 2 قادم"
          icon={Dumbbell}
          iconColor="text-club-primary"
          iconBgColor="bg-club-primary/10"
        />
        <StatsCard
          title="إجمالي المتدربين"
          value="47"
          description="في جميع الجلسات"
          icon={Users}
          iconColor="text-club-secondary"
          iconBgColor="bg-club-secondary/10"
        />
        <StatsCard
          title="نسبة الحضور"
          value="80%"
          trend={{ value: "5%", isPositive: true }}
          icon={ClipboardCheck}
          iconColor="text-club-accent"
          iconBgColor="bg-club-accent/10"
        />
        <StatsCard
          title="الجلسات القادمة"
          value="12"
          description="خلال الأسبوع القادم"
          icon={Calendar}
          iconColor="text-club-success"
          iconBgColor="bg-club-success/10"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="col-span-7 md:col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5 text-club-primary" />
              جلسات اليوم
            </CardTitle>
            <CardDescription>جلسات التدريب المجدولة لهذا اليوم</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {todaySessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between border-b pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{session.title}</h4>
                    {session.status === "مكتمل" ? (
                      <Badge className="bg-club-success">مكتمل</Badge>
                    ) : (
                      <Badge variant="outline" className="border-club-primary text-club-primary">
                        قادم
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{session.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>
                        {session.status === "مكتمل"
                          ? `${session.presentMembers}/${session.totalMembers} حاضر`
                          : `${session.totalMembers} متدرب`}
                      </span>
                    </div>
                  </div>
                </div>
                {session.status === "مكتمل" ? (
                  <Button variant="outline" className="btn-effect">
                    عرض التفاصيل
                  </Button>
                ) : (
                  <Button className="btn-effect">تسجيل الحضور</Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="col-span-7 md:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-club-secondary" />
              المتدربين الأخيرين
            </CardTitle>
            <CardDescription>آخر المتدربين في جلساتك</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentTrainees.map((trainee) => (
              <div key={trainee.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={trainee.avatar || "/placeholder.svg"} alt={trainee.name} />
                    <AvatarFallback>{trainee.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{trainee.name}</p>
                    <p className="text-xs text-muted-foreground">{trainee.lastSession}</p>
                  </div>
                </div>
                <Badge
                  variant={trainee.attendance === "حاضر" ? "default" : "destructive"}
                  className={trainee.attendance === "حاضر" ? "bg-club-success" : ""}
                >
                  {trainee.attendance}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full btn-effect">
              عرض جميع المتدربين
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ChartCard title="إحصائيات الحضور" description="نسبة الحضور في جلساتك خلال الشهر الحالي" icon={TrendingUp}>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-club-primary"></div>
                  <span className="text-sm">تدريب القوة الصباحي</span>
                </div>
                <span className="font-medium">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-club-secondary"></div>
                  <span className="text-sm">تمارين القلب والأوعية الدموية</span>
                </div>
                <span className="font-medium">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-club-accent"></div>
                  <span className="text-sm">تدريب كمال الأجسام المسائي</span>
                </div>
                <span className="font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-club-success"></div>
                  <span className="text-sm">تمارين المرونة</span>
                </div>
                <span className="font-medium">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
          </div>
        </ChartCard>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-club-accent" />
              الجدول الأسبوعي
            </CardTitle>
            <CardDescription>جلسات التدريب المجدولة للأسبوع القادم</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">الأحد</p>
                  <p className="text-xs text-muted-foreground">16 يونيو 2023</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-club-primary text-club-primary">
                    3 جلسات
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">الاثنين</p>
                  <p className="text-xs text-muted-foreground">17 يونيو 2023</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-club-primary text-club-primary">
                    2 جلسات
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">الثلاثاء</p>
                  <p className="text-xs text-muted-foreground">18 يونيو 2023</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-club-primary text-club-primary">
                    2 جلسات
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">الأربعاء</p>
                  <p className="text-xs text-muted-foreground">19 يونيو 2023</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-club-primary text-club-primary">
                    3 جلسات
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">الخميس</p>
                  <p className="text-xs text-muted-foreground">20 يونيو 2023</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-club-primary text-club-primary">
                    2 جلسات
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
