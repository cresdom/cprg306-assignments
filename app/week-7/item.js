export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-white border border-purple-700 rounded w-80 mx-auto mb-2 p-3 dark:bg-slate-900 dark:border-purple-400">
            <p className="text-lg font-semibold text-center text-purple-900 dark:text-purple-100">{name}</p>
            <p className="text-sm text-purple-950 text-center dark:text-purple-200">Quantity: {quantity}</p>
            <p className="text-sm text-purple-950 capitalize text-center dark:text-purple-200">Category: {category}</p>
        </li>
    );
}
