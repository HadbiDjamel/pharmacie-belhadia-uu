"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"
import { Download, Filter, TrendingUp } from "lucide-react"

const monthlyData = [
  { month: "Jan", revenue: 45000, expenses: 18000, net: 27000 },
  { month: "Feb", revenue: 52000, expenses: 20000, net: 32000 },
  { month: "Mar", revenue: 48000, expenses: 19000, net: 29000 },
  { month: "Apr", revenue: 61000, expenses: 22000, net: 39000 },
  { month: "May", revenue: 55000, expenses: 21000, net: 34000 },
  { month: "Jun", revenue: 58000, expenses: 23000, net: 35000 },
  { month: "Jul", revenue: 62000, expenses: 24000, net: 38000 },
  { month: "Aug", revenue: 59000, expenses: 22000, net: 37000 },
  { month: "Sep", revenue: 55500, expenses: 24200, net: 31300 },
]

const departmentRevenue = [
  { department: "Physiotherapy", revenue: 25000, percentage: 45 },
  { department: "Orthopedic", revenue: 18000, percentage: 32 },
  { department: "General Therapy", revenue: 12500, percentage: 23 },
]

const expensesByCategory = [
  { category: "Staff Salaries", amount: 12000, percentage: 50 },
  { category: "Doctor Payments", amount: 7200, percentage: 30 },
  { category: "Utilities & Rent", amount: 3000, percentage: 12 },
  { category: "Medical Supplies", amount: 2000, percentage: 8 },
]

export default function FinancialReports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Financial Reports</h2>
          <p className="text-slate-400 mt-1">Comprehensive financial analysis and insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-slate-600 text-slate-300 gap-2 bg-transparent">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
            <Download className="w-4 h-4" />
            Export PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">YTD Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-400">$497,000</div>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12% vs last year
            </p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">YTD Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">$193,000</div>
            <p className="text-xs text-slate-500 mt-1">38.8% of revenue</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">YTD Net Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">$304,000</div>
            <p className="text-xs text-slate-500 mt-1">61.2% profit margin</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Avg Monthly Net</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-400">$33,777</div>
            <p className="text-xs text-slate-500 mt-1">9 months average</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Revenue Trend</CardTitle>
          <CardDescription className="text-slate-400">Monthly revenue, expenses, and net income</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
              <Legend />
              <Area type="monotone" dataKey="revenue" stroke="#10b981" fillOpacity={1} fill="url(#colorRevenue)" />
              <Area type="monotone" dataKey="net" stroke="#3b82f6" fillOpacity={1} fill="url(#colorNet)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Revenue by Department</CardTitle>
            <CardDescription className="text-slate-400">Current month breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentRevenue.map((dept, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">{dept.department}</span>
                    <span className="text-emerald-400 font-semibold">${dept.revenue}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: `${dept.percentage}%` }}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{dept.percentage}% of total</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Expenses by Category</CardTitle>
            <CardDescription className="text-slate-400">Current month breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expensesByCategory.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">{exp.category}</span>
                    <span className="text-red-400 font-semibold">${exp.amount}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500" style={{ width: `${exp.percentage}%` }}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{exp.percentage}% of total</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Monthly Comparison</CardTitle>
          <CardDescription className="text-slate-400">Bar chart view of revenue and expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
              <Legend />
              <Bar dataKey="revenue" fill="#10b981" />
              <Bar dataKey="expenses" fill="#ef4444" />
              <Bar dataKey="net" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Key Performance Indicators</CardTitle>
          <CardDescription className="text-slate-400">Important metrics for clinic performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Profit Margin</p>
              <p className="text-2xl font-bold text-emerald-400">61.2%</p>
              <p className="text-xs text-slate-500 mt-2">Excellent performance</p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Revenue Growth</p>
              <p className="text-2xl font-bold text-blue-400">+12%</p>
              <p className="text-xs text-slate-500 mt-2">Year-over-year</p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Expense Ratio</p>
              <p className="text-2xl font-bold text-orange-400">38.8%</p>
              <p className="text-xs text-slate-500 mt-2">Well controlled</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
