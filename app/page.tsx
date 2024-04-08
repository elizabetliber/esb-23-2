import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen px-5 py-12 text-white text-center">
      <div className="container mx-auto">
        <div className="flex justify-between text-xl">
        <Link href={""} className="tracking-wide hover:scale-125 ease-in duration-300 block px-14 py-3 bg-black rounded-full shadow-lg shadow-violet-900/100">О нас</Link>
        <Link href={""} className="hover:scale-125 ease-in duration-300 block px-14 py-3 bg-black rounded-full shadow-lg shadow-violet-900/100">Новости</Link>
        <Link href={""} className="hover:scale-125 ease-in duration-300 block px-14 py-3">ЭСб-23-2</Link>
        <Link href={""} className="hover:scale-125 ease-in duration-300 block px-14 py-3 bg-black rounded-full shadow-lg shadow-violet-900/100">ДЗ</Link>
        <Link href={""} className="hover:scale-125 ease-in duration-300 block px-14 py-3 bg-black rounded-full shadow-lg shadow-violet-900/100">Наши достижения</Link>
      </div>
      </div>
    </main>
  );
}
