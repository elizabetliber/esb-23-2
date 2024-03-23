import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-5 text-white text-center">
      <div className="flex flex-col items-center max-w-xl drop-shadow-lg gap-y-4">
        <h1 className="text-3xl">Последние новости группы ЭСб-23-2</h1>
        <p className="">Недавно некоторые студенты были замешаны в терроризме. Среди них и студенты нашей группы. Особенно обратите внимание на опасного преступника <span className="text-[red]">Никиту Кика</span>. Он известен тем, что любит заёбывать людей и высасывать энергию. Рядом с ним сидеть не стоит. Вампиров в вузе не поощряем. Остальные - соучастники, но не менее опасные. <br /> <span className="underline decoration-2 text-xl">Будьте осторожны!</span></p>
          <Image
            src="/Однокурсники.png"
            alt=""
            width="100" height="100" layout="responsive" objectFit="contain"
          />
      </div>
    </main>
  );
}
