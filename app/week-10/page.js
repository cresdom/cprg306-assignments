"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";

export default function HomePage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [error, setError] = useState("");

    useEffect(() => {
        if (user) {
            setError("");
        }
    }, [user]);

    async function handleLogin() {
        setError("");
        try {
            await gitHubSignIn();
        } 
        catch (error) {
            console.error("Login failed:", error);
            setError("Login failed. Please try again.");
        }
    }

    async function handleLogout() {
        setError("");
        try {
            await firebaseSignOut();
        } 
        catch (error) {
            console.error("Logout failed:", error);
            setError("Logout failed. Please try again.");
        }
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-violet-100 to-fuchsia-200 dark:from-slate-950 dark:to-slate-900 text-purple-950 dark:text-purple-100 p-6">
            <div className="bg-white dark:bg-slate-900 shadow-lg rounded-lg p-8 w-full max-w-md text-center">
            
                <div className="mb-4 text-left">
                    <Link href="/" className="text-purple-700 hover:underline dark:text-purple-300">← Back to Homepage</Link>
                </div>

                <h1 className="text-3xl font-bold mb-4 text-purple-900 dark:text-purple-200">Shopping List App</h1>

                {error && (
                    <p className="mb-4 text-red-600 dark:text-red-400 font-medium">{error}</p>
                )}
                {!user ? (
                    <>
                        <p className="mb-6">Log in with GitHub to continue!</p>
                        <button onClick={handleLogin}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition">Login here! :D</button>
                    </>
                ) : (
                    <>
                        <p className="mb-4">Hello! {user.displayName} ({user.email})</p>

                        <div className="flex flex-col gap-3">
                            <Link href="/week-10/shopping-list" 
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition">Go to Shopping List</Link>

                            <button
                                onClick={handleLogout}
                                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition">Logout
                            </button>
                        </div>

                    </>
                )}
            </div>
        </main>
    );
}