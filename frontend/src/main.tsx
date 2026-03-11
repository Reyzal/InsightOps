import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryProvider } from "./app/providers/QueryProvider";
import { AppRoutes } from "./app/routes";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <AppRoutes />
    </QueryProvider>
  </StrictMode>
);

