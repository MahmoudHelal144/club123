import { redirect } from "next/navigation"

export default function Home() {
  // في تطبيق حقيقي، سنتحقق من المصادقة هنا
  // للعرض التوضيحي، نقوم بالتوجيه إلى صفحة تسجيل الدخول
  redirect("/login")
}
