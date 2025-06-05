
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, Activity, DollarSign, Calendar } from "lucide-react"
import { UserNav } from "@/components/user-nav"

const Dashboard = () => {
  const stats = [
    {
      title: "SDP Admins.",
      value: "3",
      icon: Users,
      description: "System administrators"
    },
    {
      title: "All Posts",
      value: "18", 
      icon: FileText,
      description: "Total posts in system"
    },
    {
      title: "Active Posts",
      value: "6",
      icon: Activity,
      description: "Currently active posts"
    },
    {
      title: "Posts Categories",
      value: "10",
      icon: FileText,
      description: "Categories available"
    },
    {
      title: "Active Posts Categories",
      value: "1",
      icon: Activity,
      description: "Active categories"
    },
    {
      title: "Active Subscribers",
      value: "135",
      icon: Users,
      description: "Current subscribers"
    },
    {
      title: "Today's Act. Count",
      value: "0",
      icon: Calendar,
      description: "Activations today"
    },
    {
      title: "Today's Renewal Count",
      value: "139",
      icon: Activity,
      description: "Renewals today"
    },
    {
      title: "Today's De-act. Count",
      value: "0",
      icon: Calendar,
      description: "Deactivations today"
    },
    {
      title: "Current Month Revenue",
      value: "376390",
      icon: DollarSign,
      description: "This month's revenue"
    },
    {
      title: "Today's Revenue",
      value: "9495",
      icon: DollarSign,
      description: "Today's earnings"
    }
  ]

  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Application Dashboard</h1>
          <p className="text-sm text-muted-foreground">Home → Dashboard</p>
        </div>
        <UserNav />
      </header>
      
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.slice(0, 6).map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {stats.slice(6).map((stat, index) => (
            <Card key={index + 6} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
