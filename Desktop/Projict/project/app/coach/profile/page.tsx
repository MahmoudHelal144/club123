import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Dumbbell, Mail, Phone, User, MapPin, Shield, Save, Upload, Award, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function CoachProfilePage() {
  const coach = {
    id: "C001",
    name: "أحمد السعود",
    email: "ahmed@example.com",
    phone: "+966 50 123 4567",
    joinDate: "2022-01-10",
    avatar: "/avatars/coach.png",
    initials: "أس",
    address: "الرياض، حي النزهة، شارع الأمير سلطان",
    birthDate: "1985-05-15",
    specialization: "تدريب القوة واللياقة البدنية",
    bio: "مدرب محترف حاصل على شهادة في علوم الرياضة وتدريب القوة. خبرة أكثر من 10 سنوات في مجال التدريب الرياضي والياقة البدنية.",
    certifications: [
      "شهادة مدرب معتمد من الاتحاد الدولي لكمال الأجسام",
      "شهادة في التغذية الرياضية",
      "شهادة في الإسعافات الأولية",
    ],
    totalSessions: 245,
    totalTrainees: 47,
    averageAttendance: 85,
    ratings: 4.8,
  }

  const stats = [
    {
      title: "إجمالي الجلسات",
      value: coach.totalSessions,
      icon: Dumbbell,
      color: "text-club-primary",
      bgColor: "bg-club-primary/10",
    },
    {
      title: "إجمالي المتدربين",
      value: coach.totalTrainees,
      icon: User,
      color: "text-club-secondary",
      bgColor: "bg-club-secondary/10",
    },
    {
      title: "متوسط الحضور",
      value: `${coach.averageAttendance}%`,
      icon: Calendar,
      color: "text-club-accent",
      bgColor: "bg-club-accent/10",
    },
    {
      title: "التقييم",
      value: coach.ratings,
      icon: Award,
      color: "text-club-success",
      bgColor: "bg-club-success/10",
    },
  ]

  const upcomingSessions = [
    {
      id: "S001",
      title: "تدريب القوة الصباحي",
      date: "2023-06-16",
      time: "07:00 - 08:30",
      location: "القاعة الرئيسية",
      trainees: 15,
    },
    {
      id: "S002",
      title: "تمارين القلب والأوعية الدموية",
      date: "2023-06-16",
      time: "14:00 - 15:30",
      location: "غرفة الكارديو",
      trainees: 20,
    },
    {
      id: "S003",
      title: "تدريب كمال الأجسام المسائي",
      date: "2023-06-16",
      time: "18:00 - 19:30",
      location: "غرفة الأوزان",
      trainees: 12,
    },
  ]

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight gradient-text">الملف الشخصي</h2>
          <p className="text-muted-foreground">عرض وتحديث معلومات ملفك الشخصي</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-1">
          <CardContent className="flex flex-col items-center space-y-4 pt-6">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-club-primary/20">
                <AvatarImage src={coach.avatar || "/placeholder.svg"} alt={coach.name} />
                <AvatarFallback className="text-4xl">{coach.initials}</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-0 right-0 rounded-full bg-background border-2 border-primary"
              >
                <Upload className="h-4 w-4" />
                <span className="sr-only">تغيير الصورة</span>
              </Button>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">{coach.name}</h3>
              <p className="text-sm text-muted-foreground">رقم المدرب: {coach.id}</p>
              <div className="mt-2 flex justify-center">
                <Badge className="bg-club-primary">مدرب</Badge>
              </div>
            </div>

            <Separator />

            <div className="w-full space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{coach.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{coach.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{coach.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">تاريخ الانضمام: {new Date(coach.joinDate).toLocaleDateString("ar-SA")}</span>
              </div>
            </div>

            <Separator />

            <div className="w-full space-y-3">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">التخصص: {coach.specialization}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-3 space-y-6">
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="stats-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div className={`rounded-full p-2 ${stat.bgColor}`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="info" className="w-full">
            <TabsList className="w-full md:w-auto grid grid-cols-3 md:inline-flex">
              <TabsTrigger value="info">المعلومات الشخصية</TabsTrigger>
              <TabsTrigger value="sessions">الجلسات القادمة</TabsTrigger>
              <TabsTrigger value="security">الأمان</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>المعلومات الشخصية</CardTitle>
                  <CardDescription>تحديث معلوماتك الشخصية</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل</Label>
                      <Input id="name" defaultValue={coach.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" defaultValue={coach.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input id="phone" type="tel" defaultValue={coach.phone} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthDate">تاريخ الميلاد</Label>
                      <Input id="birthDate" type="date" defaultValue={coach.birthDate} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">العنوان</Label>
                      <Input id="address" defaultValue={coach.address} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialization">التخصص</Label>
                      <Input id="specialization" defaultValue={coach.specialization} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">نبذة شخصية</Label>
                    <Textarea id="bio" defaultValue={coach.bio} rows={4} />
                  </div>

                  <div className="space-y-2">
                    <Label>الشهادات والمؤهلات</Label>
                    <div className="flex flex-wrap gap-2">
                      {coach.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="py-1">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center gap-1 btn-effect">
                    <Save className="h-4 w-4 ml-1" />
                    حفظ التغييرات
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="sessions" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>الجلسات القادمة</CardTitle>
                  <CardDescription>جلسات التدريب المجدولة القادمة</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between border-b pb-4">
                        <div className="space-y-1">
                          <h4 className="font-semibold">{session.title}</h4>
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
                              <span>{session.trainees} متدرب</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          عرض التفاصيل
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-club-primary" />
                    إعدادات الأمان
                  </CardTitle>
                  <CardDescription>تحديث إعدادات الأمان الخاصة بك</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">تغيير كلمة المرور</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">كلمة المرور الحالية</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div></div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">كلمة المرور الجديدة</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    <Button variant="outline">تغيير كلمة المرور</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
