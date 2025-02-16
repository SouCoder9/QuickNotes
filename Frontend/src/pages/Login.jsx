import { SignIn } from "@clerk/clerk-react";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full transition">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
                    Login
                </h2>
                <SignIn />
            </div>
        </div>
    );
};

export default Login;
