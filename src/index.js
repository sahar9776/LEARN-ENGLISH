import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SidebarMenuProvider from "./context/SidebarMenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarMenuProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SidebarMenuProvider>
);
