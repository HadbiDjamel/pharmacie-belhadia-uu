"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Download, Plus } from "lucide-react"

const paymentHistory = [
  { month: "September 2025", sessions: 12, rate: 150, total: 1800, status: "Paid", date: "2025-09-30" },
  { month: "August 2025", sessions: 10, rate: 150, total: 1500, status: "Paid", date: "2025-08-31" },
  { month: "July 2025", sessions: 14, rate: 150, total: 2100, status: "Paid", date: "2025-07-31" },
  { month: "June 2025", sessions: 11, rate: 150, total: 1650, status: "Paid", date: "2025-06-30" },
]

export default function DoctorPaymentTracker() {
  const totalEarnings = paymentHistory.reduce((sum, p) => sum + p.total, 0)
  const totalSessions = paymentHistory.reduce((sum, p) => sum + p.sessions, 0)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Payment Tracking</h2>
          <p className="text-slate-400 mt-1">Dr. Avance Djamel - Orthopedic Specialist</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
          <Download className="w-4 h-4" />
          Export Statement
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-400">${totalEarnings}</div>
            <p className="text-xs text-slate-500 mt-1">Last 4 months</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Total Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">{totalSessions}</div>
            <p className="text-xs text-slate-500 mt-1">Last 4 months</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Hourly Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-400">$150/hr</div>
            <p className="text-xs text-slate-500 mt-1">Standard rate</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Payment History</CardTitle>
          <CardDescription className="text-slate-400">Monthly payment records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700 hover:bg-transparent">
                  <TableHead className="text-slate-400">Month</TableHead>
                  <TableHead className="text-slate-400">Sessions</TableHead>
                  <TableHead className="text-slate-400">Rate</TableHead>
                  <TableHead className="text-slate-400">Total</TableHead>
                  <TableHead className="text-slate-400">Status</TableHead>
                  <TableHead className="text-slate-400">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map((payment, idx) => (
                  <TableRow key={idx} className="border-slate-700 hover:bg-slate-700/30">
                    <TableCell className="text-white">{payment.month}</TableCell>
                    <TableCell className="text-slate-300">{payment.sessions}</TableCell>
                    <TableCell className="text-slate-300">${payment.rate}/hr</TableCell>
                    <TableCell className="text-emerald-400 font-semibold">${payment.total}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-medium">
                        {payment.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-slate-300">{payment.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Record New Session</CardTitle>
          <CardDescription className="text-slate-400">Add a new session for this doctor</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-slate-300 text-sm">Date</label>
              <input
                type="date"
                className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-slate-300 text-sm">Duration (hours)</label>
              <input
                type="number"
                placeholder="0"
                className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-slate-300 text-sm">Notes</label>
              <input
                type="text"
                placeholder="Session notes"
                className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2 mt-1"
              />
            </div>
          </div>
          <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
            <Plus className="w-4 h-4" />
            Record Session
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
