"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import Sidebar from "@/components/sidebar"
import DailyOperations from "@/components/daily-operations"
import EmployeeManagement from "@/components/employee-management"
import DoctorManagement from "@/components/doctor-management"
import FinancialReports from "@/components/financial-reports"
import PayrollSummary from "@/components/payroll-summary"
import ExpenseTracker from "@/components/expense-tracker"
import AttendanceTracker from "@/components/attendance-tracker"
import DoctorPaymentTracker from "@/components/doctor-payment-tracker"

const dashboardData = [
  { date: "9/18", revenue: 7000, expenses: 3000, net: 4000 },
  { date: "9/19", revenue: 6000, expenses: 2500, net: 3500 },
  { date: "9/20", revenue: 8000, expenses: 3500, net: 4500 },
  { date: "9/21", revenue: 9000, expenses: 4000, net: 5000 },
  { date: "9/22", revenue: 7500, expenses: 3200, net: 4300 },
  { date: "9/23", revenue: 8500, expenses: 3800, net: 4700 },
  { date: "9/24", revenue: 9500, expenses: 4200, net: 5300 },
]

const expenseBreakdown = [
  { name: "Cabinet Expenses", value: 35, fill: "#ef4444" },
  { name: "Staff Advances", value: 25, fill: "#f97316" },
  { name: "Doctor Payments", value: 30, fill: "#eab308" },
  { name: "Utilities", value: 10, fill: "#06b6d4" },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const authToken = localStorage.getItem("authToken")
    if (!authToken) {
      router.push("/")
    } else {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="flex h-screen bg-slate-950 items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-slate-400">September 2025 - Clinic Financial Overview</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-slate-800 border-slate-700 overflow-x-auto">
              <TabsTrigger value="overview" className="text-slate-300 data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="daily" className="text-slate-300 data-[state=active]:text-white">
                Daily Ops
              </TabsTrigger>
              <TabsTrigger value="employees" className="text-slate-300 data-[state=active]:text-white">
                Employees
              </TabsTrigger>
              <TabsTrigger value="attendance" className="text-slate-300 data-[state=active]:text-white">
                Attendance
              </TabsTrigger>
              <TabsTrigger value="payroll" className="text-slate-300 data-[state=active]:text-white">
                Payroll
              </TabsTrigger>
              <TabsTrigger value="expenses" className="text-slate-300 data-[state=active]:text-white">
                Expenses
              </TabsTrigger>
              <TabsTrigger value="doctors" className="text-slate-300 data-[state=active]:text-white">
                Doctors
              </TabsTrigger>
              <TabsTrigger value="doctor-payments" className="text-slate-300 data-[state=active]:text-white">
                Dr. Payments
              </TabsTrigger>
              <TabsTrigger value="reports" className="text-slate-300 data-[state=active]:text-white">
                Reports
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">Total Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-emerald-400">$55,500</div>
                    <p className="text-xs text-slate-500 mt-1">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">Total Expenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-400">$24,200</div>
                    <p className="text-xs text-slate-500 mt-1">-5% from last month</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">Net Income</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-400">$31,300</div>
                    <p className="text-xs text-slate-500 mt-1">+18% from last month</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-400">Active Staff</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-400">12</div>
                    <p className="text-xs text-slate-500 mt-1">2 on leave</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Revenue vs Expenses</CardTitle>
                    <CardDescription className="text-slate-400">Daily comparison for September</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={dashboardData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="date" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
                        <Legend />
                        <Bar dataKey="revenue" fill="#10b981" />
                        <Bar dataKey="expenses" fill="#ef4444" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Expense Breakdown</CardTitle>
                    <CardDescription className="text-slate-400">By category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={expenseBreakdown}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {expenseBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="daily">
              <DailyOperations />
            </TabsContent>

            <TabsContent value="employees">
              <EmployeeManagement />
            </TabsContent>

            <TabsContent value="attendance">
              <AttendanceTracker />
            </TabsContent>

            <TabsContent value="payroll">
              <PayrollSummary />
            </TabsContent>

            <TabsContent value="expenses">
              <ExpenseTracker />
            </TabsContent>

            <TabsContent value="doctors">
              <DoctorManagement />
            </TabsContent>

            <TabsContent value="doctor-payments">
              <DoctorPaymentTracker />
            </TabsContent>

            <TabsContent value="reports">
              <FinancialReports />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
