import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
// import { auth } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
    // const [user] = useAuthState(auth);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <nav className="p-4 bg-gray-900 dark:bg-gray-800 text-white flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold tracking-wide">QuickNotes</h1>
            <div className="flex items-center gap-4">
                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-white"
                >
                    {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>

                {/* Authentication Button */}
                {/* {user ? (
                    <button
                        onClick={() => auth.signOut()}
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition"
                    >
                        <FiLogOut />
                        Logout
                    </button>
                ) : (
                    <Link
                        to="/login"
                        className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg transition"
                    >
                        Login
                    </Link>
                )} */}
            </div>
        </nav>
    );
};

export default Navbar;
