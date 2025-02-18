import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <nav className="p-4 bg-gray-900 dark:bg-gray-800 text-white flex justify-between items-center shadow-md border-b border-gray-700">
            <h1 className="text-2xl font-bold tracking-wide">QuickNotes</h1>
            <div className="flex items-center gap-4">
                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-white bg-gray-800 dark:bg-gray-600 p-2 rounded-lg transition hover:scale-110"
                >
                    {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>

                {/* Authentication Buttons */}
                <SignedIn>
                    <UserButton afterSignOutUrl="/login" />
                </SignedIn>
                <SignedOut>
                    <Link
                        to="/login"
                        className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg transition shadow-md"
                    >
                        Login
                    </Link>
                </SignedOut>
            </div>
        </nav>
    );
};

export default Navbar;
