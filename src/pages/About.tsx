
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <div className="flex-1">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold">About REDSTREAM</h1>
          <p className="text-sm text-muted-foreground">Home → About</p>
        </div>
      </header>
      
      <div className="flex-1 space-y-6 p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>REDSTREAM VAS Dashboard</CardTitle>
            <CardDescription>Video Content Streaming Platform Backend System</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Platform Information</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Version:</span>
                  <span className="ml-2">2.1.0</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Build:</span>
                  <span className="ml-2">#2025.06.05</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Environment:</span>
                  <Badge variant="outline" className="ml-2">Production</Badge>
                </div>
                <div>
                  <span className="text-muted-foreground">Region:</span>
                  <span className="ml-2">West Africa</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Video Content Management</li>
                <li>• User Subscription Management</li>
                <li>• VAS Module Integration</li>
                <li>• Analytics and Reporting</li>
                <li>• Blog Content Management</li>
                <li>• Prize Draw Management</li>
                <li>• Admin User Management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Shadcn/ui</Badge>
                <Badge variant="secondary">Vite</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
