export default function Item({item}) {
    const {name, quantity, category} = item;
    return (
        <section className="bg-slate-800 p-2 w-96 my-4">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-lg">Buy {quantity} in {category}</p>
        </section>
    );
}