import { redirect } from "next/navigation";
import clientPromise from "@/LIB/mongodb";

export default async function Page({ params }) {
    const { shorturl } = await params

    const client = await clientPromise;
    const db=client.db("linkify")
    const collection =db.collection("url")

    const doc=await collection.findOne({shorturl: shorturl})
    if(doc){
        redirect(doc.url)
    } else{
        redirect("/")
    }

  return <div>My Post: {url}</div>
}