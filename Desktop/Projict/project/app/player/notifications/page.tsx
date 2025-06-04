import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlayerNotificationsPage() {
  const notifications = [
    {
      id: "N001",
      title: "تغيير موعد جلسة التدريب",
      message: "تم تغيير موعد جلسة تدريب كمال الأجسام المسائي من الساعة 18:00 إلى الساعة 19:00.",
      sender: "النظام",
      timestamp: "2023-06-15T10:30:00",
      type: "تغيير جدول",
      isRead: true,
    },
    {
      id: "N002",
      title: "تذكير بتجديد الاشتراك",
      message: "سينتهي اشتراكك بعد 7 أيام. يرجى زيارة الاستقبال لتجديد عضويتك.",
      sender: "الإدارة",
      timestamp: "2023-06-14T14:45:00",
      type: "اشتراك",
      isRead: true,
    },
    {
      id: "N003",
      title: "مدرب جديد",
      message: "يسرنا الإعلان عن انضمام سارة القحطاني كمدربة يوغا جديدة. ستبدأ حصصها الأسبوع المقبل.",
      sender: "الإدارة",
      timestamp: "2023-06-13T09:15:00",
      type: "إعلان",
      isRead: false,
    },
    {
      id: "N004",
      title: "إغلاق النادي للصيانة",
      message: "سيتم إغلاق النادي للصيانة يوم 20 يونيو من الساعة 22:00 إلى الساعة 06:00.",
      sender: "الإدارة",
      timestamp: "2023-06-12T16:20:00",
      type: "إعلان",
      isRead: false,
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">الإشعارات</h2>
        <Button variant="outline">تعليم الكل كمقروءة</Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">الكل</TabsTrigger>
          <TabsTrigger value="unread">غير مقروءة</TabsTrigger>
          <TabsTrigger value="announcements">إعلانات</TabsTrigger>
          <TabsTrigger value="schedule">تغييرات الجدول</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className={notification.isRead ? "opacity-70" : ""}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-base">{notification.title}</CardTitle>
                    {!notification.isRead && <Badge className="bg-red-500">جديد</Badge>}
                  </div>
                  <Badge variant="outline">{notification.type}</Badge>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {new Date(notification.timestamp).toLocaleString("ar-SA")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{notification.message}</p>
                <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                  <Bell className="h-3 w-3" />
                  <span>من: {notification.sender}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="unread" className="space-y-4">
          {notifications
            .filter((n) => !n.isRead)
            .map((notification) => (
              <Card key={notification.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-base">{notification.title}</CardTitle>
                      <Badge className="bg-red-500">جديد</Badge>
                    </div>
                    <Badge variant="outline">{notification.type}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {new Date(notification.timestamp).toLocaleString("ar-SA")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{notification.message}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                    <Bell className="h-3 w-3" />
                    <span>من: {notification.sender}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
        <TabsContent value="announcements" className="space-y-4">
          {notifications
            .filter((n) => n.type === "إعلان")
            .map((notification) => (
              <Card key={notification.id} className={notification.isRead ? "opacity-70" : ""}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-base">{notification.title}</CardTitle>
                      {!notification.isRead && <Badge className="bg-red-500">جديد</Badge>}
                    </div>
                    <Badge variant="outline">{notification.type}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {new Date(notification.timestamp).toLocaleString("ar-SA")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{notification.message}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                    <Bell className="h-3 w-3" />
                    <span>من: {notification.sender}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
        <TabsContent value="schedule" className="space-y-4">
          {notifications
            .filter((n) => n.type === "تغيير جدول")
            .map((notification) => (
              <Card key={notification.id} className={notification.isRead ? "opacity-70" : ""}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-base">{notification.title}</CardTitle>
                      {!notification.isRead && <Badge className="bg-red-500">جديد</Badge>}
                    </div>
                    <Badge variant="outline">{notification.type}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {new Date(notification.timestamp).toLocaleString("ar-SA")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{notification.message}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                    <Bell className="h-3 w-3" />
                    <span>من: {notification.sender}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
