import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { NotFoundPage } from "@/pages/not-found";
import { Header } from "@/widgets/layouts/header";
import { Footer } from "@/widgets/layouts/footer";
import { RegisterPage } from "@/pages/register";

function Layout() {
  return (
    <>
      <Header />
      <main className="w-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="register" element={<RegisterPage />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute redirectPath="/register" isAllowed={false}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

const Dashboard = () => {
  return <h2>Dashboard (Protected: authenticated user required)</h2>;
};

export default App;
