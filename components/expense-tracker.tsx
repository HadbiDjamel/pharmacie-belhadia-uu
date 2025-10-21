"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit2, Trash2 } from "lucide-react"

const expenseCategories = [
  { id: 1, category: "Electricity", amount: 400, date: "9/24/2025", status: "Paid" },
  { id: 2, category: "Rent", amount: 2000, date: "9/20/2025", status: "Paid" },
  { id: 3, category: "Medical Supplies", amount: 800, date: "9/22/2025", status: "Pending" },
  { id: 4, category: "Equipment Maintenance", amount: 500, date: "9/23/2025", status: "Paid" },
  { id: 5, category: "Insurance", amount: 1200, date: "9/15/2025", status: "Paid" },
]

export default function ExpenseTracker() {
  const [isAddingNew, setIsAddingNew] = useState(false)

  const totalExpenses = expenseCategories.reduce((sum, exp) => sum + exp.amount, 0)
  const paidExpenses = expenseCategories
    .filter((exp) => exp.status === "Paid")
    .reduce((sum, exp) => sum + exp.amount, 0)
  const pendingExpenses = expenseCategories
    .filter((exp) => exp.status === "Pending")
    .reduce((sum, exp) => sum + exp.amount, 0)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Expense Tracker</h2>
          <p className="text-slate-400 mt-1">Track and manage clinic expenses</p>
        </div>
        <Button
          onClick={() => setIsAddingNew(!isAddingNew)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Expense
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">${totalExpenses}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-400">${paidExpenses}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">${pendingExpenses}</div>
          </CardContent>
        </Card>
      </div>

      {isAddingNew && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Add New Expense</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-slate-300">Category</Label>
                <Input placeholder="e.g., Electricity" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
              <div>
                <Label className="text-slate-300">Amount</Label>
                <Input type="number" placeholder="0" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
              <div>
                <Label className="text-slate-300">Date</Label>
                <Input type="date" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Add Expense</Button>
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
          <CardTitle className="text-white">Expense List</CardTitle>
          <CardDescription className="text-slate-400">All clinic expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700 hover:bg-transparent">
                  <TableHead className="text-slate-400">Category</TableHead>
                  <TableHead className="text-slate-400">Amount</TableHead>
                  <TableHead className="text-slate-400">Date</TableHead>
                  <TableHead className="text-slate-400">Status</TableHead>
                  <TableHead className="text-slate-400">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expenseCategories.map((exp) => (
                  <TableRow key={exp.id} className="border-slate-700 hover:bg-slate-700/30">
                    <TableCell className="text-white font-medium">{exp.category}</TableCell>
                    <TableCell className="text-red-400">${exp.amount}</TableCell>
                    <TableCell className="text-slate-300">{exp.date}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          exp.status === "Paid"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {exp.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
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
