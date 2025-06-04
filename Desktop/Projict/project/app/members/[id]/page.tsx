import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  User,
  FileEdit,
  ArrowLeft,
  ClipboardCheck,
  Dumbbell,
  BarChart,
  MessageSquare,
  UserCog,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function MemberDetailsPage({ params }: { params: { id: string } }) {
  // في تطبيق حقيقي، سنقوم بجلب بيانات العضو من قاعدة البيانات باستخدام المعرف
  const member = {
    id: params.id,
    name: "أحمد السعود",
    email: "ahmed@example.com",
    phone: "+966 50 123 4567",
    status: "نشط",
    joinDate: "2023-01-15",
    expiryDate: "2023-07-15",
    avatar: "/avatars/player.png",
    initials: "أس",
    plan: "قياسية",
    coach: "خالد الحربي",
    address: "الرياض، حي النزهة، شارع الأمير سلطان",
    birthDate: "1990-05-15",
    gender: "ذكر",
    emergencyContact: "+966 55 555 5555",
    healthNotes: "لا توجد حساسية أو مشاكل صحية",
    subscriptionProgress: 65,
    subscriptionAmount: 800,
    attendanceRate: 85,
    totalSessions: 45,
    goals: "زيادة اللياقة البدنية وبناء العضلات",
  }

  const attendanceHistory = [
    {
      date: "2023-06-15",
      session: "تدريب القوة الصباحي",
      time: "07:00 - 08:30",
      status: "حاضر",
      coach: "خالد الحربي",
    },
    {
      date: "2023-06-14",
      session: "تمارين القلب والأوعية الدموية",
      time: "14:00 - 15:30",
      status: "غائب",
      coach: "فاطمة الزهراني",
    },
    {
      date: "2023-06-13",
      session: "تدريب كمال الأجسام المسائي",
      time: "18:00 - 19:30",
      status: "حاضر",
      coach: "خالد الحربي",
    },
    {
      date: "2023-06-12",
      session: "تدريب القوة الصباحي",
      time: "07:00 - 08:30",
      status: "حاضر",
      coach: "خالد الحربي",
    },
    {
      date: "2023-06-11",
      session: "تمارين القلب والأوعية الدموية",
      time: "14:00 - 15:30",
      status: "حاضر",
      coach: "فاطمة الزهراني",
    },
  ]

  const upcomingSessions = [
    {
      date: "2023-06-16",
      session: "تدريب القوة الصباحي",
      time: "07:00 - 08:30",
      location: "القاعة الرئيسية",
      coach: "خالد الحربي",
    },
    {
      date: "2023-06-17",
      session: "تمارين القلب والأوعية الدموية",
      time: "14:00 - 15:30",
      location: "غرفة الكارديو",
      coach: "فاطمة الزهراني",
    },
    {
      date: "2023-06-18",
      session: "تدريب كمال الأجسام المسائي",
      time: "18:00 - 19:30",
      location: "غرفة الأوزان",
      coach: "خالد الحربي",
    },
  ]

  const paymentHistory = [
    {
      id: "P001",
      date: "2023-01-15",
      amount: 800,
      method: "بطاقة ائتمان",
      status: "مكتمل",
      plan: "قياسية",
      duration: "6 أشهر",
    },
    {
      id: "P002",
      date: "2022-07-10",
      amount: 500,
      method: "نقداً",
      status: "مكتمل",
      plan: "أساسية",
      duration: "3 أشهر",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/members">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">العودة</span>
            </Link>
          </Button>
          <h2 className="text-3xl font-bold tracking-tight gradient-text">تفاصيل العضو</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <FileEdit className="h-4 w-4 ml-1" />
            تعديل
          </Button>
          <Button className="flex items-center gap-1 btn-effect">
            <MessageSquare className="h-4 w-4 ml-1" />
            إرسال إشعار
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>المعلومات الشخصية</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24 border-4 border-club-primary/20">
              <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
              <AvatarFallback className="text-2xl">{member.initials}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">رقم العضوية: {member.id}</p>
              <div className="mt-2 flex justify-center">
                <Badge
                  variant={member.status === "نشط" ? "default" : member.status === "منتهي" ? "destructive" : "outline"}
                  className={member.status === "ينتهي قريباً" ? "border-club-warning text-club-warning" : ""}
                >
                  {member.status}
                </Badge>
              </div>
            </div>

            <Separator />

            <div className="w-full space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{member.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{member.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{member.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">تاريخ الميلاد: {new Date(member.birthDate).toLocaleDateString("ar-SA")}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">الجنس: {member.gender}</span>
              </div>
            </div>

            <Separator />

            <div className="w-full space-y-3">
              <div className="flex items-center gap-2">
                <UserCog className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">المدرب: {member.coach}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">رقم الطوارئ: {member.emergencyContact}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium">ملاحظات صحية:</span>
                <p className="text-sm text-muted-foreground">{member.healthNotes}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium">الأهداف:</span>
                <p className="text-sm text-muted-foreground">{member.goals}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>معلومات العضوية</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">الباقة الحالية</span>
                  <Badge
                    variant="outline"
                    className={
                      member.plan === "متميزة"
                        ? "border-club-accent text-club-accent"
                        : member.plan === "قياسية"
                          ? "border-club-primary text-club-primary"
                          : "border-club-secondary text-club-secondary"
                    }
                  >
                    {member.plan}
                  </Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>تاريخ الانضمام</span>
                  <span>{new Date(member.joinDate).toLocaleDateString("ar-SA")}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>تاريخ الانتهاء</span>
                  <span>{new Date(member.expiryDate).toLocaleDateString("ar-SA")}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>المبلغ المدفوع</span>
                  <span>{member.subscriptionAmount} ريال</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">المدة المتبقية</span>
                  <span className="text-sm font-medium">{member.subscriptionProgress}%</span>
                </div>
                <Progress value={member.subscriptionProgress} className="h-2" />

                <div className="mt-4 flex justify-between">
                  <span className="text-sm font-medium">نسبة الحضور</span>
                  <span className="text-sm font-medium">{member.attendanceRate}%</span>
                </div>
                <Progress value={member.attendanceRate} className="h-2" />

                <div className="mt-4 flex justify-between">
                  <span className="text-sm font-medium">إجمالي الجلسات</span>
                  <span className="text-sm font-medium">{member.totalSessions} جلسة</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" className="flex items-center gap-1">
                <BarChart className="h-4 w-4 ml-1" />
                تقرير مفصل
              </Button>
              <Button className="flex items-center gap-1 btn-effect">
                <CreditCard className="h-4 w-4 ml-1" />
                تجديد الاشتراك
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="attendance" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-3 md:inline-flex">
          <TabsTrigger value="attendance">سجل الحضور</TabsTrigger>
          <TabsTrigger value="upcoming">الجلسات القادمة</TabsTrigger>
          <TabsTrigger value="payments">سجل المدفوعات</TabsTrigger>
        </TabsList>

        <TabsContent value="attendance" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-club-primary" />
                سجل الحضور
              </CardTitle>
              <CardDescription>سجل حضور العضو للجلسات التدريبية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>التاريخ</TableHead>
                      <TableHead>الجلسة</TableHead>
                      <TableHead>الوقت</TableHead>
                      <TableHead>المدرب</TableHead>
                      <TableHead>الحالة</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendanceHistory.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell>{new Date(record.date).toLocaleDateString("ar-SA")}</TableCell>
                        <TableCell>{record.session}</TableCell>
                        <TableCell>{record.time}</TableCell>
                        <TableCell>{record.coach}</TableCell>
                        <TableCell>
                          <Badge
                            variant={record.status === "حاضر" ? "default" : "destructive"}
                            className={record.status === "حاضر" ? "bg-club-success" : ""}
                          >
                            {record.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-club-secondary" />
                الجلسات القادمة
              </CardTitle>
              <CardDescription>الجلسات التدريبية القادمة للعضو</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4">
                    <div className="space-y-1">
                      <h4 className="font-semibold">{session.session}</h4>
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
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>المدرب: {session.coach}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-club-accent" />
                سجل المدفوعات
              </CardTitle>
              <CardDescription>سجل مدفوعات العضو</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>رقم العملية</TableHead>
                      <TableHead>التاريخ</TableHead>
                      <TableHead>المبلغ</TableHead>
                      <TableHead>طريقة الدفع</TableHead>
                      <TableHead>الباقة</TableHead>
                      <TableHead>المدة</TableHead>
                      <TableHead>الحالة</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentHistory.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{payment.id}</TableCell>
                        <TableCell>{new Date(payment.date).toLocaleDateString("ar-SA")}</TableCell>
                        <TableCell>{payment.amount} ريال</TableCell>
                        <TableCell>{payment.method}</TableCell>
                        <TableCell>{payment.plan}</TableCell>
                        <TableCell>{payment.duration}</TableCell>
                        <TableCell>
                          <Badge className="bg-club-success">{payment.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
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
