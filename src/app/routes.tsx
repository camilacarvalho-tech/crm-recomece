import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import Leads from "./pages/Leads";
import SistemaInterno from "./pages/SistemaInterno";
import Conversao from "./pages/Conversao";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "leads", element: <Leads /> },
      { path: "clientes", element: <Clientes /> },
      { path: "sistema-interno", element: <SistemaInterno /> },
      { path: "conversao", element: <Conversao /> },
    ],
  },
]);