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
import {
  MoreHorizontal,
  Search,
  UserPlus,
  FileOutputIcon as FileExport,
  ImportIcon as FileImport,
  SlidersHorizontal,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MembersPage() {
  const members = [
    {
      id: "M001",
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
    },
    {
      id: "M002",
      name: "فاطمة الزهراني",
      email: "fatima@example.com",
      phone: "+966 55 987 6543",
      status: "نشط",
      joinDate: "2023-02-20",
      expiryDate: "2023-08-20",
      avatar: "/avatars/player-female.png",
      initials: "فز",
      plan: "متميزة",
      coach: "أحمد السعود",
    },
    {
      id: "M003",
      name: "خالد الحربي",
      email: "khalid@example.com",
      phone: "+966 54 456 7890",
      status: "منتهي",
      joinDate: "2023-03-10",
      expiryDate: "2023-06-10",
      avatar: "/avatars/player.png",
      initials: "خح",
      plan: "أساسية",
      coach: "فاطمة الزهراني",
    },
    {
      id: "M004",
      name: "نورة القحطاني",
      email: "noura@example.com",
      phone: "+966 56 234 5678",
      status: "نشط",
      joinDate: "2023-04-05",
      expiryDate: "2023-10-05",
      avatar: "/avatars/player-female.png",
      initials: "نق",
      plan: "متميزة",
      coach: "أحمد السعود",
    },
    {
      id: "M005",
      name: "عمر العتيبي",
      email: "omar@example.com",
      phone: "+966 59 876 5432",
      status: "ينتهي قريباً",
      joinDate: "2023-05-12",
      expiryDate: "2023-06-12",
      avatar: "/avatars/player.png",
      initials: "عع",
      plan: "قياسية",
      coach: "خالد الحربي",
    },
    {
      id: "M006",
      name: "سارة المالكي",
      email: "sara@example.com",
      phone: "+966 50 111 2222",
      status: "نشط",
      joinDate: "2023-05-20",
      expiryDate: "2023-11-20",
      avatar: "/avatars/player-female.png",
      initials: "سم",
      plan: "أساسية",
      coach: "فاطمة الزهراني",
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight gradient-text">الأعضاء</h2>
          <p className="text-muted-foreground">إدارة أعضاء النادي الرياضي</p>
        </div>
        <Button className="flex items-center gap-1 btn-effect">
          <UserPlus className="h-4 w-4 ml-1" />
          إضافة عضو جديد
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="بحث عن عضو..." className="w-full pr-8" />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="حالة العضوية" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع الحالات</SelectItem>
              <SelectItem value="active">نشط</SelectItem>
              <SelectItem value="expiring">ينتهي قريباً</SelectItem>
              <SelectItem value="expired">منتهي</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="الباقة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع الباقات</SelectItem>
              <SelectItem value="basic">أساسية</SelectItem>
              <SelectItem value="standard">قياسية</SelectItem>
              <SelectItem value="premium">متميزة</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="flex-shrink-0">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">خيارات متقدمة</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-3 md:inline-flex">
          <TabsTrigger value="all">جميع الأعضاء</TabsTrigger>
          <TabsTrigger value="active">الأعضاء النشطين</TabsTrigger>
          <TabsTrigger value="expired">العضويات المنتهية</TabsTrigger>
        </TabsList>

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-muted-foreground">إجمالي الأعضاء: 245 عضو</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <FileExport className="h-4 w-4 ml-1" />
              تصدير
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <FileImport className="h-4 w-4 ml-1" />
              استيراد
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>العضو</TableHead>
                      <TableHead>رقم العضوية</TableHead>
                      <TableHead>معلومات الاتصال</TableHead>
                      <TableHead>تاريخ الانضمام</TableHead>
                      <TableHead>تاريخ الانتهاء</TableHead>
                      <TableHead>الباقة</TableHead>
                      <TableHead>الحالة</TableHead>
                      <TableHead className="text-left">الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {members.map((member) => (
                      <TableRow key={member.id} className="hover:bg-muted/50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                              <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-xs text-muted-foreground">المدرب: {member.coach}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{member.id}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="text-sm">{member.email}</span>
                            <span className="text-xs text-muted-foreground">{member.phone}</span>
                          </div>
                        </TableCell>
                        <TableCell>{new Date(member.joinDate).toLocaleDateString("ar-SA")}</TableCell>
                        <TableCell>{new Date(member.expiryDate).toLocaleDateString("ar-SA")}</TableCell>
                        <TableCell>
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
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              member.status === "نشط"
                                ? "default"
                                : member.status === "منتهي"
                                  ? "destructive"
                                  : "outline"
                            }
                            className={member.status === "ينتهي قريباً" ? "border-club-warning text-club-warning" : ""}
                          >
                            {member.status}
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
                              <DropdownMenuItem>تعديل العضو</DropdownMenuItem>
                              <DropdownMenuItem>تجديد الاشتراك</DropdownMenuItem>
                              <DropdownMenuItem>سجل الحضور</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">حذف العضو</DropdownMenuItem>
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

        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>الأعضاء النشطين</CardTitle>
              <CardDescription>قائمة الأعضاء ذوي العضويات النشطة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 border rounded-md">
                <p className="text-muted-foreground">قائمة الأعضاء النشطين ستظهر هنا</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expired">
          <Card>
            <CardHeader>
              <CardTitle>العضويات المنتهية</CardTitle>
              <CardDescription>قائمة الأعضاء ذوي العضويات المنتهية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 border rounded-md">
                <p className="text-muted-foreground">قائمة العضويات المنتهية ستظهر هنا</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
