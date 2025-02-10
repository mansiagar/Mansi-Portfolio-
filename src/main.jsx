import { Provider } from "@/components/ui/provider";

import { createRoot } from "react-dom/client";
//import Portfolio from "./Demo.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
