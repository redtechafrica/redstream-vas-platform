
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter } from "lucide-react"

const DailyReport = () => {
  const reportData = [
    { date: "2025-06-05", activations: 0, actRevenue: 0, renewals: 139, renRevenue: 9495, deactivations: 0, totalRevenue: 9495 },
    { date: "2025-06-04", activations: 0, actRevenue: 0, renewals: 1392, renRevenue: 91660, deactivations: 25, totalRevenue: 91660 },
    { date: "2025-06-03", activations: 0, actRevenue: 0, renewals: 1403, renRevenue: 91750, deactivations: 22, totalRevenue: 91750 },
    { date: "2025-06-02", activations: 0, actRevenue: 0, renewals: 1399, renRevenue: 91795, deactivations: 16, totalRevenue: 91795 },
    { date: "2025-06-01", activations: 0, actRevenue: 0, renewals: 1398, renRevenue: 91690, deactivations: 19, totalRevenue: 91690 },
    { date: "2025-05-31", activations: 0, actRevenue: 0, renewals: 1421, renRevenue: 96085, deactivations: 21, totalRevenue: 96085 },
    { date: "2025-05-30", activations: 0, actRevenue: 0, renewals: 1428, renRevenue: 93305, deactivations: 22, totalRevenue: 93305 },
    { date: "2025-05-29", activations: 0, actRevenue: 0, renewals: 1397, renRevenue: 94440, deactivations: 21, totalRevenue: 94440 },
    { date: "2025-05-28", activations: 0, actRevenue: 0, renewals: 1441, renRevenue: 95915, deactivations: 21, totalRevenue: 95915 },
    { date: "2025-05-27", activations: 0, actRevenue: 0, renewals: 1369, renRevenue: 93575, deactivations: 16, totalRevenue: 93575 },
  ]

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Daily Report</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard → Manage Report</p>
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
                <TableHead>DATE</TableHead>
                <TableHead>ACTIVATIONS</TableHead>
                <TableHead>ACT. REVENUE</TableHead>
                <TableHead>RENEWALS</TableHead>
                <TableHead>REN. REVENUE</TableHead>
                <TableHead>DE-ACTIVATIONS</TableHead>
                <TableHead>TOTAL REVENUE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.date}</TableCell>
                  <TableCell>{row.activations}</TableCell>
                  <TableCell>{row.actRevenue}</TableCell>
                  <TableCell>{row.renewals}</TableCell>
                  <TableCell>{row.renRevenue}</TableCell>
                  <TableCell>{row.deactivations}</TableCell>
                  <TableCell>{row.totalRevenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">10</span>
            <span className="text-sm text-muted-foreground">Showing 1 to 10 of 121 records</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm">‹</Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">4</Button>
            <Button variant="outline" size="sm">5</Button>
            <span className="px-2">...</span>
            <Button variant="outline" size="sm">13</Button>
            <Button variant="outline" size="sm">›</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyReport
