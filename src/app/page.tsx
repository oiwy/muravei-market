import Image from "next/image";
import Link from "next/link";

import { features, plates } from "./response";

const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-flow-col grid-rows-2 gap-4">
            <Image
              className="row-span-2 h-full rounded bg-[rgb(226,226,226)] object-contain shadow"
              src="/hero-1.webp"
              width={916}
              height={429}
              quality={100}
              alt="big-image"
            />
            <Image
              className="col-span-1 rounded object-contain shadow"
              src="/hero-2.webp"
              width={300}
              height={206}
              alt="small-1"
            />
            <Image
              className="col-span-1 row-span-1 rounded object-contain shadow"
              src="/hero-3.webp"
              width={300}
              height={206}
              alt="small-2"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 py-6">
            {features.map(
              (feature: {
                title: string;
                description: string;
                icon: string;
              }) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 rounded bg-white p-5 shadow"
                >
                  <svg
                    className="size-10 fill-neutral-950"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d={feature.icon} />
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold leading-none text-neutral-950">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-500">{feature.description}</p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <h2 className="inline-block rounded bg-primary px-4 py-2 text-2xl font-black text-neutral-50">
            Популярные категории
          </h2>
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 py-6">
            {plates.map((plate) => (
              <div
                key={plate.title}
                className="flex flex-col gap-1 rounded bg-white p-4 shadow"
              >
                <Link
                  href={`/${plate.title}`}
                  className="text-lg font-extrabold uppercase leading-none text-secondary"
                >
                  {plate.title}
                </Link>
                <div className="flex flex-col">
                  {plate.types.map((type) => (
                    <Link
                      href={`/${plate.title}/${type}`}
                      key={plate.title + type}
                    >
                      {type}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <h2 className="inline-block rounded bg-primary px-4 py-2 text-2xl font-black text-neutral-50">
            Новости и акции
          </h2>
        </div>
      </section>
    </>
  );
};

export default Home;
