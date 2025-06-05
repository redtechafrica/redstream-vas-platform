
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { UserNav } from "@/components/user-nav"
import { useNavigate } from "react-router-dom"

const sampleCategories = [
  {
    id: 1,
    name: "Music Videos",
    description: "Latest Nigerian and Afrobeats music videos",
    videoCount: 45,
    status: "Active",
    createdDate: "2023-01-15"
  },
  {
    id: 2,
    name: "Sports",
    description: "Football highlights and sports content",
    videoCount: 22,
    status: "Active",
    createdDate: "2023-02-10"
  }
]

export default function ManageCategories() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [categories, setCategories] = useState(sampleCategories)
  const [filteredCategories, setFilteredCategories] = useState(sampleCategories)

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    const filtered = categories.filter(category => 
      category.name.toLowerCase().includes(value.toLowerCase()) ||
      category.description.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredCategories(filtered)
  }

  const handleToggleStatus = (id: number) => {
    const newCategories = categories.map(cat => 
      cat.id === id 
        ? { ...cat, status: cat.status === 'Active' ? 'Inactive' : 'Active' }
        : cat
    )
    setCategories(newCategories)
    setFilteredCategories(newCategories.filter(category => 
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  }

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Video Categories</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Videos → Categories</p>
        </div>
        <UserNav />
      </header>

      <div className="flex-1 space-y-4 p-8 pt-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Manage Categories</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => navigate("/blog/new")}>New Post</Button>
                <Button onClick={() => navigate("/videos/categories/new")}>New Category</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>CATEGORY</TableHead>
                  <TableHead>DESCRIPTION</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead>ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCategories.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                      No categories available
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredCategories.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell>{category.id}</TableCell>
                      <TableCell className="font-medium">{category.name}</TableCell>
                      <TableCell>{category.description}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          category.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {category.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                            Edit
                          </Button>
                          <Button 
                            size="sm" 
                            className={category.status === 'Active' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}
                            onClick={() => handleToggleStatus(category.id)}
                          >
                            {category.status === 'Active' ? 'Disable' : 'Enable'}
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Showing 1 to {filteredCategories.length} of {categories.length} records (filtered from 10 total entries)
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
