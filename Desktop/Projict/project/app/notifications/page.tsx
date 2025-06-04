import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Plus, Send, Settings, Trash2, Users } from "lucide-react"

export default function NotificationsPage() {
  const notifications = [
    {
      id: "N001",
      title: "Training Session Changed",
      message: "تم نقل حصة كمال الأجسام المسائية بتاريخ 16 يونيو من الساعة 18:00 إلى الساعة 19:00.",
      sender: "System",
      timestamp: "2023-06-15T10:30:00",
      type: "Schedule Change",
      status: "Sent",
      recipients: "All Evening Bodybuilding members",
    },
    {
      id: "N002",
      title: "Subscription Renewal Reminder",
      message: "اشتراكك سينتهي في غضون 7 أيام. يرجى زيارة مكتب الاستقبال لتجديد عضويتك.",
      sender: "Admin",
      timestamp: "2023-06-14T14:45:00",
      type: "Subscription",
      status: "Sent",
      recipients: "Members with expiring subscriptions",
    },
    {
      id: "N003",
      title: "New Coach Introduction",
      message: "يسعدنا الترحيب بسارة القحطاني كمدربة يوغا جديدة لدينا. ستبدأ فصولها الأسبوع المقبل.",
      sender: "Admin",
      timestamp: "2023-06-13T09:15:00",
      type: "Announcement",
      status: "Sent",
      recipients: "All members",
    },
    {
      id: "N004",
      title: "Gym Closure Notice",
      message: "سيتم إغلاق النادي للصيانة في 20 يونيو من الساعة 22:00 إلى الساعة 06:00.",
      sender: "Admin",
      timestamp: "2023-06-12T16:20:00",
      type: "Announcement",
      status: "Scheduled",
      scheduledFor: "2023-06-18T08:00:00",
      recipients: "All members",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">الإشعارات</h2>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          إشعار جديد
        </Button>
      </div>

      <Tabs defaultValue="sent">
        <TabsList>
          <TabsTrigger value="sent">المرسلة</TabsTrigger>
          <TabsTrigger value="scheduled">المجدولة</TabsTrigger>
          <TabsTrigger value="compose">إنشاء</TabsTrigger>
          <TabsTrigger value="templates">القوالب</TabsTrigger>
        </TabsList>
        <TabsContent value="sent" className="space-y-4">
          {notifications
            .filter((n) => n.status === "Sent")
            .map((notification) => (
              <Card key={notification.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {notification.title === "Training Session Changed" ? "تغيير في موعد الحصة التدريبية" : notification.title === "Subscription Renewal Reminder" ? "تذكير بتجديد الاشتراك" : notification.title === "New Coach Introduction" ? "تقديم مدرب جديد" : notification.title}
                        <Badge variant="outline">{notification.type === "Schedule Change" ? "تغيير الجدول" : notification.type === "Subscription" ? "اشتراك" : notification.type === "Announcement" ? "إعلان" : notification.type}</Badge>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {new Date(notification.timestamp).toLocaleString()}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">حذف</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{notification.message}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>مرسلة إلى: {notification.recipients === "All Evening Bodybuilding members" ? "جميع أعضاء حصة كمال الأجسام المسائية" : notification.recipients === "Members with expiring subscriptions" ? "الأعضاء الذين أوشكت اشتراكاتهم على الانتهاء" : notification.recipients === "All members" ? "جميع الأعضاء" : notification.recipients}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
        <TabsContent value="scheduled" className="space-y-4">
          {notifications
            .filter((n) => n.status === "Scheduled")
            .map((notification) => (
              <Card key={notification.id}>
                <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {notification.title === "Gym Closure Notice" ? "إشعار إغلاق النادي" : notification.title}
                          <Badge variant="outline">{notification.type === "Announcement" ? "إعلان" : notification.type}</Badge>
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <Calendar className="h-3 w-3" />
                          {notification.scheduledFor ? `مجدولة لتاريخ: ${new Date(notification.scheduledFor).toLocaleString()}` : ''}
                        </CardDescription>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon">
                          <Settings className="h-4 w-4" />
                          <span className="sr-only">تعديل</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">حذف</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{notification.message}</p>
                    <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>سيتم الإرسال إلى: {notification.recipients === "All members" ? "جميع الأعضاء" : notification.recipients}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
          <TabsContent value="compose">
            <Card>
              <CardHeader>
                <CardTitle>إنشاء إشعار جديد</CardTitle>
                <CardDescription>إنشاء وإرسال إشعارات للأعضاء</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">
                    العنوان
                  </label>
                  <Input id="title" placeholder="عنوان الإشعار" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    الرسالة
                  </label>
                  <Textarea id="message" placeholder="أدخل رسالة الإشعار هنا" rows={4} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium">
                    نوع الإشعار
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر النوع" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="announcement">إعلان</SelectItem>
                      <SelectItem value="schedule">تغيير الجدول</SelectItem>
                      <SelectItem value="subscription">اشتراك</SelectItem>
                      <SelectItem value="reminder">تذكير</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">المستلمون</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المستلمين" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الأعضاء</SelectItem>
                      <SelectItem value="active">الأعضاء النشطون</SelectItem>
                      <SelectItem value="expiring">الأعضاء الذين أوشكت اشتراكاتهم على الانتهاء</SelectItem>
                      <SelectItem value="morning">أعضاء حصة الصباح</SelectItem>
                      <SelectItem value="evening">أعضاء حصة المساء</SelectItem>
                      <SelectItem value="custom">اختيار مخصص</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="schedule" />
                  <label
                    htmlFor="schedule"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    جدولة لوقت لاحق
                  </label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">حفظ كمسودة</Button>
                <Button className="flex items-center gap-1">
                  <Send className="h-4 w-4" />
                  إرسال الإشعار
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="templates">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>تجديد الاشتراك</CardTitle>
                  <CardDescription>قالب لتذكيرات تجديد الاشتراك</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    اشتراكك سينتهي في [DATE]. يرجى زيارة مكتب الاستقبال لتجديد عضويتك والاستمتاع بمرافقنا.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">تعديل</Button>
                  <Button>استخدام القالب</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>تغيير الجدول</CardTitle>
                  <CardDescription>قالب لتغييرات جدول التدريب</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    حصة [SESSION_NAME] بتاريخ [DATE] تم [CHANGED/CANCELLED]. [ADDITIONAL_INFO]
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">تعديل</Button>
                  <Button>استخدام القالب</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>رسالة ترحيب</CardTitle>
                  <CardDescription>قالب لترحيب الأعضاء الجدد</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    مرحباً بك في نادينا الرياضي، [MEMBER_NAME]! يسعدنا انضمامك إلينا. عضويتك الآن نشطة وسارية حتى [END_DATE].
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">تعديل</Button>
                  <Button>استخدام القالب</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    )
  }
