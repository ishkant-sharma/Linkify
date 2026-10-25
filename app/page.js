import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[70vh]">
        <div className="flex flex-col gap-4 items-center justify-center px-5">
          <p className="text-4xl font-bold">
            We are the best URL Shortener
          </p>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum animi doloremque quod aut repellat aperiam, pariatur nihil, ut minima ipsam facilis repudiandae facere architecto sint a esse? Commodi, animi.</p>
          <div className="flex gap-10">
            <Link href="/shorten"><button className="bg-purple-500 shadow-lg p-3 py-1 font-bold rounded-lg text-white">Try Now</button></Link>
          <Link href="/github"><button className="bg-purple-500 shadow-lg p-3 py-1 font-bold rounded-lg text-white">Github</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of Vector" src={"/vector.png"} fill={true}/>
        </div>
      </section>
    </main>
  );
}
