
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit, Trash2 } from "lucide-react"
import { UserNav } from "@/components/user-nav"
import { DeleteConfirmModal } from "@/components/DeleteConfirmModal"
import { useNavigate } from "react-router-dom"

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
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [artists, setArtists] = useState(sampleArtists)
  const [filteredArtists, setFilteredArtists] = useState(sampleArtists)
  const [deleteModal, setDeleteModal] = useState<{isOpen: boolean, artist: any}>({
    isOpen: false,
    artist: null
  })

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    const filtered = artists.filter(artist => 
      artist.name.toLowerCase().includes(value.toLowerCase()) ||
      artist.description.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredArtists(filtered)
  }

  const handleDelete = (artist: any) => {
    setDeleteModal({ isOpen: true, artist })
  }

  const confirmDelete = () => {
    if (deleteModal.artist) {
      setArtists(artists.filter(a => a.id !== deleteModal.artist.id))
      setFilteredArtists(filteredArtists.filter(a => a.id !== deleteModal.artist.id))
      setDeleteModal({ isOpen: false, artist: null })
    }
  }

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Artists</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Videos → Artists</p>
        </div>
        <UserNav />
      </header>

      <div className="flex-1 space-y-4 p-8 pt-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Manage Artists</CardTitle>
              <Button onClick={() => navigate("/videos/artists/new")}>
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
                {filteredArtists.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                      No artists available
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredArtists.map((artist) => (
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
                          <Button size="sm" variant="outline" onClick={() => handleDelete(artist)}>
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
                Showing 1 to {filteredArtists.length} of {artists.length} records
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

      <DeleteConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, artist: null })}
        onConfirm={confirmDelete}
        itemName={deleteModal.artist?.name || ""}
        type="Artist"
      />
    </div>
  )
}
