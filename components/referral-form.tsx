"use client"

import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ReferralForm() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-3xl items-center gap-4 px-6">
          <Link
            href="/"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              Create New Referral
            </h1>
            <p className="text-xs text-muted-foreground">
              Fill in the details below to refer a patient
            </p>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="mx-auto max-w-3xl px-6 py-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-8"
        >
          {/* Patient Information */}
          <Card>
            <CardContent className="pt-6">
              <div className="mb-5">
                <h2 className="text-base font-semibold text-foreground">
                  Patient Information
                </h2>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {"Enter the patient's contact details"}
                </p>
              </div>
              <Separator className="mb-6" />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="patient-name">
                    Patient Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="patient-name"
                    placeholder="e.g. Maria Rodriguez"
                    required
                  />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="patient-phone">
                      Patient Phone Number{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="patient-phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="patient-email">
                      Patient Email{" "}
                      <span className="text-xs font-normal text-muted-foreground">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="patient-email"
                      type="email"
                      placeholder="patient@email.com"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Referral Details */}
          <Card>
            <CardContent className="pt-6">
              <div className="mb-5">
                <h2 className="text-base font-semibold text-foreground">
                  Referral Details
                </h2>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Specify the specialist and relevant clinical information
                </p>
              </div>
              <Separator className="mb-6" />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="refer-to">
                    Refer To <span className="text-destructive">*</span>
                  </Label>
                  <Select defaultValue="dr-james-lee">
                    <SelectTrigger id="refer-to" className="bg-card">
                      <SelectValue placeholder="Select a specialist" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dr-james-lee">
                        Dr. James Lee - Orthopedic Specialist
                      </SelectItem>
                      <SelectItem value="dr-maria-garcia">
                        Dr. Maria Garcia - Cardiologist
                      </SelectItem>
                      <SelectItem value="dr-david-kim">
                        Dr. David Kim - Neurologist
                      </SelectItem>
                      <SelectItem value="dr-anna-patel">
                        Dr. Anna Patel - Dermatologist
                      </SelectItem>
                      <SelectItem value="dr-robert-chen">
                        Dr. Robert Chen - Gastroenterologist
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="reason">
                    Reason for Referral{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="reason"
                    rows={3}
                    placeholder="Why are you referring this patient?"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="history">Patient History Summary</Label>
                  <Textarea
                    id="history"
                    rows={4}
                    placeholder="Brief relevant medical history..."
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="treatment">Treatment Attempted</Label>
                  <Textarea
                    id="treatment"
                    rows={3}
                    placeholder="What treatments have you already tried?"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Patient Communication */}
          <Card>
            <CardContent className="pt-6">
              <div className="mb-5">
                <h2 className="text-base font-semibold text-foreground">
                  Patient Communication
                </h2>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Choose how the patient will be notified
                </p>
              </div>
              <Separator className="mb-6" />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Checkbox id="sms-notify" defaultChecked />
                  <div className="flex flex-col gap-0.5">
                    <Label
                      htmlFor="sms-notify"
                      className="cursor-pointer text-sm font-medium text-foreground"
                    >
                      Send SMS notification to patient
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Patient will receive a text message with referral details
                      and booking link
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="email-notify" />
                  <div className="flex flex-col gap-0.5">
                    <Label
                      htmlFor="email-notify"
                      className="cursor-pointer text-sm font-medium text-foreground"
                    >
                      Send email notification to patient
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Patient will receive an email with referral summary and
                      next steps
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer actions */}
          <div className="flex items-center justify-between border-t border-border pb-8 pt-6">
            <Link href="/">
              <Button
                type="button"
                variant="outline"
                className="h-11 px-6 text-sm bg-transparent"
              >
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              className="h-11 gap-2 bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              <Send className="h-4 w-4" />
              Send Referral
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
