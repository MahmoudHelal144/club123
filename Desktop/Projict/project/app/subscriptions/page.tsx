import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, MoreHorizontal, CreditCard, DollarSign } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

export default function SubscriptionsPage() {
  const subscriptions = [
    {
      id: "SUB001",
      member: {
        name: "Ahmed Al-Saud",
        id: "M001",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AS",
      },
      plan: "Premium",
      startDate: "2023-01-15",
      endDate: "2023-07-15",
      status: "Active",
      amount: 1200,
      progress: 50,
    },
    {
      id: "SUB002",
      member: {
        name: "Fatima Al-Zahrani",
        id: "M002",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "FZ",
      },
      plan: "Standard",
      startDate: "2023-02-20",
      endDate: "2023-08-20",
      status: "Active",
      amount: 800,
      progress: 60,
    },
    {
      id: "SUB003",
      member: {
        name: "Khalid Al-Harbi",
        id: "M003",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "KH",
      },
      plan: "Basic",
      startDate: "2023-03-10",
      endDate: "2023-06-10",
      status: "Expired",
      amount: 500,
      progress: 100,
    },
    {
      id: "SUB004",
      member: {
        name: "Noura Al-Qahtani",
        id: "M004",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "NQ",
      },
      plan: "Premium",
      startDate: "2023-04-05",
      endDate: "2023-10-05",
      status: "Active",
      amount: 1200,
      progress: 30,
    },
    {
      id: "SUB005",
      member: {
        name: "Omar Al-Otaibi",
        id: "M005",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "OO",
      },
      plan: "Standard",
      startDate: "2023-05-12",
      endDate: "2023-06-12",
      status: "Expiring Soon",
      amount: 800,
      progress: 90,
    },
  ]

  const plans = [
    {
      id: "PLAN001",
      name: "Basic",
      price: 500,
      duration: "3 months",
      features: ["Access to gym facilities", "Basic equipment usage", "2 training sessions per week"],
      color: "bg-gray-100",
    },
    {
      id: "PLAN002",
      name: "Standard",
      price: 800,
      duration: "6 months",
      features: [
        "Access to gym facilities",
        "All equipment usage",
        "3 training sessions per week",
        "Basic nutrition guidance",
      ],
      color: "bg-blue-50",
      popular: true,
    },
    {
      id: "PLAN003",
      name: "Premium",
      price: 1200,
      duration: "6 months",
      features: [
        "Access to gym facilities",
        "All equipment usage",
        "Unlimited training sessions",
        "Personalized nutrition plan",
        "Monthly progress tracking",
      ],
      color: "bg-amber-50",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">الاشتراكات</h2>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          اشتراك جديد
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">الاشتراكات النشطة</TabsTrigger>
          <TabsTrigger value="expired">منتهية الصلاحية</TabsTrigger>
          <TabsTrigger value="plans">خطط الاشتراك</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="البحث في الاشتراكات..." className="w-full pl-8" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="تصفية حسب الخطة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الخطط</SelectItem>
                <SelectItem value="basic">أساسي</SelectItem>
                <SelectItem value="standard">قياسي</SelectItem>
                <SelectItem value="premium">مميز</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">تصفية</span>
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>العضو</TableHead>
                  <TableHead>الخطة</TableHead>
                  <TableHead>تاريخ البدء</TableHead>
                  <TableHead>تاريخ الانتهاء</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>التقدم</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscriptions
                  .filter((sub) => sub.status !== "Expired")
                  .map((subscription) => (
                    <TableRow key={subscription.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage
                              src={subscription.member.avatar || "/placeholder.svg"}
                              alt={subscription.member.name}
                            />
                            <AvatarFallback>{subscription.member.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{subscription.member.name}</p>
                            <p className="text-xs text-muted-foreground">ID: {subscription.member.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          <span>{subscription.plan === 'Premium' ? 'مميز' : subscription.plan === 'Standard' ? 'قياسي' : subscription.plan === 'Basic' ? 'أساسي' : subscription.plan}</span>
                        </div>
                      </TableCell>
                      <TableCell>{new Date(subscription.startDate).toLocaleDateString()}</TableCell>
                      <TableCell>{new Date(subscription.endDate).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            subscription.status === "Active"
                              ? "default"
                              : subscription.status === "Expired"
                                ? "destructive"
                                : "outline"
                          }
                          className={subscription.status === "Expiring Soon" ? "border-amber-500 text-amber-500" : ""}
                        >
                          {subscription.status === "Active" ? "نشط" : subscription.status === "Expired" ? "منتهية الصلاحية" : "قريب الانتهاء"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={subscription.progress} className="h-2 w-[100px]" />
                          <span className="text-xs text-muted-foreground">{subscription.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
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
                            <DropdownMenuItem>تعديل الاشتراك</DropdownMenuItem>
                            <DropdownMenuItem>تجديد الاشتراك</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">إلغاء الاشتراك</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="expired">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>العضو</TableHead>
                  <TableHead>الخطة</TableHead>
                  <TableHead>تاريخ البدء</TableHead>
                  <TableHead>تاريخ الانتهاء</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscriptions
                  .filter((sub) => sub.status === "Expired")
                  .map((subscription) => (
                    <TableRow key={subscription.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage
                              src={subscription.member.avatar || "/placeholder.svg"}
                              alt={subscription.member.name}
                            />
                            <AvatarFallback>{subscription.member.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{subscription.member.name}</p>
                            <p className="text-xs text-muted-foreground">ID: {subscription.member.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          <span>{subscription.plan === 'Premium' ? 'مميز' : subscription.plan === 'Standard' ? 'قياسي' : subscription.plan === 'Basic' ? 'أساسي' : subscription.plan}</span>
                        </div>
                      </TableCell>
                      <TableCell>{new Date(subscription.startDate).toLocaleDateString()}</TableCell>
                      <TableCell>{new Date(subscription.endDate).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge variant="destructive">منتهية الصلاحية</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button>تجديد</Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="plans" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`border-2 ${plan.popular ? "border-blue-500 dark:border-blue-300" : "border dark:border-border"} 
                ${plan.name === 'Basic' ? 'bg-gray-100 dark:bg-gray-800' : plan.name === 'Standard' ? 'bg-blue-50 dark:bg-blue-900' : 'bg-amber-50 dark:bg-amber-900'} 
                text-gray-900 dark:text-white`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-tl-none rounded-br-none dark:text-white dark:bg-gray-700">الأكثر شيوعاً</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">{plan.name === 'Basic' ? 'أساسي' : plan.name === 'Standard' ? 'قياسي' : plan.name === 'Premium' ? 'مميز' : plan.name}</CardTitle>
                  <CardDescription className="text-gray-700 dark:text-gray-300">{plan.duration === "3 months" ? "3 أشهر" : "6 أشهر"}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline">
                    <DollarSign className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-700 dark:text-gray-300 ml-1">ريال سعودي</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">الميزات</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-900 dark:text-white">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-blue-500"></div>
                          {feature === 'Access to gym facilities' ? 'الوصول إلى مرافق الجيم' : feature === 'Basic equipment usage' ? 'استخدام المعدات الأساسية' : feature === '2 training sessions per week' ? 'جلستان تدريبيتان في الأسبوع' : feature === 'All equipment usage' ? 'استخدام جميع المعدات' : feature === '3 training sessions per week' ? '3 جلسات تدريبية في الأسبوع' : feature === 'Basic nutrition guidance' ? 'إرشاد غذائي أساسي' : feature === 'Unlimited training sessions' ? 'جلسات تدريب غير محدودة' : feature === 'Personalized nutrition plan' ? 'خطة غذائية شخصية' : feature === 'Monthly progress tracking' ? 'تتبع التقدم الشهري' : feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white" variant={plan.popular ? "default" : "outline"}>
                    {plan.popular ? "اختر الخطة" : "عرض الخطة"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
