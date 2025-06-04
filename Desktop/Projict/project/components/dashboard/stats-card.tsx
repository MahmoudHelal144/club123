import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  description?: string
  icon: LucideIcon
  trend?: {
    value: string
    isPositive: boolean
  }
  className?: string
  iconColor?: string
  iconBgColor?: string
}

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
  iconColor = "text-club-primary",
  iconBgColor = "bg-club-primary/10",
}: StatsCardProps) {
  return (
    <Card className={cn("stats-card overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={cn("rounded-full p-2", iconBgColor)}>
          <Icon className={cn("h-4 w-4", iconColor)} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
        {trend && (
          <div className="mt-2 flex items-center text-xs">
            <span
              className={cn(
                "mr-1 rounded-sm px-1 py-0.5",
                trend.isPositive ? "bg-club-success/20 text-club-success" : "bg-club-danger/20 text-club-danger",
              )}
            >
              {trend.isPositive ? "+" : "-"}
              {trend.value}
            </span>
            <span className="text-muted-foreground">مقارنة بالشهر الماضي</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
