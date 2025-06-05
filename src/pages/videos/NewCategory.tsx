
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserNav } from "@/components/user-nav"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"

export default function NewCategory() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    slug: "",
    metaDescription: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Auto-generate slug from name
    if (field === "name" && value) {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      setFormData(prev => ({ ...prev, slug }))
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
      description: "Category created successfully",
    })
    navigate("/videos/categories")
  }

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">New Category</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Videos → Categories → New</p>
        </div>
        <UserNav />
      </header>
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Add New Category</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Category Name <span className="text-red-500">*</span></Label>
                <Input 
                  id="name" 
                  placeholder="Enter category name" 
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input 
                  id="slug" 
                  placeholder="category-slug" 
                  value={formData.slug}
                  onChange={(e) => handleInputChange("slug", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description <span className="text-red-500">*</span></Label>
              <Textarea 
                id="description" 
                placeholder="Enter category description" 
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="metaDescription">Meta Description</Label>
              <Textarea 
                id="metaDescription" 
                placeholder="Enter meta description for SEO" 
                value={formData.metaDescription}
                onChange={(e) => handleInputChange("metaDescription", e.target.value)}
                rows={2}
              />
              <p className="text-xs text-muted-foreground">
                Recommended length: 150-160 characters
              </p>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => navigate("/videos/categories")}>Cancel</Button>
              <Button onClick={handleSave}>Save Category</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
