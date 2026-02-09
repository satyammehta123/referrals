import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

type ReferralStatus = "Booked" | "Pending" | "Attended"

interface Referral {
  id: number
  patientName: string
  referredTo: string
  dateSent: string
  status: ReferralStatus
}

const referrals: Referral[] = [
  {
    id: 1,
    patientName: "Maria Rodriguez",
    referredTo: "Dr. James Lee",
    dateSent: "Mar 8, 2026",
    status: "Booked",
  },
  {
    id: 2,
    patientName: "John Martinez",
    referredTo: "Dr. Maria Garcia",
    dateSent: "Mar 10, 2026",
    status: "Pending",
  },
  {
    id: 3,
    patientName: "Lisa Wong",
    referredTo: "Dr. James Lee",
    dateSent: "Mar 12, 2026",
    status: "Attended",
  },
]

const statusConfig: Record<ReferralStatus, { className: string; label: string }> = {
  Booked: {
    className: "border-transparent bg-[hsl(152,55%,42%)]/15 text-[hsl(152,55%,35%)] hover:bg-[hsl(152,55%,42%)]/25",
    label: "Booked",
  },
  Pending: {
    className: "border-transparent bg-[hsl(45,85%,50%)]/15 text-[hsl(40,70%,35%)] hover:bg-[hsl(45,85%,50%)]/25",
    label: "Pending",
  },
  Attended: {
    className: "border-transparent bg-primary/10 text-primary hover:bg-primary/20",
    label: "Attended",
  },
}

function StatusBadge({ status }: { status: ReferralStatus }) {
  const config = statusConfig[status]
  return (
    <Badge className={config.className}>
      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {config.label}
    </Badge>
  )
}

function PatientInitials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
        {initials}
      </div>
      <span className="font-medium text-foreground">{name}</span>
    </div>
  )
}

export function ReferralsTable() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="text-lg font-semibold text-foreground">
            Active Referrals
          </CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">
            Track and manage your current patient referrals
          </p>
        </div>
        <Button variant="outline" size="sm" className="text-muted-foreground bg-transparent">
          <ArrowUpDown className="mr-1.5 h-3.5 w-3.5" />
          Sort
        </Button>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="pl-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Patient Name
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Referred To
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Date Sent
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Status
              </TableHead>
              <TableHead className="pr-6 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {referrals.map((referral) => (
              <TableRow
                key={referral.id}
                className="border-border transition-colors hover:bg-accent/50"
              >
                <TableCell className="pl-6">
                  <PatientInitials name={referral.patientName} />
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {referral.referredTo}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {referral.dateSent}
                </TableCell>
                <TableCell>
                  <StatusBadge status={referral.status} />
                </TableCell>
                <TableCell className="pr-6 text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" aria-label={`Actions for ${referral.patientName}`}>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between border-t border-border px-6 py-4">
          <p className="text-sm text-muted-foreground">
            Showing 3 of 12 referrals
          </p>
          <Button variant="ghost" size="sm" className="text-sm font-medium text-primary hover:text-primary/80">
            View all referrals
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
