
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

const categoriesData = [
  {
    id: 1,
    category: "Gameweek",
    description: "",
    videos: 6,
    status: "Active"
  },
  {
    id: 2,
    category: "Economy",
    description: "",
    videos: 1,
    status: "Inactive"
  },
  {
    id: 3,
    category: "Finance",
    description: "",
    videos: 1,
    status: "Inactive"
  },
  {
    id: 4,
    category: "News",
    description: "",
    videos: 5,
    status: "Inactive"
  },
  {
    id: 5,
    category: "Music Ent",
    description: "Music entertainment",
    videos: 8,
    status: "Inactive"
  },
  {
    id: 6,
    category: "Tech",
    description: "",
    videos: 1,
    status: "Inactive"
  },
  {
    id: 7,
    category: "IOS",
    description: "",
    videos: 0,
    status: "Inactive"
  },
  {
    id: 8,
    category: "Python",
    description: "Python Tutorials",
    videos: 0,
    status: "Inactive"
  },
  {
    id: 9,
    category: "ReactJS",
    description: "ReactJS Tutorials",
    videos: 1,
    status: "Inactive"
  }
]

export default function ManageCategories() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCategories = categoriesData.filter(category =>
    category.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Manage Categories.</h1>
          <p className="text-muted-foreground">Home > Dashboard > Manage Posts > Categories</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-500 hover:bg-blue-600">New Video</Button>
          <Button className="bg-blue-500 hover:bg-blue-600">New Category</Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search user"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>CATEGORY</TableHead>
              <TableHead>DESCRIPTION</TableHead>
              <TableHead>VIDEOS</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCategories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>
                <TableCell>
                  <a href="#" className="text-blue-500 hover:underline">
                    {category.category}
                  </a>
                </TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>{category.videos}</TableCell>
                <TableCell>
                  <Badge variant={category.status === "Active" ? "default" : "secondary"}>
                    {category.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                      Edit
                    </Button>
                    <Button 
                      size="sm" 
                      variant={category.status === "Active" ? "destructive" : "default"}
                      className={category.status === "Inactive" ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      {category.status === "Active" ? "Disable" : "Enable"}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing 1 to 9 of 9 records (filtered from 10 total entries)
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
