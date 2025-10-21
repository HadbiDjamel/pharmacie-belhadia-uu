"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, Stethoscope, FileText, Settings, LogOut, BarChart3 } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard?tab=daily", label: "Daily Operations", icon: FileText },
    { href: "/dashboard?tab=employees", label: "Employees", icon: Users },
    { href: "/dashboard?tab=payroll", label: "Payroll", icon: BarChart3 },
    { href: "/dashboard?tab=doctors", label: "Doctors", icon: Stethoscope },
    { href: "/dashboard?tab=reports", label: "Reports", icon: FileText },
    { href: "/settings", label: "Settings", icon: Settings },
  ]

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userName")
    localStorage.removeItem("userRole")
    router.push("/")
  }

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
          <span className="text-white font-bold text-lg">C</span>
        </div>
        <h1 className="text-xl font-bold text-white">ClinicPro</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  isActive
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </nav>

      <Button
        onClick={handleLogout}
        variant="ghost"
        className="w-full justify-start gap-3 text-slate-400 hover:text-red-400 hover:bg-slate-800"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </Button>
    </aside>
  )
}
