"use client";

import Image from "next/image";
import Link from "next/link";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import { features, plates } from "./response";

const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-flow-col-dense grid-cols-2 grid-rows-[auto,1fr] gap-4">
            <Image
              className="col-span-2 row-span-1 h-full rounded bg-[rgb(226,226,226)] object-cover object-left shadow md:row-span-2"
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

          <div className="grid grid-cols-1 grid-rows-3 gap-4 pb-8 pt-4 sm:grid-cols-3 sm:grid-rows-1">
            {features.map(
              (feature: {
                title: string;
                description: string;
                icon: string;
              }) => (
                <div
                  key={feature.title}
                  className="col-span-1 flex items-center gap-3 rounded bg-white p-5 shadow"
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
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-extrabold leading-none text-neutral-950">
                      {feature.title}
                    </h3>
                    <p className="block text-neutral-500 sm:hidden xl:block">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container py-8">
          <h2 className="inline-block rounded bg-primary px-4 py-2 text-xl font-black text-neutral-50 sm:text-2xl">
            Популярные категории
          </h2>
          <div className="grid grid-flow-row-dense auto-rows-auto grid-cols-2 gap-4 pt-6 lg:grid-cols-3">
            {plates.map((plate) => (
              <div
                key={plate.title}
                className="flex flex-col gap-1 rounded bg-white p-4 shadow"
              >
                <Link
                  href={`/${plate.title}`}
                  className="text-lg font-extrabold leading-none text-secondary"
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

      {/* <section>
        <div className="container py-4">
          <h2 className="inline-block rounded bg-primary px-4 py-2 text-2xl font-black text-neutral-50">
            Новости и акции
          </h2>
        </div>
      </section> */}

      <section>
        <div className="container py-8">
          <h2 className="inline-block rounded bg-primary px-4 py-2 text-xl font-black text-neutral-50 sm:text-2xl">
            Мы тут
          </h2>
          <div className="mt-6 h-[400px] w-full overflow-hidden rounded shadow-md">
            <YMaps>
              <Map
                defaultState={{
                  center: [55.006786, 82.972837],
                  zoom: 13,
                  controls: ["zoomControl", "fullscreenControl"],
                }}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
                className="h-full w-full"
              >
                <Placemark
                  geometry={[55.006786, 82.972837]}
                  options={{
                    preset: "islands#redDotIcon",
                    iconColor: "#e70a40",
                  }}
                />
              </Map>
            </YMaps>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
