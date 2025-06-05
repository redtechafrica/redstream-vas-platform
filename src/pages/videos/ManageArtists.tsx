
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit, Trash2 } from "lucide-react"

const sampleArtists = [
  {
    id: 1,
    name: "Burna Boy",
    description: "Grammy Award-winning Nigerian artist",
    videoCount: 15,
    status: "Active",
    joinedDate: "2023-01-15"
  },
  {
    id: 2,
    name: "Wizkid",
    description: "International Afrobeats superstar",
    videoCount: 22,
    status: "Active",
    joinedDate: "2023-02-10"
  }
]

export default function ManageArtists() {
  const [searchTerm, setSearchTerm] = useState("")
  const [artists, setArtists] = useState(sampleArtists)

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    // API endpoint: GET /api/artists?search=${value}
  }

  const handleDelete = (id: number) => {
    setArtists(artists.filter(artist => artist.id !== id))
    // API endpoint: DELETE /api/artists/${id}
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Artists</h1>
        <p className="text-muted-foreground">Home {" > "} Dashboard {" > "} Manage Videos {" > "} Artists</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Manage Artists</CardTitle>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Artist
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search artists..."
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
                <TableHead>NAME</TableHead>
                <TableHead>DESCRIPTION</TableHead>
                <TableHead>VIDEO COUNT</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>JOINED</TableHead>
                <TableHead>ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {artists.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                    No artists available
                  </TableCell>
                </TableRow>
              ) : (
                artists.map((artist) => (
                  <TableRow key={artist.id}>
                    <TableCell>{artist.id}</TableCell>
                    <TableCell className="font-medium">{artist.name}</TableCell>
                    <TableCell>{artist.description}</TableCell>
                    <TableCell>{artist.videoCount}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        artist.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {artist.status}
                      </span>
                    </TableCell>
                    <TableCell>{artist.joinedDate}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDelete(artist.id)}>
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
              Showing 1 to {artists.length} of {artists.length} records
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
