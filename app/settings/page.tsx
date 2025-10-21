"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Sidebar from "@/components/sidebar"
import { Save, Lock, Users, Bell, Database, Shield, Download } from "lucide-react"

export default function SettingsPage() {
  const [clinicName, setClinicName] = useState("Rehabilitation & Therapy Clinic")
  const [clinicEmail, setClinicEmail] = useState("admin@clinic.com")
  const [clinicPhone, setClinicPhone] = useState("+1 (555) 123-4567")
  const [currency, setCurrency] = useState("USD")
  const [timezone, setTimezone] = useState("UTC-5")

  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
            <p className="text-slate-400">Manage clinic configuration and preferences</p>
          </div>

          <Tabs defaultValue="clinic" className="space-y-6">
            <TabsList className="bg-slate-800 border-slate-700">
              <TabsTrigger value="clinic" className="text-slate-300 data-[state=active]:text-white">
                Clinic Info
              </TabsTrigger>
              <TabsTrigger value="users" className="text-slate-300 data-[state=active]:text-white">
                Users & Roles
              </TabsTrigger>
              <TabsTrigger value="security" className="text-slate-300 data-[state=active]:text-white">
                Security
              </TabsTrigger>
              <TabsTrigger value="notifications" className="text-slate-300 data-[state=active]:text-white">
                Notifications
              </TabsTrigger>
              <TabsTrigger value="backup" className="text-slate-300 data-[state=active]:text-white">
                Backup & Data
              </TabsTrigger>
            </TabsList>

            <TabsContent value="clinic" className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Clinic Information</CardTitle>
                  <CardDescription className="text-slate-400">Update your clinic details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-slate-300">Clinic Name</Label>
                      <Input
                        value={clinicName}
                        onChange={(e) => setClinicName(e.target.value)}
                        className="bg-slate-700/50 border-slate-600 text-white mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-slate-300">Email</Label>
                      <Input
                        value={clinicEmail}
                        onChange={(e) => setClinicEmail(e.target.value)}
                        className="bg-slate-700/50 border-slate-600 text-white mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-slate-300">Phone</Label>
                      <Input
                        value={clinicPhone}
                        onChange={(e) => setClinicPhone(e.target.value)}
                        className="bg-slate-700/50 border-slate-600 text-white mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-slate-300">Currency</Label>
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2 mt-2"
                      >
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>DZD</option>
                      </select>
                    </div>
                    <div>
                      <Label className="text-slate-300">Timezone</Label>
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2 mt-2"
                      >
                        <option>UTC-5</option>
                        <option>UTC-6</option>
                        <option>UTC+0</option>
                        <option>UTC+1</option>
                      </select>
                    </div>
                    <div>
                      <Label className="text-slate-300">Address</Label>
                      <Input
                        placeholder="Clinic address"
                        className="bg-slate-700/50 border-slate-600 text-white mt-2"
                      />
                    </div>
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users" className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">User Management</CardTitle>
                  <CardDescription className="text-slate-400">Manage user accounts and roles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                      <div>
                        <p className="text-white font-medium">Admin User</p>
                        <p className="text-slate-400 text-sm">admin@clinic.com</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded text-sm font-medium">
                          Admin
                        </span>
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                      <div>
                        <p className="text-white font-medium">Secretary</p>
                        <p className="text-slate-400 text-sm">secretary@clinic.com</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-medium">
                          Secretary
                        </span>
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                      <div>
                        <p className="text-white font-medium">Doctor Partner</p>
                        <p className="text-slate-400 text-sm">doctor@clinic.com</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-medium">
                          Doctor
                        </span>
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                    <Users className="w-4 h-4" />
                    Add New User
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">User Roles & Permissions</CardTitle>
                  <CardDescription className="text-slate-400">Define role-based access control</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                      <p className="text-white font-medium mb-2">Admin</p>
                      <p className="text-slate-400 text-sm">Full access to all features and settings</p>
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                      <p className="text-white font-medium mb-2">Secretary</p>
                      <p className="text-slate-400 text-sm">Can manage daily operations, employees, and view reports</p>
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                      <p className="text-white font-medium mb-2">Doctor</p>
                      <p className="text-slate-400 text-sm">Can view their own payments and schedule</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Security Settings</CardTitle>
                  <CardDescription className="text-slate-400">Manage password and security options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-slate-300">Current Password</Label>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="bg-slate-700/50 border-slate-600 text-white mt-2"
                    />
                  </div>
                  <div>
                    <Label className="text-slate-300">New Password</Label>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="bg-slate-700/50 border-slate-600 text-white mt-2"
                    />
                  </div>
                  <div>
                    <Label className="text-slate-300">Confirm Password</Label>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="bg-slate-700/50 border-slate-600 text-white mt-2"
                    />
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                    <Lock className="w-4 h-4" />
                    Update Password
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Two-Factor Authentication</CardTitle>
                  <CardDescription className="text-slate-400">Add an extra layer of security</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                    <div>
                      <p className="text-white font-medium">2FA Status</p>
                      <p className="text-slate-400 text-sm">Currently disabled</p>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Enable 2FA</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Notification Preferences</CardTitle>
                  <CardDescription className="text-slate-400">Choose how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                    <div>
                      <p className="text-white font-medium">Daily Summary</p>
                      <p className="text-slate-400 text-sm">Receive daily financial summary</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                    <div>
                      <p className="text-white font-medium">Payment Reminders</p>
                      <p className="text-slate-400 text-sm">Remind about pending payments</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                    <div>
                      <p className="text-white font-medium">Staff Alerts</p>
                      <p className="text-slate-400 text-sm">Alerts for staff-related events</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                    <div>
                      <p className="text-white font-medium">System Updates</p>
                      <p className="text-slate-400 text-sm">Notifications about system updates</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                  <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                    <Bell className="w-4 h-4" />
                    Save Preferences
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="backup" className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Data Backup</CardTitle>
                  <CardDescription className="text-slate-400">Manage your clinic data backups</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-white font-medium">Last Backup</p>
                        <p className="text-slate-400 text-sm">September 24, 2025 at 2:30 AM</p>
                      </div>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-medium">
                        Success
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-700">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-white font-medium">Backup Frequency</p>
                        <p className="text-slate-400 text-sm">Daily at 2:00 AM</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                        Change
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                    <Database className="w-4 h-4" />
                    Create Manual Backup Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Data Export</CardTitle>
                  <CardDescription className="text-slate-400">Export your clinic data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2">
                    <Download className="w-4 h-4" />
                    Export All Data (CSV)
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2">
                    <Download className="w-4 h-4" />
                    Export Financial Records (PDF)
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-red-950/20 border-red-900">
                <CardHeader>
                  <CardTitle className="text-red-400">Danger Zone</CardTitle>
                  <CardDescription className="text-red-300">Irreversible actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white gap-2">
                    <Shield className="w-4 h-4" />
                    Delete All Data
                  </Button>
                  <p className="text-xs text-red-300 mt-2">
                    This action cannot be undone. Please proceed with caution.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
