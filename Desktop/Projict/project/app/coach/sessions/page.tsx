import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Search, Filter, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoachSessionsPage() {
  const upcomingSessions = [
    {
      id: "TS001",
      title: "تدريب القوة الصباحي",
      description: "التركيز على قوة الجزء العلوي من الجسم واستقرار العضلات الأساسية",
      time: "07:00 - 08:30",
      date: "2023-06-16",
      location: "القاعة الرئيسية",
      totalMembers: 15,
    },
    {
      id: "TS002",
      title: "تمارين القلب والأوعية الدموية",
      description: "تدريب فتري عالي الكثافة للياقة القلب والأوعية الدموية",
      time: "14:00 - 15:30",
      date: "2023-06-16",
      location: "غرفة الكارديو",
      totalMembers: 20,
    },
    {
      id: "TS003",
      title: "تدريب كمال الأجسام المسائي",
      description: "التركيز على تضخيم العضلات وتحديد شكلها",
      time: "18:00 - 19:30",
      date: "2023-06-16",
      location: "غرفة الأوزان",
      totalMembers: 12,
    },
  ]

  const recurringPrograms = [
    {
      id: "RP001",
      title: "برنامج اللياقة للمبتدئين",
      description: "مقدمة في اللياقة البدنية والتمارين الأساسية للقادمين الجدد",
      schedule: "الاثنين، الأربعاء، الجمعة",
      time: "09:00 - 10:30",
      location: "غرفة التدريب 1",
      totalMembers: 8,
      status: "نشط",
    },
    {
      id: "RP002",
      title: "كمال الأجسام المتقدم",
      description: "تدريب مكثف لبناء الأجسام ذوي الخبرة",
      schedule: "الثلاثاء، الخميس، السبت",
      time: "16:00 - 17:30",
      location: "غرفة الأوزان",
      totalMembers: 10,
      status: "نشط",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">جلساتي التدريبية</h2>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="بحث عن جلسة..." className="w-full pr-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="تصفية حسب النوع" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع الأنواع</SelectItem>
            <SelectItem value="strength">تدريب القوة</SelectItem>
            <SelectItem value="cardio">تمارين القلب</SelectItem>
            <SelectItem value="bodybuilding">كمال الأجسام</SelectItem>
            <SelectItem value="flexibility">تمارين المرونة</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
          <span className="sr-only">تصفية</span>
        </Button>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">الجلسات القادمة</TabsTrigger>
          <TabsTrigger value="recurring">البرامج المتكررة</TabsTrigger>
          <TabsTrigger value="past">الجلسات السابقة</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingSessions.map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <CardTitle>{session.title}</CardTitle>
                  <CardDescription>{session.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{new Date(session.date).toLocaleDateString("ar-SA")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-1 col-span-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{session.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{session.totalMembers} متدرب</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">عرض التفاصيل</Button>
                  <Button>تسجيل الحضور</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="recurring" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recurringPrograms.map((program) => (
              <Card key={program.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{program.title}</CardTitle>
                    <Badge variant="outline" className="border-green-500 text-green-500">
                      {program.status}
                    </Badge>
                  </div>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{program.schedule}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{program.time}</span>
                    </div>
                    <div className="flex items-center gap-1 col-span-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{program.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{program.totalMembers} متدرب</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">عرض التفاصيل</Button>
                  <Button variant="outline">عرض المتدربين</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="flex items-center justify-center h-40 border rounded-md">
            <p className="text-muted-foreground">اختر نطاق تاريخ لعرض الجلسات السابقة</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
