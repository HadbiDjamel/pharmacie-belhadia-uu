"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Demo credentials validation
      if (email === "admin@clinic.com" && password === "password123") {
        // Store auth token in localStorage
        localStorage.setItem("authToken", "demo-token-" + Date.now())
        localStorage.setItem("userEmail", email)
        localStorage.setItem("userName", "Admin User")
        localStorage.setItem("userRole", "admin")

        // Redirect to dashboard
        router.push("/dashboard")
      } else if (email === "doctor@clinic.com" && password === "password123") {
        localStorage.setItem("authToken", "demo-token-" + Date.now())
        localStorage.setItem("userEmail", email)
        localStorage.setItem("userName", "Dr. Partner")
        localStorage.setItem("userRole", "doctor")
        router.push("/dashboard")
      } else if (email === "staff@clinic.com" && password === "password123") {
        localStorage.setItem("authToken", "demo-token-" + Date.now())
        localStorage.setItem("userEmail", email)
        localStorage.setItem("userName", "Staff Member")
        localStorage.setItem("userRole", "staff")
        router.push("/dashboard")
      } else {
        setError("Invalid email or password. Try admin@clinic.com / password123")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
          <CardHeader className="space-y-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <h1 className="text-2xl font-bold text-white">ClinicPro</h1>
            </div>
            <CardTitle className="text-white">Welcome Back</CardTitle>
            <CardDescription className="text-slate-400">Sign in to your clinic management account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <Alert className="bg-red-500/10 border-red-500/50">
                  <AlertDescription className="text-red-400">{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@clinic.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-300">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
            <div className="mt-6 space-y-2 text-sm text-slate-400">
              <p className="font-semibold text-slate-300">Demo Credentials:</p>
              <p>👤 Admin: admin@clinic.com / password123</p>
              <p>👨‍⚕️ Doctor: doctor@clinic.com / password123</p>
              <p>👥 Staff: staff@clinic.com / password123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
