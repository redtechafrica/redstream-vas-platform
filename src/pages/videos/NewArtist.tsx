
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Upload, User } from "lucide-react"
import { UserNav } from "@/components/user-nav"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"

export default function NewArtist() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    bio: "",
    genre: "",
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
    if (!formData.name || !formData.description) {
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
      description: "Artist created successfully",
    })
    navigate("/videos/artists")
  }

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">New Artist</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Videos → Artists → New</p>
        </div>
        <UserNav />
      </header>
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Add New Artist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="avatar">Artist Photo</Label>
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
                      Upload Photo
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
                <Label htmlFor="name">Artist Name <span className="text-red-500">*</span></Label>
                <Input 
                  id="name" 
                  placeholder="Enter artist name" 
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="genre">Genre</Label>
                <Input 
                  id="genre" 
                  placeholder="Enter genre" 
                  value={formData.genre}
                  onChange={(e) => handleInputChange("genre", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description <span className="text-red-500">*</span></Label>
              <Textarea 
                id="description" 
                placeholder="Enter artist description" 
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Biography</Label>
              <Textarea 
                id="bio" 
                placeholder="Enter artist biography" 
                value={formData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                rows={5}
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => navigate("/videos/artists")}>Cancel</Button>
              <Button onClick={handleSave}>Save Artist</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
