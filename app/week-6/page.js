import ItemsList from "./items-list";

export default function Page() {
 return (
 <main className="mx-auto max-w-md p-4">
    <h1 className="text-5xl font-bold">Shopping List</h1>
    <ItemsList />
 </main>
 );
}