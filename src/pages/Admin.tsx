import { useState } from "react";
import { AdminLogin } from "@/components/AdminLogin";

export const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <p>Admin functionality is currently disabled.</p>
    </div>
  );
};