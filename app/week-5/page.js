import Link from "next/link";
import NewItem from "./NewItem";

export default function Page() {
    return (
        <main className="min-h-screen bg-linear-to-r from-violet-100 to-fuchsia-200 px-8 pt-6">
            <Link href="/" className="text-purple-700 hover:underline font-light">← Back to Home</Link>
            <h1 className="text-3xl font-bold text-purple-900 text-center mt-8 mb-6">Add a New Item</h1>
            <div className="flex justify-center">
            <NewItem/>
            </div>
        </main>
    );
}
