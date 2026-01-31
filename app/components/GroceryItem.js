export default function Item(props) {
    return (
        <li className="bg-white border border-purple-700 rounded w-1/3 mx-auto mb-2 p-2">
        <p className="font-bold">
        {props.name}
        </p>

        <p className="text-sm text-gray-600">Quantity: {props.quantity}</p>

        <p className="text-sm text-gray-600">Category: {props.category}</p>
    </li>
    );
}

// if deconstructed it would look like this:
//
// export default function Item({ name, quantity, category }) {
// return (
//     <li className="bg-white border border-purple-700 rounded w-1/3 mx-auto mb-2 p-2">
//     <p className="font-bold">{name}</p>
//     <p className="text-sm text-gray-600">Quantity: {quantity}</p>
//     <p className="text-sm text-gray-600">Category: {category}</p>
//     </li>
// );
// }
