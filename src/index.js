import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<UserProvider>
		<App />
	</UserProvider>
);
