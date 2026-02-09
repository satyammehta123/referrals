import React from "react"
import { CalendarCheck, Clock, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  subtitle?: string
  icon: React.ReactNode
  accentColor: string
  iconBgColor: string
}

function StatCard({ title, value, subtitle, icon, accentColor, iconBgColor }: StatCardProps) {
  return (
    <Card className="group relative overflow-hidden border-border bg-card transition-shadow hover:shadow-md">
      <div className={`absolute left-0 top-0 h-full w-1 ${accentColor}`} />
      <CardContent className="flex items-start justify-between p-6">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold tracking-tight text-foreground">{value}</p>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBgColor}`}>
          {icon}
        </div>
      </CardContent>
    </Card>
  )
}

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <StatCard
        title="Referrals Sent This Month"
        value="12"
        icon={<Send className="h-5 w-5 text-primary" />}
        accentColor="bg-primary"
        iconBgColor="bg-primary/10"
      />
      <StatCard
        title="Patients Booked"
        value="9"
        subtitle="75% booking rate"
        icon={<CalendarCheck className="h-5 w-5 text-[hsl(152,55%,42%)]" />}
        accentColor="bg-[hsl(152,55%,42%)]"
        iconBgColor="bg-[hsl(152,55%,42%)]/10"
      />
      <StatCard
        title="Awaiting Booking"
        value="3"
        subtitle="Pending confirmation"
        icon={<Clock className="h-5 w-5 text-[hsl(45,85%,45%)]" />}
        accentColor="bg-[hsl(45,85%,45%)]"
        iconBgColor="bg-[hsl(45,85%,45%)]/10"
      />
    </div>
  )
}
