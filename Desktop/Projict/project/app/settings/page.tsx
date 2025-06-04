import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building, Globe, Save, Shield, Bell, Palette, Moon, Sun, Smartphone } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-6 p-6 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight gradient-text">الإعدادات</h2>
          <p className="text-muted-foreground">إدارة إعدادات النظام والحساب</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-4 md:inline-flex">
          <TabsTrigger value="general">عام</TabsTrigger>
          <TabsTrigger value="appearance">المظهر</TabsTrigger>
          <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
          <TabsTrigger value="security">الأمان</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-club-primary" />
                معلومات النادي
              </CardTitle>
              <CardDescription>المعلومات الأساسية للنادي الرياضي</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="club-name">اسم النادي</Label>
                  <Input id="club-name" defaultValue="النادي الرياضي" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="club-email">البريد الإلكتروني</Label>
                  <Input id="club-email" type="email" defaultValue="info@sportsclub.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="club-phone">رقم الهاتف</Label>
                  <Input id="club-phone" type="tel" defaultValue="+966 12 345 6789" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="club-website">الموقع الإلكتروني</Label>
                  <Input id="club-website" type="url" defaultValue="https://www.sportsclub.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="club-address">العنوان</Label>
                <Textarea id="club-address" defaultValue="الرياض، حي النزهة، شارع الأمير سلطان" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="club-description">وصف النادي</Label>
                <Textarea
                  id="club-description"
                  defaultValue="نادي رياضي متكامل يقدم خدمات متنوعة في مجال اللياقة البدنية وكمال الأجسام والتدريب الشخصي."
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="flex items-center gap-1 btn-effect">
                <Save className="h-4 w-4 ml-1" />
                حفظ التغييرات
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-club-secondary" />
                إعدادات النظام
              </CardTitle>
              <CardDescription>الإعدادات العامة للنظام</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="system-language">لغة النظام</Label>
                  <Select defaultValue="ar">
                    <SelectTrigger id="system-language">
                      <SelectValue placeholder="اختر اللغة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ar">العربية</SelectItem>
                      <SelectItem value="en">الإنجليزية</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="system-timezone">المنطقة الزمنية</Label>
                  <Select defaultValue="asia-riyadh">
                    <SelectTrigger id="system-timezone">
                      <SelectValue placeholder="اختر المنطقة الزمنية" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asia-riyadh">الرياض (GMT+3)</SelectItem>
                      <SelectItem value="asia-jeddah">جدة (GMT+3)</SelectItem>
                      <SelectItem value="asia-dubai">دبي (GMT+4)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date-format">تنسيق التاريخ</Label>
                  <Select defaultValue="hijri">
                    <SelectTrigger id="date-format">
                      <SelectValue placeholder="اختر تنسيق التاريخ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hijri">التقويم الهجري</SelectItem>
                      <SelectItem value="gregorian">التقويم الميلادي</SelectItem>
                      <SelectItem value="both">كلاهما</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">العملة</Label>
                  <Select defaultValue="sar">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="اختر العملة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sar">ريال سعودي (SAR)</SelectItem>
                      <SelectItem value="aed">درهم إماراتي (AED)</SelectItem>
                      <SelectItem value="usd">دولار أمريكي (USD)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-backup">النسخ الاحتياطي التلقائي</Label>
                    <p className="text-sm text-muted-foreground">إنشاء نسخة احتياطية تلقائية للنظام يومياً</p>
                  </div>
                  <Switch id="auto-backup" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="maintenance-mode">وضع الصيانة</Label>
                    <p className="text-sm text-muted-foreground">تفعيل وضع الصيانة لإيقاف الوصول للنظام مؤقتاً</p>
                  </div>
                  <Switch id="maintenance-mode" />
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

        <TabsContent value="appearance" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-club-primary" />
                المظهر والألوان
              </CardTitle>
              <CardDescription>تخصيص مظهر النظام وألوانه</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>وضع العرض</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="border rounded-md p-2 w-full h-24 bg-background flex items-center justify-center cursor-pointer hover:border-club-primary">
                      <Sun className="h-8 w-8 text-club-primary" />
                    </div>
                    <span className="text-sm">فاتح</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="border rounded-md p-2 w-full h-24 bg-gray-900 flex items-center justify-center cursor-pointer hover:border-club-primary">
                      <Moon className="h-8 w-8 text-club-primary" />
                    </div>
                    <span className="text-sm">داكن</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="border rounded-md p-2 w-full h-24 bg-gradient-to-b from-background to-gray-900 flex items-center justify-center cursor-pointer hover:border-club-primary">
                      <Smartphone className="h-8 w-8 text-club-primary" />
                    </div>
                    <span className="text-sm">تلقائي</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>اللون الرئيسي</Label>
                <div className="grid grid-cols-6 gap-4">
                  <div className="h-10 rounded-md bg-club-primary cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-club-primary"></div>
                  <div className="h-10 rounded-md bg-club-secondary cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-club-secondary"></div>
                  <div className="h-10 rounded-md bg-club-accent cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-club-accent"></div>
                  <div className="h-10 rounded-md bg-green-500 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-green-500"></div>
                  <div className="h-10 rounded-md bg-purple-500 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-purple-500"></div>
                  <div className="h-10 rounded-md bg-red-500 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-red-500"></div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>حجم الخط</Label>
                <RadioGroup defaultValue="medium" className="flex">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="small" id="font-small" />
                    <Label htmlFor="font-small">صغير</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse mx-4">
                    <RadioGroupItem value="medium" id="font-medium" />
                    <Label htmlFor="font-medium">متوسط</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="large" id="font-large" />
                    <Label htmlFor="font-large">كبير</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>تخطيط القائمة الجانبية</Label>
                <RadioGroup defaultValue="expanded" className="flex">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="expanded" id="sidebar-expanded" />
                    <Label htmlFor="sidebar-expanded">موسعة</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse mx-4">
                    <RadioGroupItem value="collapsed" id="sidebar-collapsed" />
                    <Label htmlFor="sidebar-collapsed">مطوية</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="auto" id="sidebar-auto" />
                    <Label htmlFor="sidebar-auto">تلقائي</Label>
                  </div>
                </RadioGroup>
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

        <TabsContent value="notifications" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-club-primary" />
                إعدادات الإشعارات
              </CardTitle>
              <CardDescription>تخصيص إعدادات الإشعارات والتنبيهات</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">إشعارات النظام</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>تنبيهات الاشتراكات</Label>
                      <p className="text-sm text-muted-foreground">إشعارات عن الاشتراكات التي ستنتهي قريباً</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>تنبيهات الحضور</Label>
                      <p className="text-sm text-muted-foreground">إشعارات عن تسجيل الحضور للجلسات</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>تنبيهات الأعضاء الجدد</Label>
                      <p className="text-sm text-muted-foreground">إشعارات عند تسجيل أعضاء جدد</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>تنبيهات المدفوعات</Label>
                      <p className="text-sm text-muted-foreground">إشعارات عن المدفوعات الجديدة</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">طرق الإشعارات</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>إشعارات داخل النظام</Label>
                      <p className="text-sm text-muted-foreground">عرض الإشعارات داخل النظام</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>البريد الإلكتروني</Label>
                      <p className="text-sm text-muted-foreground">إرسال الإشعارات عبر البريد الإلكتروني</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>الرسائل النصية</Label>
                      <p className="text-sm text-muted-foreground">إرسال الإشعارات عبر الرسائل النصية</p>
                    </div>
                    <Switch />
                  </div>
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

        <TabsContent value="security" className="mt-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-club-primary" />
                إعدادات الأمان
              </CardTitle>
              <CardDescription>إدارة إعدادات الأمان والخصوصية</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">كلمة المرور</h3>
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

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">المصادقة الثنائية</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تفعيل المصادقة الثنائية</Label>
                    <p className="text-sm text-muted-foreground">تأمين حسابك باستخدام رمز إضافي عند تسجيل الدخول</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">سجل تسجيل الدخول</h3>
                <div className="rounded-md border">
                  <div className="p-4 border-b">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">تسجيل دخول ناجح</p>
                        <p className="text-sm text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                      </div>
                      <p className="text-sm text-muted-foreground">اليوم، 10:30 صباحاً</p>
                    </div>
                  </div>
                  <div className="p-4 border-b">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">تسجيل دخول ناجح</p>
                        <p className="text-sm text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                      </div>
                      <p className="text-sm text-muted-foreground">الأمس، 3:45 مساءً</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">تسجيل دخول ناجح</p>
                        <p className="text-sm text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                      </div>
                      <p className="text-sm text-muted-foreground">15 يونيو، 9:15 صباحاً</p>
                    </div>
                  </div>
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
      </Tabs>
    </div>
  )
}
