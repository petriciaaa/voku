import React from "react";
import { Link, Route, Routes } from "react-router";
import ProtectedRoute from "./routes/ProtectedRoute";
import { NotFoundPage } from "@/pages/not-found";
import { Header } from "@/widgets/layouts/header";
import { Footer } from "@/widgets/layouts/footer";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route index element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={true} />}>
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="analytics"
          element={
            <ProtectedRoute redirectPath="/home" isAllowed={true}>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin"
          element={
            <ProtectedRoute redirectPath="/home" isAllowed={true}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      <Footer />
    </>
  );
}

const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link className="p-4" to="/home">
        Home
      </Link>
      <Link className="p-4" to="/users">
        Users
      </Link>
      <Link className="p-4" to="/dashboard">
        dashboard
      </Link>
      <Link className="p-4" to="/analytics">
        analytics
      </Link>
      <Link className="p-4" to="/admin">
        admin
      </Link>
    </nav>
  );
};
const Landing = () => {
  return <h2>Landing (Public: anyone can access this page)</h2>;
};

const Home = () => {
  return <h2>Home (Protected: authenticated user required)</h2>;
};

const Dashboard = () => {
  return <h2>Dashboard (Protected: authenticated user required)</h2>;
};

const Analytics = () => {
  return (
    <h2>
      Analytics (Protected: authenticated user with permission 'analyze'
      required)
    </h2>
  );
};

const Admin = () => {
  return (
    <h2>Admin (Protected: authenticated user with role 'admin' required)</h2>
  );
};
export default App;
