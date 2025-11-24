import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export async function getItems(userId) {

    const snapshot = await getDocs(
        query(collection(db, "users", userId, "items"))
    );

    const items = [];

    snapshot.forEach((doc) => {
        items.push({id: doc.id, ...doc.data()})
    });

    return items;
}


export async function addItem(userId, item) {

    const docItem = await addDoc(
        collection(db, "users", userId, "items"), 
        item
    );

    return docItem.id;
}