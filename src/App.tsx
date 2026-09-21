import ProtectedRoute from "@/components/protected-route";
import AdminGuard from "@/components/dashboard/admin-guard";
import { AuthProvider } from "@/hooks/use-auth";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SeedDataProvider } from "@/demo/seed-data-provider";
import DemoBlogDashboard from "./pages/demo/blog";
import DemoBlogEditor from "./pages/demo/blog/editor";
import DemoProfileSettings from "./pages/demo/profile";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blog/[slug]";
import Company from "./pages/company";
import People from "./pages/people";
import Contact from "./pages/contact";
import ProfileSettings from "./pages/dashboard/profile";
import BlogDashboard from "./pages/dashboard/blog";
import BlogEditor from "./pages/dashboard/blog/editor";
import Features from "./pages/features";
import Home from "./pages/home";
import CookiePolicyPage from "./pages/legal/cookie-policy";
import PrivacyPolicyPage from "./pages/legal/privacy-&-policy";
import TermsAndConditionPage from "./pages/legal/terms-&-condition";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgot-password";
import NotFound from "./pages/not-found";
import PartnerDetail from "./pages/partners/[slug]";
import Pricing from "./pages/pricing";
import BronzePlan from "./pages/pricing/bronze";
import SilverPlan from "./pages/pricing/silver";
import GoldPlan from "./pages/pricing/gold";
import FoundingPlan from "./pages/pricing/founding";
import SignUp from "./pages/signup";
import ComingSoonPage from "./pages/utility/coming-soon";
import DownloadPage from "./pages/utility/download";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.PROD ? "/opportunity4alltalents" : "/"}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/people" element={<People />} />
              <Route path="/partners/:slug" element={<PartnerDetail />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/pricing/bronze" element={<BronzePlan />} />
              <Route path="/pricing/silver" element={<SilverPlan />} />
              <Route path="/pricing/gold" element={<GoldPlan />} />
              <Route path="/pricing/founding" element={<FoundingPlan />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms-&-condition" element={<TermsAndConditionPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/coming-soon" element={<ComingSoonPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/dashboard/profile"
                element={
                  <ProtectedRoute>
                    <ProfileSettings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/blog"
                element={
                  <AdminGuard>
                    <BlogDashboard />
                  </AdminGuard>
                }
              />
              <Route
                path="/dashboard/blog/new"
                element={
                  <AdminGuard>
                    <BlogEditor />
                  </AdminGuard>
                }
              />
              <Route
                path="/dashboard/blog/edit/:id"
                element={
                  <AdminGuard>
                    <BlogEditor />
                  </AdminGuard>
                }
              />
              {/* Demo routes — static seed data, no auth or database */}
              <Route
                path="/demo/*"
                element={
                  <SeedDataProvider>
                    <Routes>
                      <Route index element={<Navigate to="/demo/dashboard/blog" replace />} />
                      <Route path="dashboard" element={<Navigate to="/demo/dashboard/blog" replace />} />
                      <Route path="dashboard/blog" element={<DemoBlogDashboard />} />
                      <Route path="dashboard/blog/new" element={<DemoBlogEditor />} />
                      <Route path="dashboard/blog/edit/:id" element={<DemoBlogEditor />} />
                      <Route path="dashboard/profile" element={<DemoProfileSettings />} />
                      <Route path="*" element={<Navigate to="/demo/dashboard/blog" replace />} />
                    </Routes>
                  </SeedDataProvider>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
