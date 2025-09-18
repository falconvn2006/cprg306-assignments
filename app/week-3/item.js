export default function Item({item}) {
    const {name, quantity, category} = item;
    return (
        <section className="bg-slate-400 p-4 w-1/5 m-4">
            <h2>Name: {name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </section>
    );
}