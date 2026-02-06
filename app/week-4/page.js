import ItemList from "./item-list";
import items from "./items.json";
import Link from "next/link";

export default function Page() {
    return (
        <main className="bg-linear-to-r from-violet-100 to-fuchsia-200">
            <Link href="/" className="text-purple-700 hover:underline font-light">← Back to Home</Link>
            <h1 className="text-4xl font-bold text-purple-900 text-center mb-2">Shopping List</h1>
            <ItemList title="🛒Grocery Items🛒" items={items} />
        </main>
    );
}
