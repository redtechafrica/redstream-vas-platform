
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Dashboard from "./pages/Dashboard";
import DailyReport from "./pages/DailyReport";
import ListPosts from "./pages/ListPosts";
import Subscriptions from "./pages/Subscriptions";
import ManageServices from "./pages/ManageServices";
import ListAdmins from "./pages/ListAdmins";
import CreateAdmin from "./pages/CreateAdmin";
import NotFound from "./pages/NotFound";
import NewVideo from "./pages/videos/NewVideo";
import ListVideos from "./pages/videos/ListVideos";
import NewCategory from "./pages/videos/NewCategory";
import ManageCategories from "./pages/videos/ManageCategories";
import NewArtist from "./pages/videos/NewArtist";
import ManageArtists from "./pages/videos/ManageArtists";
import NewUploads from "./pages/videos/NewUploads";
import ManageUploads from "./pages/videos/ManageUploads";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full">
              <AppSidebar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/daily-report" element={<DailyReport />} />
                  <Route path="/list-posts" element={<ListPosts />} />
                  <Route path="/subscriptions" element={<Subscriptions />} />
                  <Route path="/manage-services" element={<ManageServices />} />
                  <Route path="/list-admins" element={<ListAdmins />} />
                  <Route path="/create-admin" element={<CreateAdmin />} />
                  
                  {/* Video Management Routes */}
                  <Route path="/videos/new" element={<NewVideo />} />
                  <Route path="/videos" element={<ListVideos />} />
                  <Route path="/videos/categories/new" element={<NewCategory />} />
                  <Route path="/videos/categories" element={<ManageCategories />} />
                  <Route path="/videos/artists/new" element={<NewArtist />} />
                  <Route path="/videos/artists" element={<ManageArtists />} />
                  <Route path="/videos/uploads/new" element={<NewUploads />} />
                  <Route path="/videos/uploads" element={<ManageUploads />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
