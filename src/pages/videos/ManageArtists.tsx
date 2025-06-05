
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const artistsData = [
  {
    id: 1,
    name: "RedStream News",
    avatar: null,
    about: "",
    videos: 4
  },
  {
    id: 2,
    name: "Teni",
    avatar: null,
    about: "",
    videos: 0
  },
  {
    id: 3,
    name: "Burna Boy",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    about: "",
    videos: 2
  },
  {
    id: 4,
    name: "Redstream",
    avatar: null,
    about: "",
    videos: 15
  }
]

export default function ManageArtists() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredArtists = artistsData.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Manage Artists.</h1>
          <p className="text-muted-foreground">Home > Dashboard > Manage Videos > artists</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-500 hover:bg-blue-600">New Video</Button>
          <Button className="bg-blue-500 hover:bg-blue-600">New Artist</Button>
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
              <TableHead>AVATAR</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>ABOUT</TableHead>
              <TableHead>VIDEOS</TableHead>
              <TableHead>ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredArtists.map((artist) => (
              <TableRow key={artist.id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={artist.avatar || undefined} />
                    <AvatarFallback>{artist.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>
                  <a href="#" className="text-blue-500 hover:underline">
                    {artist.name}
                  </a>
                </TableCell>
                <TableCell>{artist.about}</TableCell>
                <TableCell>{artist.videos}</TableCell>
                <TableCell>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing 1 to 4 of 4 records
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
