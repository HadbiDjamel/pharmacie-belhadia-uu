"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit2, Trash2 } from "lucide-react"

const dailyData = [
  {
    id: 1,
    date: "9/24/2025",
    recette: 20350,
    monnaie: 890,
    kineRemplaçant: 2000,
    fraisCabinet: 2600,
    avancePersonnel: 1800,
    bijama: 500,
    cabinetOrtho: 1600,
    electricite: 400,
    total: 12000,
  },
  {
    id: 2,
    date: "9/23/2025",
    recette: 17350,
    monnaie: 2790,
    kineRemplaçant: 3000,
    fraisCabinet: 3000,
    avancePersonnel: 3000,
    bijama: 1600,
    cabinetOrtho: 1600,
    electricite: 600,
    total: 12000,
  },
  {
    id: 3,
    date: "9/22/2025",
    recette: 20350,
    monnaie: 1430,
    kineRemplaçant: 1600,
    fraisCabinet: 2600,
    avancePersonnel: 1200,
    bijama: 1200,
    cabinetOrtho: 1200,
    electricite: 600,
    total: 6000,
  },
]

export default function DailyOperations() {
  const [isAddingNew, setIsAddingNew] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Daily Operations</h2>
          <p className="text-slate-400 mt-1">Track daily revenue and expenses</p>
        </div>
        <Button
          onClick={() => setIsAddingNew(!isAddingNew)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
        >
          <Plus className="w-4 h-4" />
          New Entry
        </Button>
      </div>

      {isAddingNew && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Add Daily Entry</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-slate-300">Date</Label>
                <Input type="date" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
              <div>
                <Label className="text-slate-300">Recette (Income)</Label>
                <Input type="number" placeholder="0" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
              <div>
                <Label className="text-slate-300">Monnaie (Change)</Label>
                <Input type="number" placeholder="0" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
              <div>
                <Label className="text-slate-300">Kine Remplaçant</Label>
                <Input type="number" placeholder="0" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
              <div>
                <Label className="text-slate-300">Frais Cabinet</Label>
                <Input type="number" placeholder="0" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
              <div>
                <Label className="text-slate-300">Avance Personnel</Label>
                <Input type="number" placeholder="0" className="bg-slate-700/50 border-slate-600 text-white mt-1" />
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Save Entry</Button>
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
          <CardTitle className="text-white">Recent Entries</CardTitle>
          <CardDescription className="text-slate-400">Last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700 hover:bg-transparent">
                  <TableHead className="text-slate-400">Date</TableHead>
                  <TableHead className="text-slate-400">Recette</TableHead>
                  <TableHead className="text-slate-400">Monnaie</TableHead>
                  <TableHead className="text-slate-400">Kine</TableHead>
                  <TableHead className="text-slate-400">Cabinet</TableHead>
                  <TableHead className="text-slate-400">Avance</TableHead>
                  <TableHead className="text-slate-400">Total</TableHead>
                  <TableHead className="text-slate-400">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dailyData.map((row) => (
                  <TableRow key={row.id} className="border-slate-700 hover:bg-slate-700/30">
                    <TableCell className="text-white">{row.date}</TableCell>
                    <TableCell className="text-emerald-400">${row.recette}</TableCell>
                    <TableCell className="text-slate-300">${row.monnaie}</TableCell>
                    <TableCell className="text-slate-300">${row.kineRemplaçant}</TableCell>
                    <TableCell className="text-slate-300">${row.fraisCabinet}</TableCell>
                    <TableCell className="text-slate-300">${row.avancePersonnel}</TableCell>
                    <TableCell className="text-blue-400 font-semibold">${row.total}</TableCell>
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
