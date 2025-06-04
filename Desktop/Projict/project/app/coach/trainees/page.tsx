import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Search, Filter, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoachTraineesPage() {
  const trainees = [
    {
      id: "M001",
      name: "أحمد السعود",
      email: "ahmed@example.com",
      phone: "+966 50 123 4567",
      status: "نشط",
      joinDate: "2023-01-15",
      lastAttendance: "2023-06-15",
      program: "تدريب القوة الصباحي",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "أس",
    },
    {
      id: "M002",
      name: "فاطمة الزهراني",
      email: "fatima@example.com",
      phone: "+966 55 987 6543",
      status: "نشط",
      joinDate: "2023-02-20",
      lastAttendance: "2023-06-14",
      program: "تمارين القلب والأوعية الدموية",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "فز",
    },
    {
      id: "M003",
      name: "خالد الحربي",
      email: "khalid@example.com",
      phone: "+966 54 456 7890",
      status: "منتهي",
      joinDate: "2023-03-10",
      lastAttendance: "2023-06-10",
      program: "تدريب كمال الأجسام المسائي",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "خح",
    },
    {
      id: "M004",
      name: "نورة القحطاني",
      email: "noura@example.com",
      phone: "+966 56 234 5678",
      status: "نشط",
      joinDate: "2023-04-05",
      lastAttendance: "2023-06-15",
      program: "تدريب القوة الصباحي",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "نق",
    },
    {
      id: "M005",
      name: "عمر العتيبي",
      email: "omar@example.com",
      phone: "+966 59 876 5432",
      status: "ينتهي قريباً",
      joinDate: "2023-05-12",
      lastAttendance: "2023-06-13",
      program: "تمارين القلب والأوعية الدموية",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "عع",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">المتدربين</h2>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="بحث عن متدرب..." className="w-full pr-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
          <span className="sr-only">تصفية</span>
        </Button>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
          <span className="sr-only">تنزيل</span>
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">جميع المتدربين</TabsTrigger>
          <TabsTrigger value="morning">تدريب القوة الصباحي</TabsTrigger>
          <TabsTrigger value="cardio">تمارين القلب والأوعية الدموية</TabsTrigger>
          <TabsTrigger value="evening">تدريب كمال الأجسام المسائي</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>قائمة المتدربين</CardTitle>
              <CardDescription>جميع المتدربين المسجلين في جلساتك التدريبية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>المتدرب</TableHead>
                      <TableHead>رقم العضوية</TableHead>
                      <TableHead>معلومات الاتصال</TableHead>
                      <TableHead>البرنامج</TableHead>
                      <TableHead>آخر حضور</TableHead>
                      <TableHead>الحالة</TableHead>
                      <TableHead className="text-left">الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trainees.map((trainee) => (
                      <TableRow key={trainee.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={trainee.avatar || "/placeholder.svg"} alt={trainee.name} />
                              <AvatarFallback>{trainee.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{trainee.name}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{trainee.id}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="text-sm">{trainee.email}</span>
                            <span className="text-xs text-muted-foreground">{trainee.phone}</span>
                          </div>
                        </TableCell>
                        <TableCell>{trainee.program}</TableCell>
                        <TableCell>{new Date(trainee.lastAttendance).toLocaleDateString("ar-SA")}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              trainee.status === "نشط"
                                ? "default"
                                : trainee.status === "منتهي"
                                  ? "destructive"
                                  : "outline"
                            }
                            className={trainee.status === "ينتهي قريباً" ? "border-amber-500 text-amber-500" : ""}
                          >
                            {trainee.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-left">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">الإجراءات</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>عرض التفاصيل</DropdownMenuItem>
                              <DropdownMenuItem>سجل الحضور</DropdownMenuItem>
                              <DropdownMenuItem>إرسال إشعار</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="morning">
          <Card>
            <CardHeader>
              <CardTitle>متدربي تدريب القوة الصباحي</CardTitle>
              <CardDescription>المتدربين المسجلين في جلسة تدريب القوة الصباحي</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 border rounded-md">
                <p className="text-muted-foreground">قائمة المتدربين في برنامج تدريب القوة الصباحي</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cardio">
          <Card>
            <CardHeader>
              <CardTitle>متدربي تمارين القلب والأوعية الدموية</CardTitle>
              <CardDescription>المتدربين المسجلين في جلسة تمارين القلب والأوعية الدموية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 border rounded-md">
                <p className="text-muted-foreground">قائمة المتدربين في برنامج تمارين القلب والأوعية الدموية</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="evening">
          <Card>
            <CardHeader>
              <CardTitle>متدربي تدريب كمال الأجسام المسائي</CardTitle>
              <CardDescription>المتدربين المسجلين في جلسة تدريب كمال الأجسام المسائي</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 border rounded-md">
                <p className="text-muted-foreground">قائمة المتدربين في برنامج تدريب كمال الأجسام المسائي</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
