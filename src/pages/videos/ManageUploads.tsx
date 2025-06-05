
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Search } from "lucide-react"

const uploadsData = [
  {
    id: 1,
    title: "Official Naija FPL Gameweek 0 2023_2024",
    fileType: "mp4",
    linkedPosts: 0,
    uploaded: "Sep 09 2024, 09:39:18 PM"
  },
  {
    id: 2,
    title: "Official Naija FPL Gameweek 6 2023_2024",
    fileType: "mp4",
    linkedPosts: 1,
    uploaded: "Sep 09 2024, 01:01:04 PM"
  },
  {
    id: 3,
    title: "Official Naija FPL Gameweek 5 2023_2024",
    fileType: "mp4",
    linkedPosts: 1,
    uploaded: "Sep 09 2024, 12:52:22 PM"
  },
  {
    id: 4,
    title: "Official Naija FPL Gameweek 2 2023_2024",
    fileType: "mp4",
    linkedPosts: 1,
    uploaded: "Sep 09 2024, 12:52:17 PM"
  },
  {
    id: 5,
    title: "Official Naija FPL Gameweek 4 2023_2024",
    fileType: "mp4",
    linkedPosts: 1,
    uploaded: "Sep 09 2024, 12:52:01 PM"
  },
  {
    id: 6,
    title: "Official Naija FPL Gameweek 3 2023_2024",
    fileType: "mp4",
    linkedPosts: 1,
    uploaded: "Sep 09 2024, 12:50:25 PM"
  },
  {
    id: 7,
    title: "Official Naija FPL Gameweek 1 2023_2024",
    fileType: "mp4",
    linkedPosts: 1,
    uploaded: "Sep 09 2024, 12:50:10 PM"
  },
  {
    id: 8,
    title: "Stunning Sunset Seen From The Sea _ Time lapse _ 10 Seconds Video _ Nature Blogs",
    fileType: "mp4",
    linkedPosts: 8,
    uploaded: "Jun 12 2024, 06:35:37 PM"
  },
  {
    id: 9,
    title: "TENI - WONDABOX - My XXXL Episode 13",
    fileType: "mp4",
    linkedPosts: 4,
    uploaded: "Mar 31 2024, 11:58:52 AM"
  }
]

export default function ManageUploads() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUploads = uploadsData.filter(upload =>
    upload.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Manage Uploads</h1>
        <p className="text-muted-foreground">Home > Dashboard > Manage Uploads</p>
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
              <TableHead>TITLE</TableHead>
              <TableHead>FILE TYPE</TableHead>
              <TableHead>LINKED POST(S)</TableHead>
              <TableHead>UPLOADED</TableHead>
              <TableHead>ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUploads.map((upload) => (
              <TableRow key={upload.id}>
                <TableCell>{upload.id}</TableCell>
                <TableCell>
                  <a href="#" className="text-blue-500 hover:underline">
                    {upload.title}
                  </a>
                </TableCell>
                <TableCell>{upload.fileType}</TableCell>
                <TableCell>{upload.linkedPosts}</TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {upload.uploaded}
                </TableCell>
                <TableCell>
                  <Button size="sm">Rename</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing 1 to 9 of 9 records
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

      <div className="mt-8 text-xs text-muted-foreground">
        2022©
      </div>
    </div>
  )
}
