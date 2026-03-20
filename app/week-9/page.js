"use client";

import Link from "next/link";
import { useUserAuth } from "./contexts/AuthContext";

export default function HomePage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleLogin() {
        try {
        await gitHubSignIn();} 
        catch (error) {
        console.error("Login failed:", error);}
    }

    async function handleLogout() {
        try {
        await firebaseSignOut();} 
        catch (error) {
        console.error("Logout failed:", error);}
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-violet-100 to-fuchsia-200 dark:from-slate-950 dark:to-slate-900 text-purple-950 dark:text-purple-100 p-6">
        <div className="bg-white dark:bg-slate-900 shadow-lg rounded-lg p-8 w-full max-w-md text-center">
            <h1 className="text-3xl font-bold mb-4 text-purple-900 dark:text-purple-200">Shopping List App</h1>

            {!user ? (
            <>
                <p className="mb-6">Log in with GitHub to continue!</p>
                <button onClick={handleLogin}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition">Login with GitHub</button>
            </>
            ) : (
            <>
                <p className="mb-4">Welcome, {user.displayName} ({user.email})</p>

                <div className="flex flex-col gap-3">
                <Link href="/shopping-list" 
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