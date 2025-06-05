
import { Home, Users, FileText, Activity, Settings, Plus, List, Calendar, ChevronDown, Upload, Video, FolderOpen, User, PenTool, Gift } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/components/theme-provider"

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Manage Admin.",
    icon: Users,
    items: [
      {
        title: "New Admins.",
        url: "/create-admin",
        icon: Plus,
      },
      {
        title: "List Admins",
        url: "/list-admins",
        icon: List,
      },
    ],
  },
  {
    title: "Services",
    url: "/manage-services",
    icon: Settings,
  },
  {
    title: "Manage Videos",
    icon: Video,
    items: [
      {
        title: "New Video",
        url: "/videos/new",
        icon: Plus,
      },
      {
        title: "Videos",
        url: "/videos",
        icon: Video,
      },
      {
        title: "New Category",
        url: "/videos/categories/new",
        icon: Plus,
      },
      {
        title: "Video Categories",
        url: "/videos/categories",
        icon: FolderOpen,
      },
      {
        title: "New Artist",
        url: "/videos/artists/new",
        icon: Plus,
      },
      {
        title: "Artists",
        url: "/videos/artists",
        icon: User,
      },
      {
        title: "New Uploads",
        url: "/videos/uploads/new",
        icon: Plus,
      },
      {
        title: "Manage Uploads",
        url: "/videos/uploads",
        icon: Upload,
      },
    ],
  },
  {
    title: "VAS Module",
    icon: Activity,
    items: [
      {
        title: "Services",
        url: "/manage-services",
      },
      {
        title: "Subscriptions",
        url: "/subscriptions",
      },
      {
        title: "Transaction",
        url: "/list-posts",
      },
      {
        title: "Daily Report",
        url: "/daily-report",
      },
    ],
  },
  {
    title: "Manage Blog",
    icon: PenTool,
    items: [
      {
        title: "New Post",
        url: "/blog/new",
        icon: Plus,
      },
      {
        title: "All Posts",
        url: "/blog",
        icon: FileText,
      },
    ],
  },
  {
    title: "Draws",
    icon: Gift,
    items: [
      {
        title: "New Draw",
        url: "/draws/new",
        icon: Plus,
      },
      {
        title: "Manage Draws",
        url: "/draws",
        icon: Calendar,
      },
    ],
  },
]

export function AppSidebar() {
  const location = useLocation()
  const { theme } = useTheme()
  
  const logoUrl = theme === "dark" 
    ? "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/REDSTREAM%20WEBAPP%20PLATFORM%2Fredstream-logo.png?alt=media&token=eaa557d0-7afe-4b3e-8491-df0f5a4e747b"
    : "https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/REDSTREAM%20WEBAPP%20PLATFORM%2Fredstream-icon.png?alt=media&token=5e515c26-8445-40e8-b87c-f3923c2255bf"

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <img 
            src={logoUrl} 
            alt="REDSTREAM" 
            className="h-16 w-auto"
          />
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                if (item.items) {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <Collapsible defaultOpen={item.title === "Manage Videos"}>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="w-full justify-between">
                            <div className="flex items-center gap-2">
                              <item.icon className="h-4 w-4" />
                              <span>{item.title}</span>
                            </div>
                            <ChevronDown className="h-4 w-4" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton 
                                  asChild
                                  isActive={location.pathname === subItem.url}
                                >
                                  <Link to={subItem.url}>
                                    {subItem.icon && <subItem.icon className="h-4 w-4" />}
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    </SidebarMenuItem>
                  )
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      isActive={location.pathname === item.url}
                    >
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">2025©</span>
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
