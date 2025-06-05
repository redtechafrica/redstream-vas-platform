
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, Plus } from "lucide-react"
import { UserNav } from "@/components/user-nav"
import { RenameModal } from "@/components/RenameModal"
import { useNavigate } from "react-router-dom"

const sampleUploads = [
  {
    id: 1,
    title: "Official Naija FPL Gameweek 6 2023_2024",
    filename: "naija_fpl_gw6.mp4",
    fileType: "mp4",
    fileSize: 250.5,
    linkedPosts: 0,
    uploadedAt: "Sep 09 2024, 09:39:18 PM"
  },
  {
    id: 2,
    title: "Official Naija FPL Gameweek 5 2023_2024", 
    filename: "naija_fpl_gw5.mp4",
    fileType: "mp4",
    fileSize: 180.2,
    linkedPosts: 1,
    uploadedAt: "Sep 09 2024, 01:01:04 PM"
  }
]

export default function ManageUploads() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [uploads, setUploads] = useState(sampleUploads)
  const [filteredUploads, setFilteredUploads] = useState(sampleUploads)
  const [renameModal, setRenameModal] = useState<{isOpen: boolean, upload: any}>({
    isOpen: false,
    upload: null
  })

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    const filtered = uploads.filter(upload => 
      upload.title.toLowerCase().includes(value.toLowerCase()) ||
      upload.filename.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredUploads(filtered)
  }

  const handleRename = (upload: any) => {
    setRenameModal({ isOpen: true, upload })
  }

  const confirmRename = (newName: string) => {
    if (renameModal.upload) {
      const newUploads = uploads.map(upload => 
        upload.id === renameModal.upload.id 
          ? { ...upload, title: newName }
          : upload
      )
      setUploads(newUploads)
      setFilteredUploads(newUploads.filter(upload => 
        upload.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        upload.filename.toLowerCase().includes(searchTerm.toLowerCase())
      ))
      setRenameModal({ isOpen: false, upload: null })
    }
  }

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Manage Uploads</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Videos → Uploads</p>
        </div>
        <UserNav />
      </header>

      <div className="flex-1 space-y-4 p-8 pt-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>File Uploads</CardTitle>
              <Button onClick={() => navigate("/videos/uploads/new")}>
                <Plus className="h-4 w-4 mr-2" />
                New Upload
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search uploads..."
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
                  <TableHead>FILE TYPE</TableHead>
                  <TableHead>LINKED POST(S)</TableHead>
                  <TableHead>UPLOADED</TableHead>
                  <TableHead>ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUploads.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                      No uploads available
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUploads.map((upload) => (
                    <TableRow key={upload.id}>
                      <TableCell>{upload.id}</TableCell>
                      <TableCell className="font-medium">{upload.title}</TableCell>
                      <TableCell>{upload.fileType}</TableCell>
                      <TableCell>{upload.linkedPosts}</TableCell>
                      <TableCell>{upload.uploadedAt}</TableCell>
                      <TableCell>
                        <Button 
                          size="sm" 
                          className="bg-blue-500 hover:bg-blue-600"
                          onClick={() => handleRename(upload)}
                        >
                          Rename
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Showing 1 to {filteredUploads.length} of {uploads.length} records
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

      <RenameModal
        isOpen={renameModal.isOpen}
        onClose={() => setRenameModal({ isOpen: false, upload: null })}
        currentName={renameModal.upload?.title || ""}
        onRename={confirmRename}
        type="Upload"
      />
    </div>
  )
}
