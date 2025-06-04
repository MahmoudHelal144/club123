import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  FileEdit,
  Trash2,
  ClipboardCheck,
  User,
  MessageSquare,
  Dumbbell,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function TrainingSessionDetailsPage({ params }: { params: { id: string } }) {
  // في تطبيق حقيقي، سنقوم بجلب بيانات الجلسة من قاعدة البيانات باستخدام المعرف
  const session = {
    id: params.id,
    title: "تدريب القوة الصباحي",
    description: "التركيز على قوة الجزء العلوي من الجسم واستقرار العضلات الأساسية",
    date: "2023-06-16",
    time: "07:00 - 08:30",
    location: "القاعة الرئيسية",
    coach: "أحمد السعود",
    coachAvatar: "/avatars/coach.png",
    coachInitials: "أس",
    totalMembers: 15,
    presentMembers: 12,
    status: "قادم",
    type: "تدريب القوة",
    capacity: 20,
    equipment: ["أوزان حرة", "آلات تدريب", "كرات طبية", "حبال مقاومة"],
    notes: "يرجى إحضار زجاجة ماء وفوطة صغيرة. يفضل ارتداء ملابس رياضية مريحة.",
  }

  const attendees = [
    {
      id: "M001",
      name: "عبدالله الغامدي",
      avatar: "/avatars/player.png",
      initials: "عغ",
      status: "حاضر",
      attendance: 90,
    },
    {
      id: "M002",
      name: "سارة القحطاني",
      avatar: "/avatars/player-female.png",
      initials: "سق",
      status: "حاضر",
      attendance: 85,
    },
    {
      id: "M003",
      name: "محمد العتيبي",
      avatar: "/avatars/player.png",
      initials: "مع",
      status: "غائب",
      attendance: 70,
    },
    {
      id: "M004",
      name: "ليلى الدوسري",
      avatar: "/avatars/player-female.png",
      initials: "لد",
      status: "حاضر",
      attendance: 95,
    },
    {
      id: "M005",
      name: "فهد الشمري",
      avatar: "/avatars/player.png",
      initials: "فش",
      status: "حاضر",
      attendance: 80,
    },
  ]

  const previousSessions = [
    {
      date: "2023-06-09",
      attendanceRate: 85,
      presentMembers: 13,
      totalMembers: 15,
    },
    {
      date: "2023-06-02",
      attendanceRate: 80,
      presentMembers: 12,
      totalMembers: 15,
    },
    {
      date: "2023-05-26",
      attendanceRate: 90,
      presentMembers: 14,
      totalMembers: 15,
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/trainings">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">العودة</span>
            </Link>
          </Button>
          <h2 className="text-3xl font-bold tracking-tight gradient-text">تفاصيل الجلسة التدريبية</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <FileEdit className="h-4 w-4 ml-1" />
            تعديل
          </Button>
          <Button variant="destructive" className="flex items-center gap-1">
            <Trash2 className="h-4 w-4 ml-1" />
            حذف
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{session.title}</CardTitle>
                <CardDescription>{session.description}</CardDescription>
              </div>
              <Badge
                variant={session.status === "مكتمل" ? "default" : "outline"}
                className={session.status === "قادم" ? "border-club-primary text-club-primary" : ""}
              >
                {session.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">التاريخ</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(session.date).toLocaleDateString("ar-SA")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">الوقت</p>
                    <p className="text-sm text-muted-foreground">{session.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">المكان</p>
                    <p className="text-sm text-muted-foreground">{session.location}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">المدرب</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={session.coachAvatar || "/placeholder.svg"} alt={session.coach} />
                        <AvatarFallback>{session.coachInitials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{session.coach}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">نوع التدريب</p>
                    <p className="text-sm text-muted-foreground">{session.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">السعة</p>
                    <p className="text-sm text-muted-foreground">
                      {session.totalMembers}/{session.capacity} متدرب
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-medium">المعدات المطلوبة</h3>
              <div className="flex flex-wrap gap-2">
                {session.equipment.map((item, index) => (
                  <Badge key={index} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">ملاحظات</h3>
              <p className="text-sm text-muted-foreground">{session.notes}</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4 ml-1" />
              إرسال إشعار
            </Button>
            <Button className="flex items-center gap-1 btn-effect">
              <ClipboardCheck className="h-4 w-4 ml-1" />
              تسجيل الحضور
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>إحصائيات الجلسة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">نسبة الحضور</span>
                <span className="text-sm font-medium">
                  {Math.round((session.presentMembers / session.totalMembers) * 100)}%
                </span>
              </div>
              <Progress value={Math.round((session.presentMembers / session.totalMembers) * 100)} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>الحضور: {session.presentMembers}</span>
                <span>الإجمالي: {session.totalMembers}</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="text-sm font-medium">الجلسات السابقة</h3>
              <div className="space-y-4">
                {previousSessions.map((prevSession, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{new Date(prevSession.date).toLocaleDateString("ar-SA")}</span>
                      <span>{prevSession.attendanceRate}%</span>
                    </div>
                    <Progress value={prevSession.attendanceRate} className="h-1.5" />
                    <div className="flex justify-end text-xs text-muted-foreground">
                      <span>
                        {prevSession.presentMembers}/{prevSession.totalMembers} حاضر
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-club-primary" />
            المتدربين
          </CardTitle>
          <CardDescription>قائمة المتدربين المسجلين في الجلسة</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>المتدرب</TableHead>
                  <TableHead>رقم العضوية</TableHead>
                  <TableHead>نسبة الحضور</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead className="text-left">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendees.map((attendee) => (
                  <TableRow key={attendee.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={attendee.avatar || "/placeholder.svg"} alt={attendee.name} />
                          <AvatarFallback>{attendee.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{attendee.name}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{attendee.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={attendee.attendance} className="h-2 w-[100px]" />
                        <span className="text-sm">{attendee.attendance}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={attendee.status === "حاضر" ? "default" : "destructive"}
                        className={attendee.status === "حاضر" ? "bg-club-success" : ""}
                      >
                        {attendee.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-left">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          عرض الملف
                        </Button>
                        <Button size="sm" variant="ghost">
                          تغيير الحالة
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full caption-bottom text-sm">{children}</table>
    </div>
  )
}

function TableHeader({ children }: { children: React.ReactNode }) {
  return <thead className="[&_tr]:border-b">{children}</thead>
}

function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody className="[&_tr:last-child]:border-0">{children}</tbody>
}

function TableFooter({ children }: { children: React.ReactNode }) {
  return <tfoot className="border-t bg-muted/50 font-medium [&>tr]:last:border-b-0">{children}</tfoot>
}

function TableRow({ children, className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}
      {...props}
    >
      {children}
    </tr>
  )
}

function TableHead({ children, className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        "h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  )
}

function TableCell({ children, className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props}>
      {children}
    </td>
  )
}

function TableCaption({ children, className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return (
    <caption className={cn("mt-4 text-sm text-muted-foreground", className)} {...props}>
      {children}
    </caption>
  )
}

import { cn } from "@/lib/utils"
