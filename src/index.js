import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import RulesProvider from "./context/RulesContext";
import IrregularVProvider from "./context/IrregularVContext";
import TenseProvider from "./context/TenseContext";
import FunSentencesProvider from "./context/FunSentencesContext";
import SidebarProvider from "./context/SidebarContext";
import LoginProvider from "./context/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoginProvider>
    <SidebarProvider>
      <FunSentencesProvider>
        <TenseProvider>
          <IrregularVProvider>
            <RulesProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </RulesProvider>
          </IrregularVProvider>
        </TenseProvider>
      </FunSentencesProvider>
    </SidebarProvider>
  </LoginProvider>
);
