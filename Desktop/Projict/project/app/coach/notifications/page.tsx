import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Clock, Plus, Send, Settings, Trash2, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoachNotificationsPage() {
  const notifications = [
    {
      id: "N001",
      title: "تغيير موعد جلسة التدريب",
      message: "تم تغيير موعد جلسة تدريب كمال الأجسام المسائي من الساعة 18:00 إلى الساعة 19:00.",
      sender: "النظام",
      timestamp: "2023-06-15T10:30:00",
      type: "تغيير جدول",
      status: "تم الإرسال",
      recipients: "جميع متدربي حصة كمال الأجسام المسائية",
    },
    {
      id: "N002",
      title: "تذكير بالحضور",
      message: "تذكير بموعد جلسة تدريب القوة الصباحي غداً الساعة 07:00 صباحاً.",
      sender: "المدرب",
      timestamp: "2023-06-14T14:45:00",
      type: "تذكير",
      status: "تم الإرسال",
      recipients: "متدربي حصة القوة الصباحية",
    },
    {
      id: "N003",
      title: "إلغاء جلسة تدريبية",
      message: "نعتذر عن إلغاء جلسة تمارين المرونة لهذا اليوم لأسباب فنية.",
      sender: "المدرب",
      timestamp: "2023-06-13T09:15:00",
      type: "إلغاء",
      status: "تم الإرسال",
      recipients: "متدربي حصة المرونة",
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
          <TabsTrigger value="compose">إنشاء</TabsTrigger>
          <TabsTrigger value="templates">القوالب</TabsTrigger>
        </TabsList>
        <TabsContent value="sent" className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {notification.title}
                      <Badge variant="outline">{notification.type}</Badge>
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
                  <span>تم الإرسال إلى: {notification.recipients}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="compose">
          <Card>
            <CardHeader>
              <CardTitle>إنشاء إشعار جديد</CardTitle>
              <CardDescription>إنشاء وإرسال إشعارات للمتدربين</CardDescription>
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
                    <SelectItem value="schedule">تغيير الجدول</SelectItem>
                    <SelectItem value="reminder">تذكير</SelectItem>
                    <SelectItem value="cancel">إلغاء</SelectItem>
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
                    <SelectItem value="all">جميع المتدربين</SelectItem>
                    <SelectItem value="morning">متدربي حصة الصباح</SelectItem>
                    <SelectItem value="evening">متدربي حصة المساء</SelectItem>
                    <SelectItem value="custom">اختيار مخصص</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">حفظ كمسودة</Button>
                <Button className="flex items-center gap-1">
                  <Send className="h-4 w-4" />
                  إرسال الإشعار
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="templates">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>تغيير موعد جلسة</CardTitle>
                <CardDescription>قالب لإشعار تغيير موعد جلسة تدريبية</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  تم تغيير موعد جلسة [اسم الجلسة] من الساعة [الوقت القديم] إلى الساعة [الوقت الجديد].
                </p>
              </CardContent>
              <div className="p-4 flex justify-between">
                <Button variant="outline">تعديل</Button>
                <Button>استخدام القالب</Button>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>تذكير بالحضور</CardTitle>
                <CardDescription>قالب لإرسال تذكير بموعد الجلسة</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  تذكير بموعد جلسة [اسم الجلسة] غداً الساعة [الوقت]. نتطلع لحضوركم.
                </p>
              </CardContent>
              <div className="p-4 flex justify-between">
                <Button variant="outline">تعديل</Button>
                <Button>استخدام القالب</Button>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>إلغاء جلسة</CardTitle>
                <CardDescription>قالب لإشعار إلغاء جلسة تدريبية</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  نعتذر عن إلغاء جلسة [اسم الجلسة] لهذا اليوم بسبب [السبب]. سيتم تعويض الجلسة في وقت لاحق.
                </p>
              </CardContent>
              <div className="p-4 flex justify-between">
                <Button variant="outline">تعديل</Button>
                <Button>استخدام القالب</Button>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}