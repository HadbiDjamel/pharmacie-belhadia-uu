"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const payrollData = [
  { employee: "Maria Garcia", role: "Physiotherapist", salary: 2500, advances: 500, deductions: 100, net: 1900 },
  { employee: "Ahmed Duffa", role: "Therapist", salary: 2000, advances: 300, deductions: 80, net: 1620 },
  { employee: "Siham", role: "Secretary", salary: 1500, advances: 200, deductions: 60, net: 1240 },
  { employee: "Ibrahim", role: "Assistant", salary: 1200, advances: 100, deductions: 50, net: 1050 },
]

export default function PayrollSummary() {
  const totalSalaries = payrollData.reduce((sum, emp) => sum + emp.salary, 0)
  const totalAdvances = payrollData.reduce((sum, emp) => sum + emp.advances, 0)
  const totalDeductions = payrollData.reduce((sum, emp) => sum + emp.deductions, 0)
  const totalNet = payrollData.reduce((sum, emp) => sum + emp.net, 0)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Payroll Summary</h2>
          <p className="text-slate-400 mt-1">September 2025</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
          <Download className="w-4 h-4" />
          Export Payroll
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Total Salaries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-400">${totalSalaries}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Total Advances</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-400">${totalAdvances}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Total Deductions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">${totalDeductions}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Total Net</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">${totalNet}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Payroll Details</CardTitle>
          <CardDescription className="text-slate-400">Employee payroll breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700 hover:bg-transparent">
                  <TableHead className="text-slate-400">Employee</TableHead>
                  <TableHead className="text-slate-400">Role</TableHead>
                  <TableHead className="text-slate-400">Salary</TableHead>
                  <TableHead className="text-slate-400">Advances</TableHead>
                  <TableHead className="text-slate-400">Deductions</TableHead>
                  <TableHead className="text-slate-400">Net Pay</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payrollData.map((emp, idx) => (
                  <TableRow key={idx} className="border-slate-700 hover:bg-slate-700/30">
                    <TableCell className="text-white font-medium">{emp.employee}</TableCell>
                    <TableCell className="text-slate-300">{emp.role}</TableCell>
                    <TableCell className="text-emerald-400">${emp.salary}</TableCell>
                    <TableCell className="text-orange-400">${emp.advances}</TableCell>
                    <TableCell className="text-red-400">${emp.deductions}</TableCell>
                    <TableCell className="text-blue-400 font-semibold">${emp.net}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
