"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const attendanceData = [
  { employee: "Maria Garcia", present: 22, absent: 1, leave: 2, workingDays: 25 },
  { employee: "Ahmed Duffa", present: 23, absent: 0, leave: 2, workingDays: 25 },
  { employee: "Siham", present: 24, absent: 1, leave: 0, workingDays: 25 },
  { employee: "Ibrahim", present: 20, absent: 2, leave: 3, workingDays: 25 },
]

export default function AttendanceTracker() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Attendance Tracker</h2>
          <p className="text-slate-400 mt-1">September 2025</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </Button>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Monthly Attendance</CardTitle>
          <CardDescription className="text-slate-400">Employee attendance summary</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700 hover:bg-transparent">
                  <TableHead className="text-slate-400">Employee</TableHead>
                  <TableHead className="text-slate-400">Present</TableHead>
                  <TableHead className="text-slate-400">Absent</TableHead>
                  <TableHead className="text-slate-400">Leave</TableHead>
                  <TableHead className="text-slate-400">Working Days</TableHead>
                  <TableHead className="text-slate-400">Attendance %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceData.map((record, idx) => {
                  const attendancePercent = ((record.present / record.workingDays) * 100).toFixed(1)
                  return (
                    <TableRow key={idx} className="border-slate-700 hover:bg-slate-700/30">
                      <TableCell className="text-white font-medium">{record.employee}</TableCell>
                      <TableCell className="text-emerald-400">{record.present}</TableCell>
                      <TableCell className="text-red-400">{record.absent}</TableCell>
                      <TableCell className="text-yellow-400">{record.leave}</TableCell>
                      <TableCell className="text-slate-300">{record.workingDays}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500" style={{ width: `${attendancePercent}%` }}></div>
                          </div>
                          <span className="text-emerald-400 font-medium">{attendancePercent}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
