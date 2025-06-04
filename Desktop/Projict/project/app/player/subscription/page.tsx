import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, DollarSign, Calendar, CheckCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlayerSubscriptionPage() {
  const subscription = {
    id: "SUB001",
    plan: "قياسية",
    startDate: "2023-01-15",
    endDate: "2023-07-15",
    status: "نشط",
    amount: 800,
    progress: 50,
    features: ["الوصول إلى مرافق النادي", "استخدام جميع المعدات", "3 جلسات تدريبية في الأسبوع", "إرشادات تغذية أساسية"],
  }

  const plans = [
    {
      id: "PLAN001",
      name: "أساسية",
      price: 500,
      duration: "3 أشهر",
      features: ["الوصول إلى مرافق النادي", "استخدام المعدات الأساسية", "جلستان تدريبيتان في الأسبوع"],
      color: "bg-gray-100",
    },
    {
      id: "PLAN002",
      name: "قياسية",
      price: 800,
      duration: "6 أشهر",
      features: [
        "الوصول إلى مرافق النادي",
        "استخدام جميع المعدات",
        "3 جلسات تدريبية في الأسبوع",
        "إرشادات تغذية أساسية",
      ],
      color: "bg-blue-50",
      popular: true,
    },
    {
      id: "PLAN003",
      name: "متميزة",
      price: 1200,
      duration: "6 أشهر",
      features: [
        "الوصول إلى مرافق النادي",
        "استخدام جميع المعدات",
        "جلسات تدريبية غير محدودة",
        "خطة تغذية شخصية",
        "تتبع التقدم الشهري",
      ],
      color: "bg-amber-50",
    },
  ]

  const history = [
    {
      id: "PAY001",
      date: "2023-01-15",
      amount: 800,
      method: "بطاقة ائتمان",
      plan: "قياسية",
      duration: "6 أشهر",
    },
    {
      id: "PAY002",
      date: "2022-07-10",
      amount: 500,
      method: "نقداً",
      plan: "أساسية",
      duration: "3 أشهر",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">اشتراكي</h2>
      </div>

      <Tabs defaultValue="current">
        <TabsList>
          <TabsTrigger value="current">الاشتراك الحالي</TabsTrigger>
          <TabsTrigger value="plans">باقات الاشتراك</TabsTrigger>
          <TabsTrigger value="history">سجل المدفوعات</TabsTrigger>
        </TabsList>
        <TabsContent value="current" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>باقة {subscription.plan}</CardTitle>
                  <CardDescription>تفاصيل اشتراكك الحالي</CardDescription>
                </div>
                <Badge>{subscription.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">تاريخ البدء</p>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <p>{new Date(subscription.startDate).toLocaleDateString("ar-SA")}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">تاريخ الانتهاء</p>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <p>{new Date(subscription.endDate).toLocaleDateString("ar-SA")}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">المبلغ المدفوع</p>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    <p>{subscription.amount} ريال</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-sm">مدة الاشتراك المتبقية</p>
                  <p className="text-sm font-medium">{subscription.progress}%</p>
                </div>
                <Progress value={subscription.progress} className="h-2" />
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">المميزات المتاحة</h4>
                <ul className="space-y-2">
                  {subscription.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">تجديد الاشتراك</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="plans" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.id} className={`${plan.color} border-2 ${plan.popular ? "border-blue-500" : ""}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-tl-none rounded-br-none">الأكثر شيوعاً</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.duration}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline">
                    <DollarSign className="h-5 w-5 text-muted-foreground" />
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground mr-1">ريال</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">المميزات</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.popular ? "اختيار الباقة" : "عرض التفاصيل"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>سجل المدفوعات</CardTitle>
              <CardDescription>سجل مدفوعات الاشتراك السابقة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {history.map((payment) => (
                  <div key={payment.id} className="flex justify-between items-center border-b pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <p className="font-medium">باقة {payment.plan}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          {new Date(payment.date).toLocaleDateString("ar-SA")}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">المدة: {payment.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{payment.amount} ريال</p>
                      <p className="text-sm text-muted-foreground">طريقة الدفع: {payment.method}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
