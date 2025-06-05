
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MoreHorizontal, Edit, Trash2, Users } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ManageDraws() {
  const [searchTerm, setSearchTerm] = useState("")
  
  const drawsData = [
    { 
      id: 1, 
      title: "Weekly Prize Draw", 
      prize: "₦50,000", 
      participants: 1250,
      status: "Active",
      startDate: "2025-06-01",
      endDate: "2025-06-07",
      winner: null
    },
    { 
      id: 2, 
      title: "Monthly Mega Draw", 
      prize: "₦500,000", 
      participants: 5420,
      status: "Completed",
      startDate: "2025-05-01",
      endDate: "2025-05-31",
      winner: "John Doe"
    },
    { 
      id: 3, 
      title: "New User Bonus Draw", 
      prize: "₦25,000", 
      participants: 320,
      status: "Scheduled",
      startDate: "2025-06-10",
      endDate: "2025-06-17",
      winner: null
    }
  ]

  const filteredData = drawsData.filter(draw =>
    draw.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    draw.prize.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Manage Draws</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Draws</p>
        </div>
      </header>
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search draws..." 
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600">
            New Draw
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>TITLE</TableHead>
                <TableHead>PRIZE</TableHead>
                <TableHead>PARTICIPANTS</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>START DATE</TableHead>
                <TableHead>END DATE</TableHead>
                <TableHead>WINNER</TableHead>
                <TableHead>ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((draw) => (
                <TableRow key={draw.id}>
                  <TableCell className="font-medium">{draw.title}</TableCell>
                  <TableCell className="font-semibold text-green-600">{draw.prize}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {draw.participants}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      draw.status === "Active" ? "default" : 
                      draw.status === "Completed" ? "secondary" : 
                      "outline"
                    }>
                      {draw.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{draw.startDate}</TableCell>
                  <TableCell>{draw.endDate}</TableCell>
                  <TableCell>{draw.winner || "-"}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          View Participants
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">10</span>
            <span className="text-sm text-muted-foreground">Showing 1 to {filteredData.length} of {drawsData.length} records</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm">‹</Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">›</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
