"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Edit2, Save } from "lucide-react"

const employeePayHistory = [
  { month: "September 2025", salary: 2500, advances: 500, deductions: 100, net: 1900, status: "Paid" },
  { month: "August 2025", salary: 2500, advances: 300, deductions: 100, net: 2100, status: "Paid" },
  { month: "July 2025", salary: 2500, advances: 400, deductions: 100, net: 2000, status: "Paid" },
  { month: "June 2025", salary: 2500, advances: 200, deductions: 100, net: 2200, status: "Paid" },
]

export default function EmployeeDetails({ employeeId }: { employeeId: number }) {
  const [isEditing, setIsEditing] = useState(false)
  const [employee, setEmployee] = useState({
    name: "Maria Garcia",
    role: "Physiotherapist",
    email: "maria@clinic.com",
    phone: "+1 (555) 123-4567",
    salary: 2500,
    joinDate: "2024-01-15",
    status: "Active",
    department: "Therapy",
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" className="text-slate-400 hover:text-white">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-white">{employee.name}</h1>
          <p className="text-slate-400">{employee.role}</p>
        </div>
      </div>

      <Tabs defaultValue="info" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="info" className="text-slate-300 data-[state=active]:text-white">
            Information
          </TabsTrigger>
          <TabsTrigger value="payroll" className="text-slate-300 data-[state=active]:text-white">
            Payroll History
          </TabsTrigger>
          <TabsTrigger value="advances" className="text-slate-300 data-[state=active]:text-white">
            Advances
          </TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white">Employee Information</CardTitle>
                <CardDescription className="text-slate-400">Personal and employment details</CardDescription>
              </div>
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-slate-300">Full Name</Label>
                  <Input
                    value={employee.name}
                    onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                    disabled={!isEditing}
                    className="bg-slate-700/50 border-slate-600 text-white mt-2 disabled:opacity-50"
                  />
                </div>
                <div>
                  <Label className="text-slate-300">Email</Label>
                  <Input
                    value={employee.email}
                    onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                    disabled={!isEditing}
                    className="bg-slate-700/50 border-slate-600 text-white mt-2 disabled:opacity-50"
                  />
                </div>
                <div>
                  <Label className="text-slate-300">Role</Label>
                  <Input
                    value={employee.role}
                    onChange={(e) => setEmployee({ ...employee, role: e.target.value })}
                    disabled={!isEditing}
                    className="bg-slate-700/50 border-slate-600 text-white mt-2 disabled:opacity-50"
                  />
                </div>
                <div>
                  <Label className="text-slate-300">Phone</Label>
                  <Input
                    value={employee.phone}
                    onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
                    disabled={!isEditing}
                    className="bg-slate-700/50 border-slate-600 text-white mt-2 disabled:opacity-50"
                  />
                </div>
                <div>
                  <Label className="text-slate-300">Monthly Salary</Label>
                  <Input
                    type="number"
                    value={employee.salary}
                    onChange={(e) => setEmployee({ ...employee, salary: Number.parseInt(e.target.value) })}
                    disabled={!isEditing}
                    className="bg-slate-700/50 border-slate-600 text-white mt-2 disabled:opacity-50"
                  />
                </div>
                <div>
                  <Label className="text-slate-300">Department</Label>
                  <Input
                    value={employee.department}
                    onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
                    disabled={!isEditing}
                    className="bg-slate-700/50 border-slate-600 text-white mt-2 disabled:opacity-50"
                  />
                </div>
                <div>
                  <Label className="text-slate-300">Join Date</Label>
                  <Input
                    type="date"
                    value={employee.joinDate}
                    onChange={(e) => setEmployee({ ...employee, joinDate: e.target.value })}
                    disabled={!isEditing}
                    className="bg-slate-700/50 border-slate-600 text-white mt-2 disabled:opacity-50"
                  />
                </div>
                <div>
                  <Label className="text-slate-300">Status</Label>
                  <select
                    value={employee.status}
                    onChange={(e) => setEmployee({ ...employee, status: e.target.value })}
                    disabled={!isEditing}
                    className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2 mt-2 disabled:opacity-50"
                  >
                    <option>Active</option>
                    <option>On Leave</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payroll">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Payroll History</CardTitle>
              <CardDescription className="text-slate-400">Last 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700 hover:bg-transparent">
                      <TableHead className="text-slate-400">Month</TableHead>
                      <TableHead className="text-slate-400">Salary</TableHead>
                      <TableHead className="text-slate-400">Advances</TableHead>
                      <TableHead className="text-slate-400">Deductions</TableHead>
                      <TableHead className="text-slate-400">Net Pay</TableHead>
                      <TableHead className="text-slate-400">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employeePayHistory.map((record, idx) => (
                      <TableRow key={idx} className="border-slate-700 hover:bg-slate-700/30">
                        <TableCell className="text-white">{record.month}</TableCell>
                        <TableCell className="text-emerald-400">${record.salary}</TableCell>
                        <TableCell className="text-orange-400">${record.advances}</TableCell>
                        <TableCell className="text-red-400">${record.deductions}</TableCell>
                        <TableCell className="text-blue-400 font-semibold">${record.net}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-medium">
                            {record.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advances">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Salary Advances</CardTitle>
              <CardDescription className="text-slate-400">Track employee advances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-medium">Advance Request - September 2025</p>
                      <p className="text-slate-400 text-sm mt-1">Amount: $500</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-medium">
                      Approved
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-medium">Advance Request - August 2025</p>
                      <p className="text-slate-400 text-sm mt-1">Amount: $300</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-medium">
                      Approved
                    </span>
                  </div>
                </div>
              </div>
              <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white">Request New Advance</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
