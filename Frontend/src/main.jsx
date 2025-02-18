import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { NotesProvider } from "./context/NotesContext";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
    <ClerkProvider publishableKey={clerkPubKey}>
        <NotesProvider>
            <App />
        </NotesProvider>
    </ClerkProvider>
);
