import { createBrowserRouter } from "react-router-dom";
import Layout from "./app/components/Layout";

import Dashboard from "./app/pages/Dashboard";
import Clientes from "./app/pages/Clientes";
import Leads from "./app/pages/Leads";
import SistemaInterno from "./app/pages/SistemaInterno";
import Conversao from "./app/pages/Conversao";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "leads",
        element: <Leads />,
      },
      {
        path: "clientes",
        element: <Clientes />,
      },
      {
        path: "sistema-interno",
        element: <SistemaInterno />,
      },
      {
        path: "conversao",
        element: <Conversao />,
      },
    ],
  },
]);