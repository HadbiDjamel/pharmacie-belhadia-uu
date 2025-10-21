"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit2, Trash2, Eye } from "lucide-react"

const employees = [
  { id: 1, name: "Maria Garcia", role: "Physiotherapist", salary: 2500, status: "Active", joinDate: "2024-01-15" },
  { id: 2, name: "Ahmed Duffa", role: "Therapist", salary: 2000, status: "Active", joinDate: "2024-02-20" },
  { id: 3, name: "Siham", role: "Secretary", salary: 1500, status: "Active", joinDate: "2024-03-10" },
  { id: 4, name: "Ibrahim", role: "Assistant", salary: 1200, status: "On Leave", joinDate: "2024-04-05" },
]

export default function EmployeeManagement() {
  const [isAddingNew, setIsAddingNew] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Employee Management</h2>
          <p className="text-slate-400 mt-1">Manage staff and payroll</p>
        </div>
        <Button
          onClick={() => setIsAddingNew(!isAddingNew)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Employee
        </Button>
      </div>

      {isAddingNew && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Add New Employee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-slate-300">Full Name</Label>
                <Input placeholder="Enter name" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
              <div>
                <Label className="text-slate-300">Role</Label>
                <Input
                  placeholder="e.g., Physiotherapist"
                  className="bg-slate-700/50 border-slate-600 text-white mt-1"
                />
              </div>
              <div>
                <Label className="text-slate-300">Monthly Salary</Label>
                <Input type="number" placeholder="0" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
              <div>
                <Label className="text-slate-300">Join Date</Label>
                <Input type="date" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Add Employee</Button>
              <Button
                variant="outline"
                onClick={() => setIsAddingNew(false)}
                className="border-slate-600 text-slate-300"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Staff Directory</CardTitle>
          <CardDescription className="text-slate-400">{employees.length} active employees</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700 hover:bg-transparent">
                  <TableHead className="text-slate-400">Name</TableHead>
                  <TableHead className="text-slate-400">Role</TableHead>
                  <TableHead className="text-slate-400">Salary</TableHead>
                  <TableHead className="text-slate-400">Status</TableHead>
                  <TableHead className="text-slate-400">Join Date</TableHead>
                  <TableHead className="text-slate-400">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((emp) => (
                  <TableRow key={emp.id} className="border-slate-700 hover:bg-slate-700/30">
                    <TableCell className="text-white font-medium">{emp.name}</TableCell>
                    <TableCell className="text-slate-300">{emp.role}</TableCell>
                    <TableCell className="text-emerald-400">${emp.salary}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          emp.status === "Active"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {emp.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-slate-300">{emp.joinDate}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
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
