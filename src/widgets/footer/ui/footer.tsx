import Link from "next/link";

import { catalog } from "@/app/response";

const Footer = () => {
  return (
    <footer className="bg-neutral-950">
      <div className="container flex flex-col gap-y-6 py-10">
        <div className="flex items-center justify-between">
          <div className="flex w-max flex-col items-center justify-center text-neutral-50">
            <p className="text-xs font-light">
              ПРИ КОНСУЛЬТАЦИИ ПОМОЖЕМ ПОДОБРАТЬ ПРОДУКЦИЮ ПОД ВАШИ ЗАДАЧИ
            </p>
            <h2 className="text-5xl font-bold">Задайте свой вопрос</h2>
          </div>
          <div>
            <Link
              href="tel:+73832632100"
              className="rounded bg-primary p-3 text-xl font-bold text-neutral-50"
            >
              Позвонить
            </Link>
          </div>
        </div>
        <div className="grid grid-flow-row-dense auto-rows-max grid-cols-3 gap-5">
          {catalog.map((item) => (
            <div key={item.title} className="h-max space-y-1">
              <Link
                href={`/${item.title}`}
                className="text-lg font-semibold text-primary"
              >
                {item.title}
              </Link>
              {item.types.map((type) => (
                <div key={type.title} className="space-y-1 pl-2">
                  <Link
                    href={`/${item.title}/${type.title}`}
                    className={`${type.subtypes ? "font-bold text-primary" : "text-neutral-50"}`}
                  >
                    {type.title}
                  </Link>
                  <div className="flex flex-col pl-2">
                    {type.subtypes?.map((subtype) => (
                      <Link
                        key={subtype}
                        href={`/${item.title}/${type.title}/${subtype}`}
                        className="text-neutral-50"
                      >
                        {subtype}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
