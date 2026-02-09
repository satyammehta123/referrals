import { Activity, Bell, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Activity className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Pathway
          </span>
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          <Button variant="ghost" className="text-sm font-medium text-primary">
            Dashboard
          </Button>
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Patients
          </Button>
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Referrals
          </Button>
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Reports
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground" aria-label="Notifications">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
          </Button>
          <div className="hidden items-center gap-2.5 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-3 md:flex">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-xs font-semibold text-primary-foreground">
                SC
              </AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-foreground">Dr. Sarah Chen</span>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
