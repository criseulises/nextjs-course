import Link from "next/link";

export default function HomePage() {
   return (
      <main className="flex flex-col items-center p-24">
         <div className="font-sans grid items-center justify-items-center p-8 pb-20 gap-16">
            <span className="text-5xl">Hola Mundo</span>
         </div>

        <Link href={"/about"}>About Page</Link>
      </main>
   );
}
