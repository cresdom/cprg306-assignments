import Item from "./item";

export default function ItemList({ title, items }) {
    const categories = [...new Set(items.map((item) => item.category))].sort();

    return (
        <section>
            <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
            <div className="space-y-8">
            {categories.map((cat) => (
                <div key={cat}>
                    <h3 className="text-2xl font-bold capitalize mb-3 text-center">{cat}</h3>
                    <ul className="space-y-3">
                    {items
                    .filter((item) => item.category === cat) 
                    .map((item) => (
                    <Item key={item.id} {...item} />
                    ))}
                    </ul>
                </div>
            ))}
            </div>
        </section>
    );
}
