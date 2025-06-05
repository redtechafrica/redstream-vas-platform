
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ChevronDown } from "lucide-react"

const Subscriptions = () => {
  const subscriptionsData = [
    { subscriber: "2348162061948", services: "Redstream Daily", expires: "2025-03-07", status: "Deactivated", lastBilled: "2025-03-07", optInDate: "2025-03-07" },
    { subscriber: "2349032116110", services: "Redstream Daily", expires: "2025-03-06", status: "Deactivated", lastBilled: "2025-03-06", optInDate: "2025-03-06" },
    { subscriber: "2347042457339", services: "Redstream Daily", expires: "2025-03-01", status: "Deactivated", lastBilled: "2025-03-01", optInDate: "2025-03-01" },
    { subscriber: "2347044461476", services: "Redstream Daily", expires: "2025-03-01", status: "Deactivated", lastBilled: "2025-03-01", optInDate: "2025-03-01" },
    { subscriber: "2348066623649", services: "Redstream Daily", expires: "2025-05-24", status: "In-Active", lastBilled: "2025-05-24", optInDate: "2025-02-27" },
    { subscriber: "2349161272149", services: "Redstream Daily", expires: "2025-02-23", status: "Deactivated", lastBilled: "2025-02-23", optInDate: "2025-02-23" },
    { subscriber: "2347034342892", services: "Redstream Daily", expires: "2025-04-06", status: "Deactivated", lastBilled: "2025-04-06", optInDate: "2025-02-22" },
    { subscriber: "2349130957716", services: "Redstream Daily", expires: "2025-02-22", status: "Deactivated", lastBilled: "2025-02-22", optInDate: "2025-02-22" },
    { subscriber: "2348160550492", services: "Redstream Daily", expires: "2025-02-21", status: "Deactivated", lastBilled: "2025-02-21", optInDate: "2025-02-21" },
    { subscriber: "2347072168209", services: "Redstream Daily", expires: "2025-02-21", status: "Deactivated", lastBilled: "2025-02-21", optInDate: "2025-02-21" },
  ]

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">List Posts</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Subscription</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">About</span>
          <span className="text-sm text-muted-foreground">Support</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white text-sm font-medium">
            N
          </div>
        </div>
      </header>
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search user" className="pl-8" />
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
                <TableHead>SERVICES</TableHead>
                <TableHead>EXPIRES</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>LAST BILLED</TableHead>
                <TableHead className="flex items-center gap-1">
                  1ST OPT-IN DATE
                  <ChevronDown className="h-4 w-4" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptionsData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.subscriber}</TableCell>
                  <TableCell>{row.services}</TableCell>
                  <TableCell>{row.expires}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={row.status === "Deactivated" ? "secondary" : "outline"}
                      className={row.status === "In-Active" ? "bg-yellow-100 text-yellow-800" : ""}
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{row.lastBilled}</TableCell>
                  <TableCell>{row.optInDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">10</span>
            <span className="text-sm text-muted-foreground">Showing 1 to 10 of 19,174 records</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm">‹</Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">4</Button>
            <Button variant="outline" size="sm">5</Button>
            <span className="px-2">...</span>
            <Button variant="outline" size="sm">1818</Button>
            <Button variant="outline" size="sm">›</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscriptions
