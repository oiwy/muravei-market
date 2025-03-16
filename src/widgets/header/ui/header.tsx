"use client";

import { useState } from "react";
import Link from "next/link";

import { catalog } from "@/app/response";

const Menu = () => {
  return (
    <nav className="grid grid-flow-row-dense auto-rows-max grid-cols-3 gap-5">
      {catalog.map((item) => (
        <div key={item.title} className="h-max space-y-1">
          <Link
            href={`/${item.title}`}
            className="text-lg font-extrabold text-primary transition-colors hover:text-primary/80"
          >
            {item.title}
          </Link>
          {item.types.map((type) => (
            <div key={type.title} className="space-y-1 pl-2">
              <Link
                href={`/${item.title}/${type.title}`}
                className={`transition-colors ${type.subtypes ? "font-bold text-primary hover:text-primary/80" : "text-neutral-950 hover:text-neutral-950/80"}`}
              >
                {type.title}
              </Link>
              <div className="flex flex-col pl-2">
                {type.subtypes?.map((subtype) => (
                  <Link
                    key={subtype}
                    href={`/${item.title}/${type.title}/${subtype}`}
                    className="text-neutral-950 transition-colors hover:text-neutral-950/80"
                  >
                    {subtype}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </nav>
  );
};

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  const navLinks = [
    { name: "Услуги", link: "/services" },
    { name: "Доставка", link: "/delivery" },
    { name: "О нас", link: "/about-us" },
    { name: "Акции", link: "/promo" },
    { name: "Монтаж", link: "/installation" },
    { name: "Контакты", link: "/contacts" },
    { name: "Галерея", link: "/gallery" },
  ];

  return (
    <>
      <header>
        <div className="w-full bg-primary">
          <div className="container flex items-center justify-between py-3">
            <div className="flex gap-4">
              {["Галерея", "Вакансии", "Дилерам"].map((item) => (
                <Link
                  key={item}
                  href={"/"}
                  className="font-semibold text-neutral-50 outline-none transition duration-300 hover:text-neutral-300 focus-visible:text-neutral-300"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="hidden gap-4 md:flex">
              <a
                href="mailto:muravei-market@bk.ru"
                className="flex items-center gap-1 fill-neutral-50 font-semibold text-neutral-50 outline-none transition duration-300 hover:fill-neutral-300 hover:text-neutral-300 focus-visible:fill-neutral-300 focus-visible:text-neutral-300"
              >
                <svg
                  className="mt-0.5 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
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
            className="rounded bg-primary px-4 py-2 font-black text-neutral-50 outline-none transition duration-300 hover:bg-primary/80 focus-visible:bg-primary/80"
          >
            МУРАЙВЕЙ МАРКЕТ
          </Link>
          <div className="hidden lg:block">
            <h1 className="font-black text-neutral-950">
              ИНТЕРНЕТ-МАГАЗИН СТРОИТЕЛЬНЫХ МАТЕРИАЛОВ
            </h1>
          </div>
          <div className="flex gap-6">
            <div className="hidden gap-2 sm:flex">
              <a
                href="tel:+73832632100"
                className="flex size-10 items-center justify-center rounded bg-primary outline-none transition duration-300 hover:bg-primary/80 focus-visible:bg-primary/80"
              >
                <svg
                  className="size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fafafa"
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
                </svg>
              </a>
              <div className="flex flex-col items-center justify-center gap-1">
                <a
                  href="tel:+73832632100"
                  className="font-extrabold leading-none text-neutral-950 outline-none transition duration-300 hover:text-neutral-700 focus-visible:text-neutral-700"
                >
                  8 (383) 263-21-00
                </a>
                <p className="text-xs leading-none text-neutral-950">
                  с 08:00 до 18:00 GMT+8
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Link
                href="/cart"
                className="flex size-10 items-center justify-center rounded bg-primary outline-none transition duration-300 hover:bg-primary/80 focus-visible:bg-primary/80"
              >
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fafafa"
                >
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="flex size-10 items-center justify-center rounded bg-primary outline-none transition duration-300 hover:bg-primary/80 focus-visible:bg-primary/80"
              >
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fafafa"
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
              className="fill-neutral-400"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </label>
          <input
            className="w-full rounded border-2 border-neutral-100 bg-white p-1 pl-7 text-base font-bold text-neutral-950 outline-none transition duration-300 hover:border-primary focus-visible:border-primary"
            type="text"
            name=""
            id="search"
            placeholder="Поиск"
          />
        </div>
      </header>
      <header className="sticky top-0 z-40">
        <div className="bg-neutral-100/70 backdrop-blur-xl">
          <nav className="container flex justify-between py-4">
            <button
              className="flex gap-1 text-lg font-extrabold text-secondary"
              onClick={() => setNavVisible(!navVisible)}
            >
              Каталог
              <svg
                className={`mt-1.5 size-5 fill-secondary transition-all duration-300 ${
                  navVisible ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg "
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M480-338q-12 0-24-5t-21-14L252-540q-18-18-18-44t18-44q18-18 44-18t44 18l140 140 140-140q18-18 44-18t44 18q18 18 18 44t-18 44L525-357q-9 9-21 14t-24 5Z" />
              </svg>
            </button>
            {navLinks.map((nav) => (
              <Link
                key={nav.name}
                href={nav.link}
                className="hidden text-lg font-extrabold text-secondary outline-none transition duration-300 hover:text-secondary/80 focus-visible:text-secondary/80 md:block"
              >
                {nav.name}
              </Link>
            ))}

            <div className="relative block md:hidden">
              <button
                className="flex items-center text-3xl leading-3 text-secondary outline-none"
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                onBlur={() => setMoreMenuOpen(false)}
              >
                ...
              </button>

              {moreMenuOpen && (
                <div className="absolute right-0 top-4 mt-2 flex w-40 flex-col gap-2 overflow-y-scroll rounded-lg border bg-white p-2 shadow-lg">
                  {navLinks.map((nav) => (
                    <Link
                      key={nav.name}
                      href={nav.link}
                      className="block px-3 py-1 text-lg font-extrabold text-secondary outline-none transition duration-300 hover:text-secondary/80"
                      onClick={() => setMoreMenuOpen(false)}
                    >
                      {nav.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Разворачиваемый "Каталог" */}
        {navVisible && (
          <div className="absolute w-screen">
            <div className="bg-neutral-100 py-4">
              <div className="container flex max-h-full min-h-screen justify-center overflow-y-scroll">
                <Menu />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
