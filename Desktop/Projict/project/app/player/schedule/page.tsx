import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlayerSchedulePage() {
  const upcomingSessions = [
    {
      id: "TS001",
      title: "تدريب القوة الصباحي",
      description: "التركيز على قوة الجزء العلوي من الجسم واستقرار العضلات الأساسية",
      time: "07:00 - 08:30",
      date: "2023-06-16",
      location: "القاعة الرئيسية",
      coach: "أحمد السعود",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "أس",
    },
    {
      id: "TS002",
      title: "تمارين القلب والأوعية الدموية",
      description: "تدريب فتري عالي الكثافة للياقة القلب والأوعية الدموية",
      time: "14:00 - 15:30",
      date: "2023-06-16",
      location: "غرفة الكارديو",
      coach: "فاطمة الزهراني",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "فز",
    },
    {
      id: "TS003",
      title: "تدريب كمال الأجسام المسائي",
      description: "التركيز على تضخيم العضلات وتحديد شكلها",
      time: "18:00 - 19:30",
      date: "2023-06-16",
      location: "غرفة الأوزان",
      coach: "خالد الحربي",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "خح",
    },
  ]

  const pastSessions = [
    {
      id: "TS004",
      title: "تدريب القوة الصباحي",
      time: "07:00 - 08:30",
      date: "2023-06-15",
      location: "القاعة الرئيسية",
      coach: "أحمد السعود",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "أس",
      status: "حضرت",
    },
    {
      id: "TS005",
      title: "تمارين القلب والأوعية الدموية",
      time: "14:00 - 15:30",
      date: "2023-06-14",
      location: "غرفة الكارديو",
      coach: "فاطمة الزهراني",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "فز",
      status: "غائب",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">جدول التدريب</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="week">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="عرض حسب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">اليوم</SelectItem>
              <SelectItem value="week">هذا الأسبوع</SelectItem>
              <SelectItem value="month">هذا الشهر</SelectItem>
              <SelectItem value="all">الكل</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="بحث عن جلسة..." className="w-full pr-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
          <span className="sr-only">تصفية</span>
        </Button>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">الجلسات القادمة</TabsTrigger>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pastSessions.map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{session.title}</CardTitle>
                    <Badge variant={session.status === "حضرت" ? "default" : "destructive"}>{session.status}</Badge>
                  </div>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
