import { Provider } from "@/components/ui/provider";

import { createRoot } from "react-dom/client";
import Portfolio from "./Demo.jsx";
//import App from "./App.jsx";
//import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <HashRouter>
  //   <Provider>
  //     <App />
  //   </Provider>
  // </HashRouter>
  <Provider>
    <Portfolio />
  </Provider>
);
