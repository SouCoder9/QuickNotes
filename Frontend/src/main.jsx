import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const clerkPubKey = "pk_test_Z2xvcmlvdXMtbWFzdGlmZi0yMS5jbGVyay5hY2NvdW50cy5kZXYk";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ClerkProvider publishableKey={clerkPubKey}>
        <App />
    </ClerkProvider>
);
