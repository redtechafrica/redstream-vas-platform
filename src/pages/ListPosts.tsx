
import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter } from "lucide-react"
import { UserNav } from "@/components/user-nav"

const ListPosts = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState([
    { subscriber: "2348065077536", operator: "MTN2", type: "Grace", amount: 0, timestamp: "2025-06-05" },
    { subscriber: "2348134844247", operator: "MTN2", type: "Modification", amount: 100, timestamp: "2025-06-05" },
    { subscriber: "2348169784319", operator: "MTN2", type: "Modification", amount: 50, timestamp: "2025-06-05" },
    { subscriber: "2349039364888", operator: "MTN2", type: "Modification", amount: 100, timestamp: "2025-06-05" },
    { subscriber: "2348138313567", operator: "MTN2", type: "Modification", amount: 100, timestamp: "2025-06-05" },
    { subscriber: "2347062903956", operator: "MTN2", type: "Modification", amount: 100, timestamp: "2025-06-05" },
    { subscriber: "2348160063234", operator: "MTN2", type: "Grace", amount: 0, timestamp: "2025-06-05" },
    { subscriber: "2348144647974", operator: "MTN2", type: "Modification", amount: 5, timestamp: "2025-06-05" },
    { subscriber: "2348062684222", operator: "MTN2", type: "Modification", amount: 100, timestamp: "2025-06-05" },
    { subscriber: "2348132792090", operator: "MTN2", type: "Modification", amount: 100, timestamp: "2025-06-05" },
  ])

  const postsData = [
    { subscriber: "2348065077536", operator: "MTN2", type: "Grace", amount: 0, timestamp: "2025-06-05" },
    { subscriber: "2348134844247", operator: "MTN2", type: "Modification", amount: 100, timestamp: "2025-06-05" },
    { subscriber: "2348169784319", operator: "MTN2", type: "Modification", amount: 50, timestamp: "2025-06-05" },
    { subscriber: "2349039364888", operator: "MTN2", type: "Modification", amount: 100, timestamp: "2025-06-05" },
    { subscriber: "2348138313567", operator: "MTN2", type: "Modification", amount: 100, timestamp: "2025-06-05" },
    { subscriber: "2347062903956", operator: "MTN2", type: "Modification", amount: 100, timestamp: "2025-06-05" },
    { subscriber: "2348160063234", operator: "MTN2", type: "Grace", amount: 0, timestamp: "2025-06-05" },
    { subscriber: "2348144647974", operator: "MTN2", type: "Modification", amount: 5, timestamp: "2025-06-05" },
    { subscriber: "2348062684222", operator: "MTN2", type: "Modification", amount: 100, timestamp: "2025-06-05" },
    { subscriber: "2348132792090", operator: "MTN2", type: "Modification", amount: 100, timestamp: "2025-06-05" },
  ]

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    const filtered = postsData.filter(post => 
      post.subscriber.toLowerCase().includes(value.toLowerCase()) ||
      post.operator.toLowerCase().includes(value.toLowerCase()) ||
      post.type.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredData(filtered)
  }

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">List Posts</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Subscription</p>
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
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SUBSCRIBER</TableHead>
                <TableHead>OPERATOR</TableHead>
                <TableHead>TYPE</TableHead>
                <TableHead>AMOUNT</TableHead>
                <TableHead>TIMESTAMP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.subscriber}</TableCell>
                  <TableCell>{row.operator}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">10</span>
            <span className="text-sm text-muted-foreground">Showing 1 to {filteredData.length} of {postsData.length} records</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm">‹</Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">4</Button>
            <Button variant="outline" size="sm">5</Button>
            <span className="px-2">...</span>
            <Button variant="outline" size="sm">39641</Button>
            <Button variant="outline" size="sm">›</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListPosts
