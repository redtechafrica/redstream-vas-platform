
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, ChevronDown } from "lucide-react"
import { UserNav } from "@/components/user-nav"

const ManageServices = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState([
    { 
      id: 1, 
      name: "Redstream Daily", 
      mno: "MTN", 
      amount: 100, 
      duration: 1, 
      serviceId: 1175, 
      productId: 1175, 
      created: "2025-02-05" 
    }
  ])

  const servicesData = [
    { 
      id: 1, 
      name: "Redstream Daily", 
      mno: "MTN", 
      amount: 100, 
      duration: 1, 
      serviceId: 1175, 
      productId: 1175, 
      created: "2025-02-05" 
    }
  ]

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    const filtered = servicesData.filter(service => 
      service.name.toLowerCase().includes(value.toLowerCase()) ||
      service.mno.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredData(filtered)
  }

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Manage Services.</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Services</p>
        </div>
        <UserNav />
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
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NAME</TableHead>
                <TableHead>MNO</TableHead>
                <TableHead>AMOUNT</TableHead>
                <TableHead>DURATION</TableHead>
                <TableHead className="flex items-center gap-1">
                  SERVICE ID
                  <ChevronDown className="h-4 w-4" />
                </TableHead>
                <TableHead>PRODUCT ID</TableHead>
                <TableHead>CREATED</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium text-blue-600">{row.name}</TableCell>
                  <TableCell>{row.mno}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.serviceId}</TableCell>
                  <TableCell>{row.productId}</TableCell>
                  <TableCell>{row.created}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">10</span>
            <span className="text-sm text-muted-foreground">Showing 1 to {filteredData.length} of {servicesData.length} records</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">›</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageServices
