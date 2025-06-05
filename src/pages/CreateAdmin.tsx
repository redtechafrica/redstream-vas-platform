
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Upload, User } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { UserNav } from "@/components/user-nav"

const CreateAdmin = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    avatar: null as File | null
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, avatar: file }))
      toast({
        title: "File uploaded",
        description: `${file.name} has been selected`,
      })
    }
  }

  const handleSave = () => {
    if (!formData.firstName || !formData.email || !formData.password || !formData.role) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      })
      return
    }

    // API call would go here
    toast({
      title: "Success",
      description: "Admin created successfully",
    })
  }

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Create New Admin.</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Admins → Add New</p>
        </div>
        <UserNav />
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
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="h-4 w-4" />
                        Upload Image
                        <input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileUpload}
                        />
                      </label>
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
                  <Input 
                    id="firstName" 
                    placeholder="First name" 
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">&nbsp;</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Last name" 
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Logon Details <span className="text-red-500">*</span></Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">&nbsp;</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="password" 
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">Other Details <span className="text-red-500">*</span></Label>
                  <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
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
                  <Input 
                    id="phone" 
                    placeholder="Phone No." 
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
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
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CreateAdmin
