import { SignIn } from "@clerk/clerk-react";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 max-w-sm w-full transition transform hover:scale-105">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
                    Sign in to continue
                </p>
                <SignIn />
            </div>
        </div>
    );
};

export default Login;
