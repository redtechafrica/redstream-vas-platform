
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"
import { UserNav } from "@/components/user-nav"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"

export default function NewVideo() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    category: "",
    artist: "",
    tags: "",
    duration: "",
    thumbnail: null as File | null,
    videoFile: null as File | null
  })

  const handleInputChange = (field: string, value: string) => {
    setVideoData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, fileType: 'thumbnail' | 'videoFile') => {
    const file = event.target.files?.[0]
    if (file) {
      setVideoData(prev => ({ ...prev, [fileType]: file }))
      toast({
        title: "File uploaded",
        description: `${file.name} has been selected`,
      })
    }
  }

  const handleSave = () => {
    if (!videoData.title || !videoData.description || !videoData.category) {
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
      description: "Video created successfully",
    })
    navigate("/videos")
  }

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">New Video</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Videos → Videos → New</p>
        </div>
        <UserNav />
      </header>
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Add New Video</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Video Title <span className="text-red-500">*</span></Label>
                <Input 
                  id="title" 
                  placeholder="Enter video title" 
                  value={videoData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input 
                  id="duration" 
                  placeholder="e.g., 15:30" 
                  value={videoData.duration}
                  onChange={(e) => handleInputChange("duration", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description <span className="text-red-500">*</span></Label>
              <Textarea 
                id="description" 
                placeholder="Enter video description" 
                value={videoData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={4}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
                <Select value={videoData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="music">Music Videos</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="news">News</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="artist">Artist</Label>
                <Select value={videoData.artist} onValueChange={(value) => handleInputChange("artist", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select artist" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="burna-boy">Burna Boy</SelectItem>
                    <SelectItem value="wizkid">Wizkid</SelectItem>
                    <SelectItem value="redstream">REDSTREAM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input 
                id="tags" 
                placeholder="Enter tags separated by commas" 
                value={videoData.tags}
                onChange={(e) => handleInputChange("tags", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="thumbnail">Thumbnail</Label>
                <Button variant="outline" size="sm" className="gap-2 w-full" asChild>
                  <label htmlFor="thumbnail-upload" className="cursor-pointer">
                    <Upload className="h-4 w-4" />
                    Upload Thumbnail
                    <input
                      id="thumbnail-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'thumbnail')}
                    />
                  </label>
                </Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="video">Video File</Label>
                <Button variant="outline" size="sm" className="gap-2 w-full" asChild>
                  <label htmlFor="video-upload" className="cursor-pointer">
                    <Upload className="h-4 w-4" />
                    Upload Video
                    <input
                      id="video-upload"
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'videoFile')}
                    />
                  </label>
                </Button>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => navigate("/videos")}>Cancel</Button>
              <Button onClick={handleSave}>Save Video</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
