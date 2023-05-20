import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Overview from "scenes/overview";
import Admin from "scenes/admin";
import LoginPage from "scenes/LoginPage/LoginPage";
import SelectSup from "scenes/suppliers/select_sup";
import Supplier_Dash from "scenes/suppliers/supplier_dash";
import CreateReq from "scenes/suppliers/create_req";
import MyRequests from "scenes/suppliers/my_requests";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<Layout />}>
              <Route
                path="/layout"
                element={<Navigate to="/dashboard" replace />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/selectsup" element={<SelectSup />} />
              <Route path="/supplierdash" element={<Supplier_Dash />} />
              <Route path="/createreq" element={<CreateReq />} />
              <Route path="/myrequsts" element={<MyRequests />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
