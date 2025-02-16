import { useState } from "react";
// import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
// import { auth, googleProvider } from "../firebase";
import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Google Sign-In
    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (error) {
            console.error("Google Sign-In Error:", error.message);
        }
    };

    // Email/Password Login
    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            console.error("Login Error:", error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Login
                </h2>
                <form onSubmit={handleEmailLogin} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-1">
                            Email
                        </label>
                        <div className="flex items-center border rounded-lg p-2">
                            <FiMail className="text-gray-500 mr-2" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="outline-none w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-1">
                            Password
                        </label>
                        <div className="flex items-center border rounded-lg p-2">
                            <FiLock className="text-gray-500 mr-2" />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="outline-none w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">OR</p>
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition mt-2"
                    >
                        <button className="mr-2" />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
