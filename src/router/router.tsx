import React from "react";
import { Routes, Route } from "react-router-dom";
import { Search } from "../pages/Search";
import { Layout } from "../components/Layout";
import { Item } from "../pages/Item";
import { Home } from "../pages/Home";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/item/:id" element={<Item />} />
      </Route>
    </Routes>
    
  );
}

export { AppRoutes };
