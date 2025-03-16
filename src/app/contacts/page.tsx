"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Contacts = () => {
  return (
    <section>
      <div className="container pb-8">
        <div className="flex flex-col-reverse gap-3 rounded bg-white p-4 shadow md:flex-row">
          <div className="h-[500px] w-full overflow-hidden rounded md:flex-1">
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
          <div className="flex flex-col gap-y-2">
            <h1 className="text-3xl font-extrabold">Контакты</h1>
            <b>МУРАВЕЙ МАРКЕТ</b>
            <p>г. Новосибирск, ул. Выборная, 158</p>
            <div className="flex items-center gap-2">
              <a
                href="tel:+73832632100"
                className="flex size-7 items-center justify-center rounded bg-primary outline-none transition duration-300 hover:bg-primary/80 focus-visible:bg-primary/80"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fafafa"
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
                </svg>
              </a>
              <a href="tel:+73832632100" className="text-lg font-semibold">
                Моб.тел. 8 (383) 263-21-00
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="mailto:muravei-market@bk.ru"
                className="flex size-7 items-center justify-center rounded bg-primary outline-none transition duration-300 hover:bg-primary/80 focus-visible:bg-primary/80"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fafafa"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                </svg>
              </a>
              <a
                href="mailto:muravei-market@bk.ru"
                className="text-lg font-semibold"
              >
                muravei-market@bk.ru
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold">График работы:</h2>
              <p>Пн-Пт 09:00-18:00</p>
              <p>Сб-Bс — выходной</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
