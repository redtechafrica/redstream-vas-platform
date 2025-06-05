
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileVideo, Image } from "lucide-react"
import { UserNav } from "@/components/user-nav"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"

export default function NewUploads() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [uploadData, setUploadData] = useState({
    title: "",
    type: "",
    category: "",
    files: [] as File[]
  })

  const handleInputChange = (field: string, value: string) => {
    setUploadData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    if (files.length > 0) {
      setUploadData(prev => ({ ...prev, files }))
      toast({
        title: "Files selected",
        description: `${files.length} file(s) selected for upload`,
      })
    }
  }

  const handleUpload = () => {
    if (!uploadData.title || !uploadData.type || uploadData.files.length === 0) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and select files",
        variant: "destructive"
      })
      return
    }

    // API call would go here
    toast({
      title: "Success",
      description: "Files uploaded successfully",
    })
    navigate("/videos/uploads")
  }

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">New Upload</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Videos → Uploads → New</p>
        </div>
        <UserNav />
      </header>
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload New Files</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
                <Input 
                  id="title" 
                  placeholder="Enter upload title" 
                  value={uploadData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Content Type <span className="text-red-500">*</span></Label>
                <Select value={uploadData.type} onValueChange={(value) => handleInputChange("type", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="series">Series</SelectItem>
                    <SelectItem value="documentary">Documentary</SelectItem>
                    <SelectItem value="short">Short</SelectItem>
                    <SelectItem value="image">Image</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={uploadData.category} onValueChange={(value) => handleInputChange("category", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="music">Music Videos</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="news">News</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="files">Files <span className="text-red-500">*</span></Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-2">
                    <FileVideo className="h-8 w-8 text-gray-400" />
                    <Image className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Upload your files</p>
                    <p className="text-xs text-muted-foreground">
                      Drag and drop files here, or click to browse
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="h-4 w-4" />
                      Choose Files
                      <input
                        id="file-upload"
                        type="file"
                        multiple
                        accept="video/*,image/*"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </Button>
                </div>
              </div>
              {uploadData.files.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-medium">Selected files:</p>
                  <ul className="text-sm text-muted-foreground">
                    {uploadData.files.map((file, index) => (
                      <li key={index}>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => navigate("/videos/uploads")}>Cancel</Button>
              <Button onClick={handleUpload}>Upload Files</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
