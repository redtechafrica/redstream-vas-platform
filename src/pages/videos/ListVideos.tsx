
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"

const videosData = [
  {
    id: 1,
    title: "Official Naija FPL Gameweek 6 2023/2024",
    mediaUrl: "http://sys1.redstreamafrica.tv/assets/uploads/mp4/a07f47e68478401.mp4",
    category: "Gameweek",
    author: "Admin",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 2,
    title: "Official Naija FPL Gameweek 5 2023/2024",
    mediaUrl: "http://sys1.redstreamafrica.tv/assets/uploads/mp4/x20b8af321316b5.mp4",
    category: "Gameweek",
    author: "Admin",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 3,
    title: "Official Naija FPL Gameweek 4 2023/2024",
    mediaUrl: "http://sys1.redstreamafrica.tv/assets/uploads/mp4/e50a5369b6f8b3f1.mp4",
    category: "Gameweek",
    author: "Admin",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 4,
    title: "Official Naija FPL Gameweek 3 2023/2024",
    mediaUrl: "http://sys1.redstreamafrica.tv/assets/uploads/mp4/6ccf0580c87061b.mp4",
    category: "Gameweek",
    author: "Admin",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 5,
    title: "Official Naija FPL Gameweek 2 2023/2024",
    mediaUrl: "http://sys1.redstreamafrica.tv/assets/uploads/mp4/d89964dd435e75b5a.mp4",
    category: "Gameweek",
    author: "Admin",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 6,
    title: "Official Naija FPL Gameweek 1 2023/2024",
    mediaUrl: "http://sys1.redstreamafrica.tv/assets/uploads/mp4/253773f9bc31f3b.mp4",
    category: "Gameweek",
    author: "Admin",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 7,
    title: "Make Music Lagos - Music Event Video",
    mediaUrl: "http://sys1.redstreamafrica.tv/assets/uploads/mp4/e25db9fcaf64126.mp4",
    category: "Music Ent",
    author: "Admin",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 8,
    title: "Vendease Games Festival - Games, Food and Musice",
    mediaUrl: "http://sys1.redstreamafrica.tv/assets/uploads/mp4/e25db9fcaf64126.mp4",
    category: "Music Ent",
    author: "Admin",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 9,
    title: "NBC News Highlights for May",
    mediaUrl: "http://sys1.redstreamafrica.tv/assets/uploads/mp4/e25db9fcaf64126.mp4",
    category: ["News", "Finance", "Economy"],
    author: "Admin",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: 10,
    title: "VIDEO: Asake makes grand entrance in helicopter at London O2 Arena show - Vanguard News",
    mediaUrl: "http://sys1.redstreamafrica.tv/assets/uploads/mp4/e25db9fcaf64126.mp4",
    category: ["Music Ent", "News"],
    author: "Admin",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  }
]

export default function ListVideos() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredVideos = videosData.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">List Posts.</h1>
          <p className="text-muted-foreground">Home > Dashboard > Manage Posts</p>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600">New Video</Button>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search user"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="text-blue-500">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>TITLE</TableHead>
              <TableHead>MEDIA URL</TableHead>
              <TableHead>CATEGORY</TableHead>
              <TableHead>AUTHOR</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVideos.map((video) => (
              <TableRow key={video.id}>
                <TableCell>{video.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-12 h-8 object-cover rounded"
                    />
                    <span className="font-medium">{video.title}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <a 
                    href={video.mediaUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    {video.mediaUrl}
                  </a>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {Array.isArray(video.category) ? (
                      video.category.map((cat, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {cat}
                        </Badge>
                      ))
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        {video.category}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>{video.author}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing 1 to 10 of 18 records
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
              <PaginationLink href="#">2</PaginationLink>
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
