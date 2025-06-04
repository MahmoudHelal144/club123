import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  CalendarIcon,
  Clock,
  MapPin,
  Plus,
  ChevronLeft,
  ChevronRight,
  Users,
  Filter,
  Search,
  Dumbbell,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SchedulePage() {
  // هذه البيانات ستأتي من قاعدة البيانات في التطبيق الحقيقي
  const weekDays = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleDateString("ar-SA", { month: "long", year: "numeric" })

  const sessions = [
    {
      id: "S001",
      title: "تدريب القوة الصباحي",
      day: "الأحد",
      date: "2023-06-18",
      time: "07:00 - 08:30",
      location: "القاعة الرئيسية",
      coach: "أحمد السعود",
      coachAvatar: "/avatars/coach.png",
      coachInitials: "أس",
      totalMembers: 15,
      status: "قادم",
    },
    {
      id: "S002",
      title: "تمارين القلب والأوعية الدموية",
      day: "الأحد",
      date: "2023-06-18",
      time: "14:00 - 15:30",
      location: "غرفة الكارديو",
      coach: "فاطمة الزهراني",
      coachAvatar: "/avatars/coach-female.png",
      coachInitials: "فز",
      totalMembers: 20,
      status: "قادم",
    },
    {
      id: "S003",
      title: "تدريب كمال الأجسام المسائي",
      day: "الأحد",
      date: "2023-06-18",
      time: "18:00 - 19:30",
      location: "غرفة الأوزان",
      coach: "خالد الحربي",
      coachAvatar: "/avatars/coach-2.png",
      coachInitials: "خح",
      totalMembers: 12,
      status: "قادم",
    },
    {
      id: "S004",
      title: "تدريب القوة الصباحي",
      day: "الاثنين",
      date: "2023-06-19",
      time: "07:00 - 08:30",
      location: "القاعة الرئيسية",
      coach: "أحمد السعود",
      coachAvatar: "/avatars/coach.png",
      coachInitials: "أس",
      totalMembers: 15,
      status: "قادم",
    },
    {
      id: "S005",
      title: "تمارين المرونة",
      day: "الاثنين",
      date: "2023-06-19",
      time: "10:00 - 11:30",
      location: "قاعة اليوغا",
      coach: "فاطمة الزهراني",
      coachAvatar: "/avatars/coach-female.png",
      coachInitials: "فز",
      totalMembers: 18,
      status: "قادم",
    },
    {
      id: "S006",
      title: "تدريب كمال الأجسام المسائي",
      day: "الاثنين",
      date: "2023-06-19",
      time: "18:00 - 19:30",
      location: "غرفة الأوزان",
      coach: "خالد الحربي",
      coachAvatar: "/avatars/coach-2.png",
      coachInitials: "خح",
      totalMembers: 12,
      status: "قادم",
    },
    {
      id: "S007",
      title: "تدريب القوة الصباحي",
      day: "الثلاثاء",
      date: "2023-06-20",
      time: "07:00 - 08:30",
      location: "القاعة الرئيسية",
      coach: "أحمد السعود",
      coachAvatar: "/avatars/coach.png",
      coachInitials: "أس",
      totalMembers: 15,
      status: "قادم",
    },
    {
      id: "S008",
      title: "تمارين القلب والأوعية الدموية",
      day: "الثلاثاء",
      date: "2023-06-20",
      time: "14:00 - 15:30",
      location: "غرفة الكارديو",
      coach: "فاطمة الزهراني",
      coachAvatar: "/avatars/coach-female.png",
      coachInitials: "فز",
      totalMembers: 20,
      status: "قادم",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight gradient-text">جدول التدريب</h2>
          <p className="text-muted-foreground">إدارة جدول جلسات التدريب في النادي</p>
        </div>
        <Button className="flex items-center gap-1 btn-effect">
          <Plus className="h-4 w-4 ml-1" />
          إضافة جلسة جديدة
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="بحث عن جلسة..." className="w-full pr-8" />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="المدرب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع المدربين</SelectItem>
              <SelectItem value="ahmed">أحمد السعود</SelectItem>
              <SelectItem value="fatima">فاطمة الزهراني</SelectItem>
              <SelectItem value="khalid">خالد الحربي</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="نوع التدريب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع الأنواع</SelectItem>
              <SelectItem value="strength">تدريب القوة</SelectItem>
              <SelectItem value="cardio">تمارين القلب</SelectItem>
              <SelectItem value="bodybuilding">كمال الأجسام</SelectItem>
              <SelectItem value="flexibility">تمارين المرونة</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="flex-shrink-0">
            <Filter className="h-4 w-4" />
            <span className="sr-only">تصفية</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="week" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-3 md:inline-flex">
          <TabsTrigger value="week">الأسبوع</TabsTrigger>
          <TabsTrigger value="day">اليوم</TabsTrigger>
          <TabsTrigger value="month">الشهر</TabsTrigger>
        </TabsList>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <h3 className="text-lg font-semibold">{currentMonth}</h3>
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              اليوم
            </Button>
          </div>
        </div>

        <TabsContent value="week" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <div className="grid grid-cols-7 border-b">
                {weekDays.map((day) => (
                  <div key={day} className="p-2 text-center font-medium border-l last:border-l-0 bg-muted/50">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 min-h-[600px] border-b">
                {weekDays.map((day) => (
                  <div key={day} className="border-l last:border-l-0 p-2">
                    <div className="space-y-2">
                      {sessions
                        .filter((session) => session.day === day)
                        .map((session) => (
                          <div
                            key={session.id}
                            className="rounded-md border p-2 bg-club-primary/5 hover:bg-club-primary/10 transition-colors cursor-pointer"
                          >
                            <div className="font-medium text-sm">{session.title}</div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{session.time}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              <span>{session.location}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <Avatar className="h-4 w-4">
                                <AvatarImage src={session.coachAvatar || "/placeholder.svg"} alt={session.coach} />
                                <AvatarFallback className="text-[8px]">{session.coachInitials}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs">{session.coach}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="day" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>جدول اليوم</CardTitle>
              <CardDescription>جلسات التدريب المجدولة لليوم الحالي</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sessions
                  .filter((session) => session.day === "الأحد")
                  .map((session) => (
                    <div key={session.id} className="flex items-center justify-between border-b pb-4">
                      <div className="space-y-1">
                        <h4 className="font-semibold">{session.title}</h4>
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
                            <span>{session.totalMembers} متدرب</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={session.coachAvatar || "/placeholder.svg"} alt={session.coach} />
                            <AvatarFallback>{session.coachInitials}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">المدرب: {session.coach}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          تعديل
                        </Button>
                        <Button size="sm">تسجيل الحضور</Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="month" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>جدول الشهر</CardTitle>
              <CardDescription>عرض جلسات التدريب لشهر كامل</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-96 border rounded-md">
                <p className="text-muted-foreground">سيتم إضافة عرض الشهر قريباً</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-club-primary" />
            البرامج التدريبية المتكررة
          </CardTitle>
          <CardDescription>البرامج التدريبية المتكررة في النادي</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-4 card-hover-effect">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">برنامج اللياقة للمبتدئين</h3>
                <Badge variant="outline" className="border-club-primary text-club-primary">
                  نشط
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                مقدمة في اللياقة البدنية والتمارين الأساسية للقادمين الجدد
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span>الاثنين، الأربعاء، الجمعة</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>09:00 - 10:30</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>غرفة التدريب 1</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/avatars/coach-female.png" alt="نورة القحطاني" />
                    <AvatarFallback>نق</AvatarFallback>
                  </Avatar>
                  <span>المدرب: نورة القحطاني</span>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Badge variant="outline">8 متدربين</Badge>
                <Button variant="outline" size="sm">
                  تعديل البرنامج
                </Button>
              </div>
            </div>

            <div className="rounded-lg border p-4 card-hover-effect">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">كمال الأجسام المتقدم</h3>
                <Badge variant="outline" className="border-club-primary text-club-primary">
                  نشط
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">تدريب مكثف لبناء الأجسام ذوي الخبرة</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span>الثلاثاء، الخميس، السبت</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>16:00 - 17:30</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>غرفة الأوزان</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/avatars/coach.png" alt="أحمد السعود" />
                    <AvatarFallback>أس</AvatarFallback>
                  </Avatar>
                  <span>المدرب: أحمد السعود</span>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Badge variant="outline">10 متدربين</Badge>
                <Button variant="outline" size="sm">
                  تعديل البرنامج
                </Button>
              </div>
            </div>

            <div className="rounded-lg border p-4 card-hover-effect">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">لياقة النساء</h3>
                <Badge variant="outline" className="border-club-primary text-club-primary">
                  نشط
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">برنامج لياقة متخصص للنساء</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span>الاثنين، الأربعاء، الجمعة</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>11:00 - 12:30</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>غرفة التدريب 2</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/avatars/coach-female.png" alt="فاطمة الزهراني" />
                    <AvatarFallback>فز</AvatarFallback>
                  </Avatar>
                  <span>المدرب: فاطمة الزهراني</span>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Badge variant="outline">15 متدربة</Badge>
                <Button variant="outline" size="sm">
                  تعديل البرنامج
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
