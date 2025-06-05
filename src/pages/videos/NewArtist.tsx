
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from "lucide-react"

export default function NewArtist() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    avatar: null as File | null
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating artist:", formData)
    // API endpoint: POST /api/artists
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, avatar: e.target.files[0] })
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">New Artist</h1>
        <p className="text-muted-foreground">Home {" > "} Dashboard {" > "} Manage Videos {" > "} New Artist</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Artist</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Artist Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter artist name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Artist description"
                    rows={4}
                  />
                </div>
              </div>

              <div>
                <Label>Artist Avatar</Label>
                <div className="border-2 border-dashed border-blue-300 bg-blue-50/30 rounded-lg p-8">
                  <div className="text-center">
                    <label className="cursor-pointer">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <Upload className="h-12 w-12 text-blue-500" />
                        <div>
                          <Button type="button" className="bg-blue-500 hover:bg-blue-600">
                            Upload Avatar
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Allowed file types: jpg, png, jpeg
                        </p>
                      </div>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*"
                      />
                    </label>
                  </div>
                  {formData.avatar && (
                    <div className="mt-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        Selected: {formData.avatar.name}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline">
                Discard
              </Button>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
