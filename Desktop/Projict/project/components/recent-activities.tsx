import { ClipboardCheck, CreditCard, UserPlus, CalendarPlus } from "lucide-react"

export function RecentActivities() {
  const activities = [
    {
      icon: ClipboardCheck,
      iconColor: "text-green-500",
      iconBg: "bg-green-100",
      title: "Attendance Recorded",
      description: "Coach Ahmed recorded attendance for Morning Session",
      time: "10 minutes ago",
    },
    {
      icon: CreditCard,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-100",
      title: "Subscription Renewed",
      description: "Khalid Al-Harbi renewed his subscription",
      time: "1 hour ago",
    },
    {
      icon: UserPlus,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-100",
      title: "New Member Added",
      description: "Sara Al-Qahtani was added as a new member",
      time: "3 hours ago",
    },
    {
      icon: CalendarPlus,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-100",
      title: "New Training Session",
      description: "Evening Strength Training session was created",
      time: "5 hours ago",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className={`${activity.iconBg} p-2 rounded-full`}>
            <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
          </div>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
