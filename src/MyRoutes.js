import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import MainPage from "./pages/MainPage";
import EditPage from "./pages/EditPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import AdminProvider from "./contexts/AdminProvider";
import ClientProvider from "./contexts/ClientProvider";
import NoteFountPage from "./pages/404";

const MyRoutes = () => {
  return (
    <ClientProvider>
      <AdminProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/admin-panel" element={<AdminPage />} />
            <Route path="/admin-panel/add" element={<AddPage />} />
            <Route path="/admin-panel/edit/:id" element={<EditPage />} />
            <Route path="/products-detail/:id" element={<DetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/*" element={<NoteFountPage />} />
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </ClientProvider>
  );
};

export default MyRoutes;
