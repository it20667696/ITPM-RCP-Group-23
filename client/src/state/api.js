import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  prepareHeaders: (headers, { getState }) => {
    // Retrieve the token from the local storage
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  baseQuery,
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],
  endpoints: (build) => ({
    // getUser: build.query({
    //   query: (id) => `general/user/${id}`,
    //   providesTags: ["User"],
    // }),
    getUser: build.query({
      query: (id) => `login/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),

    getProductById: build.query({
      query: (id) => `client/getProductById/${id}`,
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),

    getCustomerById: build.query({
      query: (id) => `client/getCustomerById/${id}`,
      providesTags: (result, error, id) => [{ type: "Customers", id }],
    }),

    getTransactionById: build.query({
      query: (id) => `client/getTransactionById/${id}`,
      providesTags: (result, error, id) => [{ type: "Transactions", id }],
    }),

    getItems: build.query({
      query: () => "inventory/getallitems",
      providesTags: ["Items"],
    }),
    getItemsById: build.query({
      query: (id) => `inventory/getinventoryitem/${id}`,
      providesTags: (result, error, id) => [{ type: "Items", id }],
    }),
    

    createProduct: build.mutation({
      query: (newProduct) => ({
        url: "client/addProduct",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),

    createCustomer: build.mutation({
      query: (newCustomer) => ({
        url: "client/addCustomer",
        method: "POST",
        body: newCustomer,
      }),
      invalidatesTags: ["Customers"],
    }),

    createTransaction: build.mutation({
      query: (newTransaction) => ({
        url: "client/addTransaction",
        method: "POST",
        body: newTransaction,
      }),
      invalidatesTags: ["Transactions"],
    }),

    deleteProduct: build.mutation({
      query: (id) => ({
        url: `client/deleteProduct/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    deleteItem: build.mutation({
      query: (id) => ({
        url: `inventory/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Item"],
    }),
    deleteCustomer: build.mutation({
      query: (id) => ({
        url: `client/deleteCustomer/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Customers"],
    }),

    deleteTransaction: build.mutation({
      query: (id) => ({
        url: `client/deleteTransaction/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Transactions"],
    }),

    // Additional CRUD endpoints...

    updateProduct: build.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `client/updateProduct/${id}`,
        method: "PUT",
        body: updatedProduct,
      }),
      invalidatesTags: ["Products"],
    }),
    updateItem: build.mutation({
      query: ({ id, updatedItem }) => ({
        url: `inventory/updatedetails/${id}`,
        method: "POST",
        body: updatedItem,
      }),
      invalidatesTags: ["Item"],
    }),

    updateCustomer: build.mutation({
      query: ({ id, updatedCustomer }) => ({
        url: `client/updateCustomer/${id}`,
        method: "PUT",
        body: updatedCustomer,
      }),
      invalidatesTags: ["Customers"],
    }),

    updateTransaction: build.mutation({
      query: ({ id, updatedTransaction }) => ({
        url: `client/updateTransaction/${id}`,
        method: "PUT",
        body: updatedTransaction,
      }),
      invalidatesTags: ["Transactions"],
    }),

    patchProduct: build.mutation({
      query: ({ id, updatedFields }) => ({
        url: `client/patchProduct/${id}`,
        method: "PATCH",
        body: updatedFields,
      }),
      invalidatesTags: ["Products"],
    }),

    patchCustomer: build.mutation({
      query: ({ id, updatedFields }) => ({
        url: `client/patchCustomer/${id}`,
        method: "PATCH",
        body: updatedFields,
      }),
      invalidatesTags: ["Customers"],
    }),

    patchTransaction: build.mutation({
      query: ({ id, updatedFields }) => ({
        url: `client/patchTransaction/${id}`,
        method: "PATCH",
        body: updatedFields,
      }),
      invalidatesTags: ["Transactions"],
    }),

    createItem: build.mutation({
      query: (newItem) => ({
        url: "/inventory/item",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["Items"],
    }),
    getInventoryItem: build.mutation({
      query: (newItem) => ({
        url: "/inventory/getinventoryitem",
        method: "GET",
        body: newItem,
      }),
      invalidatesTags: ["InventoryItems"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
  useGetProductByIdQuery,
  useGetCustomerByIdQuery,
  useGetTransactionByIdQuery,
  useGetItemsQuery,
  useGetItemsByIdQuery,
  useCreateProductMutation,
  useCreateCustomerMutation,
  useCreateTransactionMutation,
  useDeleteProductMutation,
  useDeleteItemMutation,
  useDeleteCustomerMutation,
  useDeleteTransactionMutation,
  useUpdateProductMutation,
  useUpdateItemMutation,
  useUpdateCustomerMutation,
  useUpdateTransactionMutation,
  usePatchProductMutation,
  usePatchCustomerMutation,
  usePatchTransactionMutation,
  useCreateItemMutation,
  
} = api;
