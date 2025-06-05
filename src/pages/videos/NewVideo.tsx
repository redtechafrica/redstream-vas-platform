
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X } from "lucide-react"

export default function NewVideo() {
  const [poster, setPoster] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    videoFile: "",
    artists: "",
    details: ""
  })

  const handlePosterUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setPoster(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting video data:", { ...formData, poster })
    // API endpoint: POST /api/videos
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add New Video.</h1>
        <p className="text-muted-foreground">Home > Dashboard > Manage Post > Add New</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Video Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="poster">Poster</Label>
                  <div className="mt-2">
                    {poster ? (
                      <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                        <img src={poster} alt="Poster" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => setPoster(null)}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-500">Click to upload poster</span>
                        <span className="text-xs text-gray-400 mt-1">Allowed file types: png, jpg, jpeg</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePosterUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
                  <Input
                    id="title"
                    placeholder="Title/name..."
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gameweek">Gameweek</SelectItem>
                      <SelectItem value="music">Music Ent</SelectItem>
                      <SelectItem value="news">News</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="videoFile">Video File <span className="text-red-500">*</span></Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, videoFile: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upload1">Upload File 1</SelectItem>
                      <SelectItem value="upload2">Upload File 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="artists">Artist(s) <span className="text-red-500">*</span></Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, artists: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select artist(s)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="redstream">RedStream News</SelectItem>
                      <SelectItem value="burnaboy">Burna Boy</SelectItem>
                      <SelectItem value="teni">Teni</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="details">Details</Label>
              <Textarea
                id="details"
                placeholder="Short Description"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                rows={6}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline">
            Discard
          </Button>
          <Button type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  )
}
