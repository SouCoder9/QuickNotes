import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkLoaded, ClerkLoading } from "@clerk/clerk-react";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
    return (
        <Router>
            <ClerkLoading>
                <div className="h-screen flex items-center justify-center">
                    Loading...
                </div>
            </ClerkLoading>
            <ClerkLoaded>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </ClerkLoaded>
        </Router>
    );
};

export default App;
