export default function Item(props) {
    return (
        <li className="bg-white border border-b-fuchsia-900 rounded ml-3 p-3 mb-3">
        <p className="font-bold">
        {props.name}
        </p>

        <p className="text-sm">
        Quantity: {props.quantity}
        </p>

        <p className="text-sm text-gray-600">
        Category: {props.category}
        </p>
    </li>
    );
}
