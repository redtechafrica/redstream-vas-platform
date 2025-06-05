
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserNav } from "@/components/user-nav"

const ListAdmins = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState([
    { 
      fullName: "Ndubisi Agbeyeke", 
      email: "ndubusi@sleengshort.com", 
      role: "SADMIN", 
      status: "Active", 
      lastLogin: "26 May 2025, 10:17AM" 
    },
    { 
      fullName: "Oluwabiyi Oyelere", 
      email: "dev@paperlessystems.com.ng", 
      role: "SADMIN", 
      status: "Active", 
      lastLogin: "26 May 2025, 10:10AM" 
    },
    { 
      fullName: "Admin Sleengshort", 
      email: "ayomide@sleengshort.com", 
      role: "ADMIN", 
      status: "Inactive", 
      lastLogin: "07 Sep 2024, 12:5PM" 
    }
  ])

  const adminsData = [
    { 
      fullName: "Ndubisi Agbeyeke", 
      email: "ndubusi@sleengshort.com", 
      role: "SADMIN", 
      status: "Active", 
      lastLogin: "26 May 2025, 10:17AM" 
    },
    { 
      fullName: "Oluwabiyi Oyelere", 
      email: "dev@paperlessystems.com.ng", 
      role: "SADMIN", 
      status: "Active", 
      lastLogin: "26 May 2025, 10:10AM" 
    },
    { 
      fullName: "Admin Sleengshort", 
      email: "ayomide@sleengshort.com", 
      role: "ADMIN", 
      status: "Inactive", 
      lastLogin: "07 Sep 2024, 12:5PM" 
    }
  ]

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    const filtered = adminsData.filter(admin => 
      admin.fullName.toLowerCase().includes(value.toLowerCase()) ||
      admin.email.toLowerCase().includes(value.toLowerCase()) ||
      admin.role.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredData(filtered)
  }

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">List Admins.</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Admins</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => navigate("/create-admin")}>New Admin</Button>
          <UserNav />
        </div>
      </header>
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search user" 
              className="pl-8" 
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>FULL NAME</TableHead>
                <TableHead>EMAIL</TableHead>
                <TableHead>ROLE</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead className="flex items-center gap-1">
                  LAST LOGIN
                  <ChevronDown className="h-4 w-4" />
                </TableHead>
                <TableHead>ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((admin, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{admin.fullName}</TableCell>
                  <TableCell>{admin.email}</TableCell>
                  <TableCell>{admin.role}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={admin.status === "Active" ? "default" : "secondary"}
                      className={admin.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                    >
                      {admin.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{admin.lastLogin}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="gap-1">
                          Actions
                          <ChevronDown className="h-3 w-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
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
            <span className="text-sm text-muted-foreground">Showing 1 to {filteredData.length} of {adminsData.length} records</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="default" size="sm">1</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListAdmins
