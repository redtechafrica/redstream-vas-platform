
import { Home, Users, FileText, Activity, Settings, Plus, List, Calendar, ChevronDown } from "lucide-react"
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
    icon: FileText,
    items: [
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
    ],
  },
  {
    title: "Manage Blog",
    icon: FileText,
    url: "#",
  },
  {
    title: "Draws",
    icon: Calendar,
    url: "#",
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
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <img 
            src={logoUrl} 
            alt="REDSTREAM" 
            className="h-8 w-auto"
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
                      <Collapsible defaultOpen={item.title === "VAS Module"}>
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
                            {item.items.map((subItem) => {
                              if (subItem.items) {
                                return (
                                  <SidebarMenuItem key={subItem.title}>
                                    <Collapsible defaultOpen>
                                      <CollapsibleTrigger asChild>
                                        <SidebarMenuSubButton className="w-full justify-between">
                                          <div className="flex items-center gap-2">
                                            <subItem.icon className="h-4 w-4" />
                                            <span>{subItem.title}</span>
                                          </div>
                                          <ChevronDown className="h-4 w-4" />
                                        </SidebarMenuSubButton>
                                      </CollapsibleTrigger>
                                      <CollapsibleContent>
                                        <SidebarMenuSub>
                                          {subItem.items.map((nestedItem) => (
                                            <SidebarMenuSubItem key={nestedItem.title}>
                                              <SidebarMenuSubButton 
                                                asChild
                                                isActive={location.pathname === nestedItem.url}
                                              >
                                                <Link to={nestedItem.url}>
                                                  <span>{nestedItem.title}</span>
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
                                <SidebarMenuSubItem key={subItem.title}>
                                  <SidebarMenuSubButton 
                                    asChild
                                    isActive={location.pathname === subItem.url}
                                  >
                                    <Link to={subItem.url}>
                                      <subItem.icon className="h-4 w-4" />
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              )
                            })}
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
          <span className="text-xs text-muted-foreground">2022©</span>
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
