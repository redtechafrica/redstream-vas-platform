
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Main Pages
import Dashboard from "./pages/Dashboard";
import DailyReport from "./pages/DailyReport";
import ListPosts from "./pages/ListPosts";
import Subscriptions from "./pages/Subscriptions";
import ManageServices from "./pages/ManageServices";
import ListAdmins from "./pages/ListAdmins";
import CreateAdmin from "./pages/CreateAdmin";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

// Video Management Pages
import NewVideo from "./pages/videos/NewVideo";
import ListVideos from "./pages/videos/ListVideos";
import NewCategory from "./pages/videos/NewCategory";
import ManageCategories from "./pages/videos/ManageCategories";
import NewArtist from "./pages/videos/NewArtist";
import ManageArtists from "./pages/videos/ManageArtists";
import NewUploads from "./pages/videos/NewUploads";
import ManageUploads from "./pages/videos/ManageUploads";

// Blog Management Pages
import ManageBlog from "./pages/blog/ManageBlog";
import NewPost from "./pages/blog/NewPost";

// Draws Management Pages
import ManageDraws from "./pages/draws/ManageDraws";
import NewDraw from "./pages/draws/NewDraw";

// Auth Pages
import Login from "./pages/auth/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={
              <ProtectedRoute>
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
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/support" element={<Support />} />
                        
                        {/* Video Management Routes */}
                        <Route path="/videos/new" element={<NewVideo />} />
                        <Route path="/videos" element={<ListVideos />} />
                        <Route path="/videos/categories/new" element={<NewCategory />} />
                        <Route path="/videos/categories" element={<ManageCategories />} />
                        <Route path="/videos/artists/new" element={<NewArtist />} />
                        <Route path="/videos/artists" element={<ManageArtists />} />
                        <Route path="/videos/uploads/new" element={<NewUploads />} />
                        <Route path="/videos/uploads" element={<ManageUploads />} />
                        
                        {/* Blog Management Routes */}
                        <Route path="/blog" element={<ManageBlog />} />
                        <Route path="/blog/new" element={<NewPost />} />
                        
                        {/* Draws Management Routes */}
                        <Route path="/draws" element={<ManageDraws />} />
                        <Route path="/draws/new" element={<NewDraw />} />
                        
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </main>
                  </div>
                </SidebarProvider>
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
