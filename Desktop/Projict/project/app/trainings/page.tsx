import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Plus, Search, Filter, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrainingsPage() {
  const upcomingSessions = [
    {
      id: "TS001",
      title: "تدريب القوة الصباحي",
      description: "التركيز على قوة الجزء العلوي من الجسم واستقرار الجذع",
      time: "07:00 - 08:30",
      date: "2023-06-16",
      location: "القاعة الرئيسية",
      coach: "أحمد السعود",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "أس",
      totalMembers: 15,
    },
    {
      id: "TS002",
      title: "تمارين الكارديو بعد الظهر",
      description: "تدريب متقطع عالي الكثافة للياقة القلب والأوعية الدموية",
      time: "14:00 - 15:30",
      date: "2023-06-16",
      location: "غرفة الكارديو",
      coach: "فاطمة الزهراني",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "فز",
      totalMembers: 20,
    },
    {
      id: "TS003",
      title: "تدريب كمال الأجسام المسائي",
      description: "التركيز على تضخم العضلات وتحديدها",
      time: "18:00 - 19:30",
      date: "2023-06-16",
      location: "غرفة الأثقال",
      coach: "خالد الحربي",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "خح",
      totalMembers: 12,
    },
  ]

  const recurringPrograms = [
    {
      id: "RP001",
      title: "برنامج لياقة المبتدئين",
      description: "مقدمة في اللياقة البدنية والتمارين الأساسية للوافدين الجدد",
      schedule: "الاثنين، الأربعاء، الجمعة",
      time: "09:00 - 10:30",
      location: "غرفة التدريب 1",
      coach: "نورة القحطاني",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "نق",
      totalMembers: 8,
      status: "نشط",
    },
    {
      id: "RP002",
      title: "كمال الأجسام المتقدم",
      description: "تدريب مكثف للاعبي كمال الأجسام ذوي الخبرة",
      schedule: "الثلاثاء، الخميس، السبت",
      time: "16:00 - 17:30",
      location: "غرفة الأثقال",
      coach: "عمر العتيبي",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "عم",
      totalMembers: 10,
      status: "نشط",
    },
    {
      id: "RP003",
      title: "لياقة السيدات",
      description: "برنامج لياقة متخصص للسيدات",
      schedule: "الاثنين، الأربعاء، الجمعة",
      time: "11:00 - 12:30",
      location: "غرفة التدريب 2",
      coach: "فاطمة الزهراني",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "فز",
      totalMembers: 15,
      status: "نشط",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">جلسات التدريب</h2>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          جلسة جديدة
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="البحث عن جلسات..." className="w-full pr-8 pl-0" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="تصفية حسب المدرب" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع المدربين</SelectItem>
            <SelectItem value="ahmed">أحمد السعود</SelectItem>
            <SelectItem value="fatima">فاطمة الزهراني</SelectItem>
            <SelectItem value="khalid">خالد الحربي</SelectItem>
            <SelectItem value="noura">نورة القحطاني</SelectItem>
            <SelectItem value="omar">عمر العتيبي</SelectItem>
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

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={session.coachAvatar || "/placeholder.svg"} alt={session.coach} />
                        <AvatarFallback>{session.coachInitials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{session.coach}</p>
                        <p className="text-xs text-muted-foreground">المدرب</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{session.totalMembers} أعضاء</span>
                    </div>
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

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={program.coachAvatar || "/placeholder.svg"} alt={program.coach} />
                        <AvatarFallback>{program.coachInitials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{program.coach}</p>
                        <p className="text-xs text-muted-foreground">المدرب</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{program.totalMembers} أعضاء</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">عرض التفاصيل</Button>
                  <Button variant="outline">تعديل البرنامج</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="flex items-center justify-center h-40 border rounded-md">
            <p className="text-muted-foreground">حدد نطاقاً زمنياً لعرض الجلسات السابقة</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
