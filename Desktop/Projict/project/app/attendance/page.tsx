import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Search, Filter, Download, CheckCircle2, XCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AttendancePage() {
  const sessions = [
    {
      id: "TS001",
      title: "تدريب القوة الصباحي",
      time: "07:00 - 08:30",
      date: "2023-06-15",
      location: "القاعة الرئيسية",
      coach: "أحمد السعود",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "أس",
      totalMembers: 15,
      presentMembers: 12,
    },
    {
      id: "TS002",
      title: "تمارين الكارديو بعد الظهر",
      time: "14:00 - 15:30",
      date: "2023-06-15",
      location: "غرفة الكارديو",
      coach: "فاطمة الزهراني",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "فز",
      totalMembers: 20,
      presentMembers: 18,
    },
    {
      id: "TS003",
      title: "تدريب كمال الأجسام المسائي",
      time: "18:00 - 19:30",
      date: "2023-06-15",
      location: "غرفة الأثقال",
      coach: "خالد الحربي",
      coachAvatar: "/placeholder.svg?height=40&width=40",
      coachInitials: "خح",
      totalMembers: 12,
      presentMembers: 0,
      status: "Upcoming",
    },
  ]

  const members = [
    {
      id: "M001",
      name: "عبدالله الغامدي",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "عغ",
      status: "Present",
    },
    {
      id: "M002",
      name: "سارة القحطاني",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "سق",
      status: "Present",
    },
    {
      id: "M003",
      name: "محمد العتيبي",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "مع",
      status: "Absent",
    },
    {
      id: "M004",
      name: "ليلى الدوسري",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "لد",
      status: "Present",
    },
    {
      id: "M005",
      name: "فهد الشمري",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "فش",
      status: "Present",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">الحضور</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="today">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="تحديد التاريخ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">اليوم</SelectItem>
              <SelectItem value="yesterday">الأمس</SelectItem>
              <SelectItem value="thisWeek">هذا الأسبوع</SelectItem>
              <SelectItem value="lastWeek">الأسبوع الماضي</SelectItem>
              <SelectItem value="custom">نطاق مخصص</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">تحميل</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="sessions">
        <TabsList>
          <TabsTrigger value="sessions">جلسات التدريب</TabsTrigger>
          <TabsTrigger value="members">حسب العضو</TabsTrigger>
        </TabsList>
        <TabsContent value="sessions" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sessions.map((session) => (
              <Card key={session.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{session.title}</CardTitle>
                    {session.status === "Upcoming" ? (
                      <Badge variant="outline" className="border-blue-500 text-blue-500">
                        قادم
                      </Badge>
                    ) : (
                      <Badge>{Math.round((session.presentMembers / session.totalMembers) * 100)}% حضور</Badge>
                    )}
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(session.date).toLocaleDateString("ar-SA")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
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

                  {session.status === "Upcoming" ? (
                    <Button className="w-full">تسجيل الحضور</Button>
                  ) : (
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="font-medium">{session.presentMembers}</span>
                        <span className="text-muted-foreground">/{session.totalMembers} حاضر</span>
                      </div>
                      <Button variant="outline">عرض التفاصيل</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="members">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>الحضور حسب العضو - تمارين الكارديو بعد الظهر</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">18</span>/20 حاضر
                  </div>
                  <Badge>90% حضور</Badge>
                </div>
              </div>
              <CardDescription className="flex items-center gap-1 flex-row-reverse justify-end">
                <Calendar className="h-3 w-3" />
                <span>يونيو 15, 2023</span> •
                <Clock className="h-3 w-3 mr-1 ml-0" />
                <span>14:00 - 15:30</span> •
                <MapPin className="h-3 w-3 mr-1 ml-0" />
                <span>غرفة الكارديو</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-4 flex-row-reverse">
                <div className="relative flex-1">
                  <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="البحث عن أعضاء..." className="w-full pr-8 pl-0" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">تصفية</span>
                </Button>
              </div>

              <div className="space-y-4">
                {members.map((member) => (
                  <div key={member.id} className="flex items-center justify-between border-b pb-3 flex-row-reverse">
                    <div className="flex items-center gap-3 flex-row-reverse">
                      <Avatar>
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <div className="text-right">
                        <p className="font-medium">{member.name}</p>
                        <p className="text-xs text-muted-foreground">المعرف: {member.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-row-reverse">
                      {member.status === "Present" ? (
                        <>
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <span className="font-medium text-green-500">حاضر</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="font-medium text-red-500">غائب</span>
                        </>
                      )}
                      <Button variant="ghost" size="sm">
                        تغيير
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-4">
                <Button>حفظ الحضور</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
