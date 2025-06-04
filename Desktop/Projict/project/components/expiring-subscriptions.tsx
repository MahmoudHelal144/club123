import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

export function ExpiringSubscriptions() {
  const subscriptions = [
    {
      name: "Mohammed Al-Otaibi",
      email: "m.otaibi@example.com",
      daysLeft: 2,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MO",
    },
    {
      name: "Fatima Al-Zahrani",
      email: "f.zahrani@example.com",
      daysLeft: 3,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "FZ",
    },
    {
      name: "Abdullah Al-Ghamdi",
      email: "a.ghamdi@example.com",
      daysLeft: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AG",
    },
    {
      name: "Noura Al-Qahtani",
      email: "n.qahtani@example.com",
      daysLeft: 7,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "NQ",
    },
  ]

  return (
    <div className="space-y-4">
      {subscriptions.map((subscription, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={subscription.avatar || "/placeholder.svg"} alt={subscription.name} />
              <AvatarFallback>{subscription.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{subscription.name}</p>
              <p className="text-xs text-muted-foreground">{subscription.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-amber-500">
              <CalendarDays className="h-4 w-4" />
              <span className="text-sm font-medium">{subscription.daysLeft} days left</span>
            </div>
            <Button size="sm" variant="outline">
              Renew
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
