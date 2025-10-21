"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit2, Trash2, Eye } from "lucide-react"

const doctors = [
  { id: 1, name: "Dr. Avance Djamel", specialty: "Orthopedic", rate: 150, status: "Active", lastPayment: "2025-09-20" },
  { id: 2, name: "Dr. Bijama", specialty: "Physical Therapy", rate: 120, status: "Active", lastPayment: "2025-09-20" },
  {
    id: 3,
    name: "Dr. Cabinet Ortho",
    specialty: "Orthopedic Surgery",
    rate: 200,
    status: "Active",
    lastPayment: "2025-09-15",
  },
]

export default function DoctorManagement() {
  const [isAddingNew, setIsAddingNew] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Doctor & Collaborator Management</h2>
          <p className="text-slate-400 mt-1">Manage partner doctors and their payments</p>
        </div>
        <Button
          onClick={() => setIsAddingNew(!isAddingNew)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Doctor
        </Button>
      </div>

      {isAddingNew && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Add New Doctor/Collaborator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-slate-300">Full Name</Label>
                <Input placeholder="Dr. Name" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
              <div>
                <Label className="text-slate-300">Specialty</Label>
                <Input placeholder="e.g., Orthopedic" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
              <div>
                <Label className="text-slate-300">Hourly Rate</Label>
                <Input type="number" placeholder="0" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
              <div>
                <Label className="text-slate-300">Contact</Label>
                <Input placeholder="Phone or Email" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Add Doctor</Button>
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
          <CardTitle className="text-white">Doctors & Collaborators</CardTitle>
          <CardDescription className="text-slate-400">{doctors.length} active partners</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700 hover:bg-transparent">
                  <TableHead className="text-slate-400">Name</TableHead>
                  <TableHead className="text-slate-400">Specialty</TableHead>
                  <TableHead className="text-slate-400">Rate</TableHead>
                  <TableHead className="text-slate-400">Status</TableHead>
                  <TableHead className="text-slate-400">Last Payment</TableHead>
                  <TableHead className="text-slate-400">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {doctors.map((doc) => (
                  <TableRow key={doc.id} className="border-slate-700 hover:bg-slate-700/30">
                    <TableCell className="text-white font-medium">{doc.name}</TableCell>
                    <TableCell className="text-slate-300">{doc.specialty}</TableCell>
                    <TableCell className="text-emerald-400">${doc.rate}/hr</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-emerald-500/20 text-emerald-400">
                        {doc.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-slate-300">{doc.lastPayment}</TableCell>
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
