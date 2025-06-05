
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit, Trash2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

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
  const [searchTerm, setSearchTerm] = useState("")
  const [uploads, setUploads] = useState(sampleUploads)
  const [renameId, setRenameId] = useState<number | null>(null)
  const [newName, setNewName] = useState("")

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    // API endpoint: GET /api/uploads?search=${value}
  }

  const handleRename = (id: number, currentTitle: string) => {
    setRenameId(id)
    setNewName(currentTitle)
  }

  const confirmRename = () => {
    if (renameId) {
      setUploads(uploads.map(upload => 
        upload.id === renameId 
          ? { ...upload, title: newName }
          : upload
      ))
      // API endpoint: PUT /api/uploads/${renameId}/rename
      setRenameId(null)
      setNewName("")
    }
  }

  const handleDelete = (id: number) => {
    setUploads(uploads.filter(upload => upload.id !== id))
    // API endpoint: DELETE /api/uploads/${id}
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Manage Uploads</h1>
        <p className="text-muted-foreground">Home {" > "} Dashboard {" > "} Manage Videos {" > "} Uploads</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>File Uploads</CardTitle>
            <Button>
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
              {uploads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                    No uploads available
                  </TableCell>
                </TableRow>
              ) : (
                uploads.map((upload) => (
                  <TableRow key={upload.id}>
                    <TableCell>{upload.id}</TableCell>
                    <TableCell className="font-medium">{upload.title}</TableCell>
                    <TableCell>{upload.fileType}</TableCell>
                    <TableCell>{upload.linkedPosts}</TableCell>
                    <TableCell>{upload.uploadedAt}</TableCell>
                    <TableCell>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button 
                            size="sm" 
                            className="bg-blue-500 hover:bg-blue-600 mr-2"
                            onClick={() => handleRename(upload.id, upload.title)}
                          >
                            Rename
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Rename Upload</AlertDialogTitle>
                            <AlertDialogDescription>
                              Enter a new name for this upload.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <div className="py-4">
                            <Input
                              value={newName}
                              onChange={(e) => setNewName(e.target.value)}
                              placeholder="Enter new name..."
                            />
                          </div>
                          <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setRenameId(null)}>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={confirmRename}>Rename</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Showing 1 to {uploads.length} of {uploads.length} records
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
