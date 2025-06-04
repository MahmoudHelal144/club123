import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface Activity {
  icon: LucideIcon
  iconColor: string
  iconBg: string
  title: string
  description: string
  time: string
  user?: {
    name: string
    avatar: string
    initials: string
  }
}

interface ActivityCardProps {
  title: string
  description: string
  activities: Activity[]
  className?: string
}

export function ActivityCard({ title, description, activities, className }: ActivityCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {activities.map((activity, index) => {
            const Icon = activity.icon

            return (
              <div key={index} className="flex items-start gap-4">
                <div className={`${activity.iconBg} p-2 rounded-full`}>
                  <Icon className={`h-4 w-4 ${activity.iconColor}`} />
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium leading-none">{activity.title}</p>
                    {activity.user && (
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                        <AvatarFallback className="text-[10px]">{activity.user.initials}</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
