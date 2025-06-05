
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload } from "lucide-react"

export default function NewVideo() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    artists: "",
    poster: null as File | null,
    videoFile: null as File | null,
    mediaUrl: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating video:", formData)
    // API endpoint: POST /api/videos
  }

  const handlePosterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, poster: e.target.files[0] })
    }
  }

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, videoFile: e.target.files[0] })
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add New Video</h1>
        <p className="text-muted-foreground">Home {" > "} Dashboard {" > "} New Video</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Video Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Video Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter video title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Video description"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
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

                <div>
                  <Label htmlFor="artists">Artists</Label>
                  <Input
                    id="artists"
                    value={formData.artists}
                    onChange={(e) => setFormData({ ...formData, artists: e.target.value })}
                    placeholder="Enter artist names (comma separated)"
                  />
                </div>

                <div>
                  <Label htmlFor="mediaUrl">Media URL</Label>
                  <Input
                    id="mediaUrl"
                    value={formData.mediaUrl}
                    onChange={(e) => setFormData({ ...formData, mediaUrl: e.target.value })}
                    placeholder="External video URL (optional)"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label>Video Poster</Label>
                  <div className="border-2 border-dashed border-blue-300 bg-blue-50/30 rounded-lg p-4">
                    <div className="text-center">
                      <label className="cursor-pointer">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <Upload className="h-8 w-8 text-blue-500" />
                          <Button type="button" size="sm" className="bg-blue-500 hover:bg-blue-600">
                            Upload Poster
                          </Button>
                          <p className="text-xs text-muted-foreground">
                            JPG, PNG (max 5MB)
                          </p>
                        </div>
                        <input
                          type="file"
                          onChange={handlePosterChange}
                          className="hidden"
                          accept="image/*"
                        />
                      </label>
                    </div>
                    {formData.poster && (
                      <div className="mt-2 text-center">
                        <p className="text-xs text-muted-foreground">
                          {formData.poster.name}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Label>Video File</Label>
                  <div className="border-2 border-dashed border-blue-300 bg-blue-50/30 rounded-lg p-4">
                    <div className="text-center">
                      <label className="cursor-pointer">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <Upload className="h-8 w-8 text-blue-500" />
                          <Button type="button" size="sm" className="bg-blue-500 hover:bg-blue-600">
                            Upload Video
                          </Button>
                          <p className="text-xs text-muted-foreground">
                            MP4, MOV, AVI (max 1.5GB)
                          </p>
                        </div>
                        <input
                          type="file"
                          onChange={handleVideoChange}
                          className="hidden"
                          accept="video/*"
                        />
                      </label>
                    </div>
                    {formData.videoFile && (
                      <div className="mt-2 text-center">
                        <p className="text-xs text-muted-foreground">
                          {formData.videoFile.name}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline">
                Save as Draft
              </Button>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                Publish Video
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
