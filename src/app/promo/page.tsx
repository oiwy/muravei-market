const Promo = () => {
  return (
    <section>
      <div className="container pb-8">
        <div className="flex flex-col gap-y-2 rounded bg-white p-4 shadow">
          <h1 className="text-3xl font-extrabold">Акции</h1>
          <div>
            <b>Чем больше сумма тем больше скидка!</b>
            <ul className="list-disc pl-5">
              <li>Скидка 5 % при покупке на сумму от 10 000 до 20 000 руб.</li>
              <li>Скидка 7 % при покупке на сумму от 20 001 до 50 000 руб.</li>
              <li>
                Скидка 10 % при покупке на сумму от 50 001 до 200 000 руб.
              </li>
            </ul>
          </div>
          <p>
            Акция действует на группу товаров из категории доборные элементы!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promo;
