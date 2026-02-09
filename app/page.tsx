import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DashboardNavbar } from "@/components/dashboard-navbar"
import { StatCards } from "@/components/stat-cards"
import { ReferralsTable } from "@/components/referrals-table"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Good morning, Dr. Chen
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {"Here's an overview of your referral activity"}
          </p>
        </div>

        <section aria-label="Referral statistics" className="mb-8">
          <StatCards />
        </section>

        <section aria-label="Active referrals">
          <ReferralsTable />
        </section>
      </main>

      <div className="fixed bottom-8 right-8">
        <Link href="/referral/new">
          <Button
            size="lg"
            className="h-14 gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
          >
            <Plus className="h-5 w-5" />
            Create New Referral
          </Button>
        </Link>
      </div>
    </div>
  )
}
