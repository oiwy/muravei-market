import Image from "next/image";

const AboutUs = () => {
  return (
    <section>
      <div className="container pb-6">
        <div className="flex flex-col-reverse rounded bg-neutral-50 shadow lg:flex-row">
          <div className="relative flex flex-1 flex-col items-center gap-y-1">
            <div className="relative aspect-[4/6] h-auto w-full">
              <Image
                className="rounded object-cover"
                src={"/about.jpg"}
                layout="fill"
                objectFit="cover"
                alt="Горев Денис Вадимович"
              />
            </div>
            <div className="absolute bottom-0 w-full rounded-b bg-neutral-50/90 py-2">
              <p className="text-center text-lg">
                <b>Директор компании</b> Горев Денис Вадимович
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-y-2 p-4">
            <h1 className="text-3xl font-extrabold">О нас</h1>
            <p>
              Строительство и ремонт Вашего дома связан с многочисленными
              хлопотами: Какие материалы выбрать? Как рассчитать количество,
              чтобы всего хватило, но не было много остатков? Как правильно
              сделать монтаж? Где купить недорого качественный материал и успеть
              в намеченный срок? И многое другое…
            </p>
            <p>
              Поэтому наша главная задача сделать все возможное, чтобы помочь
              Вам при очень важном и ответственном событии в вашей жизни —
              строительстве Вашего дома.
            </p>
            <div>
              <p>
                Мы не просто продаем материалы для фасадов, кровли, заборов и
                комплектующие к ним — Мы помогаем каждому клиенту:
              </p>
              <ul className="list-disc pl-5">
                <li>выбрать наилучший вариант;</li>
                <li>рассчитать смету и раскрой материала;</li>
                <li>
                  для сложных проектов выезжаем на бесплатный замер для точного
                  расчета;
                </li>
                <li>предоставим инструкции для правильного монтажа;</li>
                <li>максимально оперативно доставить материалы на объект.</li>
              </ul>
            </div>
            <p>
              Являясь официальными дилерами большинства крупнейших торговых
              марок DÖKE, FineBer, Grand Line, KNAUF, URSA, Изоспан, Техно
              Николь, Ондутис, Rockwool, Teplit, Tytan, Daxmer — мы уверены в
              качестве нашей продукции и всегда можем предложить конкурентные
              цены.
            </p>
            <h2 className="text-lg font-medium">
              Мы всегда открыты для сотрудничества!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
