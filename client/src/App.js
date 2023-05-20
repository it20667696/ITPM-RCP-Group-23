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
import UpdateCustomerPage from "scenes/customers/UpdateCustomerPage";
import ViewCustomerPage from "scenes/customers/ViewCustomerPage";
import AddCustomerPage from "scenes/customers/AddCustomerPage";
import Transactions from "scenes/transactions";
import Overview from "scenes/overview";
import Admin from "scenes/admin";
import LoginPage from "scenes/LoginPage/LoginPage";
import UpdateProductPage from "scenes/products/UpdateProductPage";
import ViewProductPage from "scenes/products/ViewProductPage";
import AddProductPage from "scenes/products/AddProductPage";
import AddInventory from "scenes/Inventory/AddInventory";
import Items from "scenes/Inventory";
import UpdateInventoryPage from "scenes/Inventory/UpdateItem";

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
              <Route
                path="/customers/:id/update"
                element={<UpdateCustomerPage />}
              />
              <Route
                path="/customers/:id/view"
                element={<ViewCustomerPage />}
              />
              <Route path="/addCustomer" element={<AddCustomerPage />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/admin" element={<Admin />} />
              <Route
                path="/update-product/:id"
                element={<UpdateProductPage />}
              />
              <Route path="/products/:id/view" element={<ViewProductPage />} />
              <Route path="/addProduct" element={<AddProductPage />} />
              <Route path="/addInventory" element={<AddInventory/>}/>
              <Route
                path="/update-inventory/:id"
                element={<UpdateInventoryPage />}
              />
              <Route path="/items" element={<Items/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
