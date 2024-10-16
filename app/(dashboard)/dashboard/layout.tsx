import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => (
  <div className="flex h-screen">
    <Sidebar /> {/* Sidebar on the left */}
    <div className="flex-1 flex flex-col">
      <Header /> {/* Header at the top */}
      <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        {children} {/* Main content with independent scroll */}
      </main>
    </div>
  </div>
);

export default DashboardLayout;
