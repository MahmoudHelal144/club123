import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Search, Filter, CheckCircle2, XCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CoachAttendancePage() {
  const sessions = [
    {
      id: "TS001",
      title: "تدريب القوة الصباحي",
      time: "07:00 - 08:30",
      date: "2023-06-15",
      location: "القاعة الرئيسية",
      totalMembers: 15,
      presentMembers: 12,
    },
    {
      id: "TS002",
      title: "تمارين القلب والأوعية الدموية",
      time: "14:00 - 15:30",
      date: "2023-06-15",
      location: "غرفة الكارديو",
      totalMembers: 20,
      presentMembers: 0,
      status: "قادم",
    },
    {
      id: "TS003",
      title: "تدريب كمال الأجسام المسائي",
      time: "18:00 - 19:30",
      date: "2023-06-15",
      location: "غرفة الأوزان",
      totalMembers: 12,
      presentMembers: 0,
      status: "قادم",
    },
  ]

  const members = [
    {
      id: "M001",
      name: "عبدالله الغامدي",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "عغ",
      status: "حاضر",
    },
    {
      id: "M002",
      name: "سارة القحطاني",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "سق",
      status: "حاضر",
    },
    {
      id: "M003",
      name: "محمد العتيبي",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "مع",
      status: "غائب",
    },
    {
      id: "M004",
      name: "ليلى الدوسري",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "لد",
      status: "حاضر",
    },
    {
      id: "M005",
      name: "فهد الشمري",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "فش",
      status: "حاضر",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">تسجيل الحضور</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="today">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="اختر التاريخ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">اليوم</SelectItem>
              <SelectItem value="yesterday">الأمس</SelectItem>
              <SelectItem value="thisWeek">هذا الأسبوع</SelectItem>
              <SelectItem value="lastWeek">الأسبوع الماضي</SelectItem>
              <SelectItem value="custom">نطاق مخصص</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session) => (
          <Card key={session.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle>{session.title}</CardTitle>
                {session.status === "قادم" ? (
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

              {session.status === "قادم" ? (
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

      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>تمارين القلب والأوعية الدموية - تسجيل الحضور</CardTitle>
            <Badge variant="outline" className="border-blue-500 text-blue-500">
              قادم
            </Badge>
          </div>
          <CardDescription className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            15 يونيو 2023 •
            <Clock className="h-3 w-3 mr-1" />
            14:00 - 15:30 •
            <MapPin className="h-3 w-3 mr-1" />
            غرفة الكارديو
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="بحث عن متدرب..." className="w-full pr-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">تصفية</span>
            </Button>
          </div>

          <div className="space-y-4">
            {members.map((member) => (
              <div key={member.id} className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground">رقم العضوية: {member.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex items-center gap-1 ${
                      member.status === "حاضر" ? "text-green-500" : "text-muted-foreground"
                    }`}
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    <span>حاضر</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex items-center gap-1 ${
                      member.status === "غائب" ? "text-red-500" : "text-muted-foreground"
                    }`}
                  >
                    <XCircle className="h-5 w-5" />
                    <span>غائب</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-4">
            <Button>حفظ سجل الحضور</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
