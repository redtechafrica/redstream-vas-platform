
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, Filter, Eye, Edit, Trash2 } from "lucide-react"

const sampleVideos = [
  {
    id: 1,
    title: "Official Naija FPL Gameweek 6 2023_2024",
    category: "Sports",
    artist: "REDSTREAM",
    duration: "15:30",
    status: "Active",
    views: 1250,
    uploadDate: "2024-01-15"
  },
  {
    id: 2,
    title: "Nigerian Music Video Compilation",
    category: "Music",
    artist: "Various Artists",
    duration: "45:20",
    status: "Active",
    views: 3400,
    uploadDate: "2024-01-10"
  }
]

export default function ListVideos() {
  const [searchTerm, setSearchTerm] = useState("")
  const [videos, setVideos] = useState(sampleVideos)

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    // API endpoint: GET /api/videos?search=${value}
  }

  const handleDelete = (id: number) => {
    setVideos(videos.filter(video => video.id !== id))
    // API endpoint: DELETE /api/videos/${id}
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Videos</h1>
        <p className="text-muted-foreground">Home {" > "} Dashboard {" > "} Manage Videos {" > "} Videos</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Video Library</CardTitle>
            <div className="flex gap-2">
              <Button>
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search videos..."
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
                <TableHead>TITLE</TableHead>
                <TableHead>CATEGORY</TableHead>
                <TableHead>ARTIST</TableHead>
                <TableHead>DURATION</TableHead>
                <TableHead>VIEWS</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>UPLOADED</TableHead>
                <TableHead>ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {videos.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="text-center text-muted-foreground py-8">
                    No videos available
                  </TableCell>
                </TableRow>
              ) : (
                videos.map((video) => (
                  <TableRow key={video.id}>
                    <TableCell>{video.id}</TableCell>
                    <TableCell className="font-medium">{video.title}</TableCell>
                    <TableCell>{video.category}</TableCell>
                    <TableCell>{video.artist}</TableCell>
                    <TableCell>{video.duration}</TableCell>
                    <TableCell>{video.views}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        video.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {video.status}
                      </span>
                    </TableCell>
                    <TableCell>{video.uploadDate}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDelete(video.id)}>
                          <Trash2 className="h-4 w-4" />
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
              Showing 1 to {videos.length} of {videos.length} records
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
  )
}
