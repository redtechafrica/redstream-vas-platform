
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X } from "lucide-react"

export default function NewCategory() {
  const [banner, setBanner] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    category: "",
    description: ""
  })

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setBanner(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting category data:", { ...formData, banner })
    // API endpoint: POST /api/categories
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">New Categories.</h1>
          <p className="text-muted-foreground">Home > Dashboard > Manage Posts > Categories > New</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-500 hover:bg-blue-600">New Video</Button>
          <Button className="bg-blue-500 hover:bg-blue-600">New Category</Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Category Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="banner">Banner</Label>
                <div className="mt-2">
                  {banner ? (
                    <div className="relative w-32 h-32 bg-gray-100 rounded-full overflow-hidden">
                      <img src={banner} alt="Banner" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => setBanner(null)}
                        className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-300 rounded-full cursor-pointer hover:bg-gray-50">
                      <Upload className="h-6 w-6 text-gray-400 mb-1" />
                      <span className="text-xs text-gray-500 text-center">Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleBannerUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-2">Allowed file types: png, jpg, jpeg</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
                  <Input
                    id="category"
                    placeholder="Title/name..."
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Short Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline">
            Discard
          </Button>
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  )
}
