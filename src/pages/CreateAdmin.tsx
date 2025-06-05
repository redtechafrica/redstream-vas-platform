
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Upload, User } from "lucide-react"

const CreateAdmin = () => {
  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Create New Admin.</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Admins → Add New</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">About</span>
          <span className="text-sm text-muted-foreground">Support</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white text-sm font-medium">
            N
          </div>
        </div>
      </header>
      
      <div className="flex-1 p-8 pt-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Admin Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="avatar">Avatar</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback>
                      <User className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Image
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Allowed file types: png, jpg, jpeg
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Full Name <span className="text-red-500">*</span></Label>
                  <Input id="firstName" placeholder="First name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">&nbsp;</Label>
                  <Input id="lastName" placeholder="Last name" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Logon Details <span className="text-red-500">*</span></Label>
                  <Input id="email" type="email" placeholder="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">&nbsp;</Label>
                  <Input id="password" type="password" placeholder="password" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">Other Details <span className="text-red-500">*</span></Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="-- choose one --" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="sadmin">Super Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">&nbsp;</Label>
                  <Input id="phone" placeholder="Phone No." />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <Label>Admin. Manager <span className="text-red-500">*</span></Label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="read" />
                      <Label htmlFor="read">Read</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="write" />
                      <Label htmlFor="write">Write</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="execute" />
                      <Label htmlFor="execute">Execute</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>redtech Manager <span className="text-red-500">*</span></Label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="redtech-read" />
                      <Label htmlFor="redtech-read">Read</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="redtech-write" />
                      <Label htmlFor="redtech-write">Write</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="redtech-execute" />
                      <Label htmlFor="redtech-execute">Execute</Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline">Discard</Button>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CreateAdmin
