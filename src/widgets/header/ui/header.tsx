import Link from "next/link";

const Header = () => {
  return (
    <>
      <header>
        <div className="w-full bg-primary">
          <div className="container flex items-center justify-between py-3">
            <div className="flex gap-4">
              <Link href="" className="font-semibold text-neutral-50">
                Галерея
              </Link>
              <Link href="" className="font-semibold text-neutral-50">
                Вакансии
              </Link>
              <Link href="" className="font-semibold text-neutral-50">
                Дилерам
              </Link>
            </div>
            <div className="flex gap-4">
              <p className="flex items-center gap-1 font-semibold text-neutral-50">
                <svg
                  className="mt-0.5 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                >
                  <path d="M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 79q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Zm0-453Zm0 80q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Z" />
                </svg>
                г. Новосибирск
              </p>
              <a
                href="mailto:muravei-market@bk.ru"
                className="flex items-center gap-1 font-semibold text-neutral-50"
              >
                <svg
                  className="mt-0.5 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-480L501-453q-5 3-10.5 4.5T480-447q-5 0-10.5-1.5T459-453L160-640v400h640v-400ZM480-520l320-200H160l320 200ZM160-640v10-59 1-32 32-.5 58.5-10 400-400Z" />
                </svg>
                muravei-market@bk.ru
              </a>
            </div>
          </div>
        </div>
        <div className="container flex items-center justify-between py-4">
          <Link
            href="/"
            className="rounded bg-primary px-4 py-2 font-black text-neutral-50"
          >
            МУРАЙВЕЙ МАРКЕТ
          </Link>
          <div>
            <h1 className="font-black text-neutral-950">
              ИНТЕРНЕТ-МАГАЗИН СТРОИТЕЛЬНЫХ МАТЕРИАЛОВ
            </h1>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-2">
              <a
                href="tel:+73832632100"
                className="flex size-9 items-center justify-center rounded bg-primary transition hover:bg-primary/80"
              >
                <svg
                  className="size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
                </svg>
              </a>
              <div className="flex flex-col items-center justify-center gap-1">
                <a
                  href="tel:+73832632100"
                  className="font-bold leading-none text-neutral-950"
                >
                  8 (383) 263-21-00
                </a>
                <p className="text-xs font-light leading-none text-neutral-950">
                  с 08:00 до 18:00 GMT+8
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Link
                href="/cart"
                className="flex size-9 items-center justify-center rounded bg-primary transition hover:bg-primary/80"
              >
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                >
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="flex size-9 items-center justify-center rounded bg-primary transition hover:bg-primary/80"
              >
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                >
                  <path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="container relative flex items-center">
          <label htmlFor="search" className="absolute left-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </label>
          <input
            className="w-full rounded border p-1 pl-7 text-base font-bold text-neutral-950 hover:outline-primary active:outline-primary"
            type="text"
            name=""
            id="search"
            placeholder="Поиск"
          />
        </div>
      </header>
      <header className="sticky top-0 z-40 bg-neutral-100/70 backdrop-blur-xl">
        <nav className="container flex justify-between py-4">
          <button className="flex gap-1 text-lg font-extrabold text-secondary">
            Каталог
            <svg
              className="mt-1 size-5 fill-secondary"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M480-348q-10.26 0-20.09-3.91-9.82-3.92-17.52-11.61L258.96-546.96Q244-561.91 244-584t14.96-37.04Q273.91-636 296-636t37.04 14.96L480-474.09l146.96-146.95Q641.91-636 664-636t37.04 14.96Q716-606.09 716-584t-14.96 37.04L517.61-363.52q-7.7 7.69-17.52 11.61Q490.26-348 480-348Z" />
            </svg>
          </button>
          <Link href="" className="text-lg font-extrabold text-secondary">
            Услуги
          </Link>
          <Link href="" className="text-lg font-extrabold text-secondary">
            Доставка
          </Link>
          <Link href="" className="text-lg font-extrabold text-secondary">
            О нас
          </Link>
          <Link href="" className="text-lg font-extrabold text-secondary">
            Акции
          </Link>
          <Link href="" className="text-lg font-extrabold text-secondary">
            Монтаж
          </Link>
          <Link href="" className="text-lg font-extrabold text-secondary">
            Контакты
          </Link>
          <Link href="" className="text-lg font-extrabold text-secondary">
            Галерея
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
