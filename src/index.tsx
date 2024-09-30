import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/styles/main.scss";

import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./app/Providers/Context";
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);
