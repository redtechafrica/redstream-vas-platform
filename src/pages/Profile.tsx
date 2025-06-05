
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, VideoIcon, Users, Calendar } from "lucide-react"

export default function Profile() {
  const profileData = {
    name: "Admin User",
    email: "admin@redstream.com",
    role: "System Administrator",
    joinDate: "January 2024",
    totalTimeSpent: "45h 30m",
    videosUploaded: 127,
    usersManaged: 1450,
    lastLogin: "2025-06-05 14:30"
  }

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Profile</h1>
          <p className="text-sm text-muted-foreground">Home → Profile</p>
        </div>
      </header>
      
      <div className="flex-1 space-y-6 p-8 pt-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Your account details and role information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/avatars/admin.png" />
                  <AvatarFallback className="bg-red-500 text-white text-lg">A</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">{profileData.name}</h3>
                  <p className="text-sm text-muted-foreground">{profileData.email}</p>
                  <Badge variant="secondary">{profileData.role}</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Joined {profileData.joinDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Last login: {profileData.lastLogin}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity Statistics</CardTitle>
              <CardDescription>Your dashboard usage and management stats</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium">Time Spent</span>
                  </div>
                  <p className="text-2xl font-bold">{profileData.totalTimeSpent}</p>
                  <p className="text-xs text-muted-foreground">Cumulative backend time</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <VideoIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Videos</span>
                  </div>
                  <p className="text-2xl font-bold">{profileData.videosUploaded}</p>
                  <p className="text-xs text-muted-foreground">Total uploaded</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    <span className="text-sm font-medium">Users</span>
                  </div>
                  <p className="text-2xl font-bold">{profileData.usersManaged}</p>
                  <p className="text-xs text-muted-foreground">Under management</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-medium">Active Days</span>
                  </div>
                  <p className="text-2xl font-bold">89</p>
                  <p className="text-xs text-muted-foreground">This month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
