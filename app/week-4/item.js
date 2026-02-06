export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-white border border-purple-700 rounded w-1/3 mx-auto mb-1">
            <p className="text-lg font-semibold text-center">{name}</p>
            <p className="text-sm text-purple-950 text-center">Buy {quantity}</p>
            <p className="text-sm text-purple-950 capitalize text-center">Category: {category}</p>
        </li>
    );
}
