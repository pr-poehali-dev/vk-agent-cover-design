import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/d46991a0-ab58-4015-8804-6c3d13caf1e3/files/b8dd79dd-1ac1-4080-a2ec-845e3de532f8.jpg";

const categories = [
  {
    id: "hot",
    icon: "Flame",
    label: "Горящие туры",
    desc: "Лучшие цены — последние места",
    color: "#FF6B35",
    tours: [
      { name: "Мальдивы, Velaa", days: 7, price: 189000, rating: 5 },
      { name: "Турция, Анталья", days: 10, price: 52000, rating: 4 },
      { name: "ОАЭ, Дубай", days: 5, price: 98000, rating: 5 },
    ],
  },
  {
    id: "offers",
    icon: "Star",
    label: "Интересные предложения",
    desc: "Уникальные маршруты для вас",
    color: "#2196F3",
    tours: [
      { name: "Таиланд, Пхукет", days: 14, price: 115000, rating: 5 },
      { name: "Бали, Индонезия", days: 12, price: 130000, rating: 5 },
      { name: "Греция, Санторини", days: 8, price: 145000, rating: 5 },
    ],
  },
  {
    id: "sanatory",
    icon: "HeartPulse",
    label: "Санатории",
    desc: "Оздоровление и отдых",
    color: "#4CAF50",
    tours: [
      { name: "Кисловодск, Россия", days: 14, price: 45000, rating: 4 },
      { name: "Карловы Вары, Чехия", days: 10, price: 87000, rating: 5 },
      { name: "Друскининкай, Литва", days: 7, price: 62000, rating: 4 },
    ],
  },
  {
    id: "cruise",
    icon: "Ship",
    label: "Круизы",
    desc: "Море, роскошь, впечатления",
    color: "#9C27B0",
    tours: [
      { name: "Средиземноморье, MSC", days: 10, price: 210000, rating: 5 },
      { name: "Карибы, Royal Caribbean", days: 14, price: 280000, rating: 5 },
      { name: "Норвежские фьорды", days: 8, price: 195000, rating: 5 },
    ],
  },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("hot");
  const [days, setDays] = useState(7);
  const [people, setPeople] = useState(2);
  const [basePrice, setBasePrice] = useState(189000);
  const [calcResult, setCalcResult] = useState<number | null>(null);

  const activeCat = categories.find((c) => c.id === activeTab)!;

  const handleCalculate = () => {
    const pricePerDayPerPerson = basePrice / 7;
    const total = Math.round(pricePerDayPerPerson * days * people);
    setCalcResult(total);
  };

  const formatPrice = (price: number) =>
    price.toLocaleString("ru-RU") + " ₽";

  return (
    <div className="min-h-screen bg-[#f0f8ff] font-golos">
      {/* HERO */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Мальдивы"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/30 via-transparent to-[#0a2540]/70" />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 py-5 z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon name="Globe" size={16} className="text-white" />
            </div>
            <span className="text-white font-semibold text-sm tracking-widest uppercase">
              Sunwave Travel
            </span>
          </div>
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Icon name="Phone" size={14} className="text-white" />
            <span className="text-white text-sm font-medium">+7 (800) 555-35-35</span>
          </div>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 pb-12 px-6 md:px-12 z-10">
          <p className="text-[#7dd3fc] text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Турагентство
          </p>
          <h1 className="font-cormorant text-5xl md:text-7xl text-white leading-none mb-4">
            Путешествия<br />
            <em className="font-light italic">вашей мечты</em>
          </h1>
          <p className="text-white/80 text-base max-w-md mb-8">
            Мальдивы, круизы, оздоровительные туры — подберём идеальный отдых для каждого
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-sky-500/30 text-sm">
              Подобрать тур
            </button>
            <button className="border border-white/40 text-white px-7 py-3 rounded-full text-sm hover:bg-white/10 transition-all duration-200">
              Узнать цену
            </button>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute right-6 md:right-12 bottom-12 z-10 hidden md:flex flex-col gap-3">
          {[
            { num: "5 000+", label: "клиентов" },
            { num: "120+", label: "направлений" },
            { num: "15", label: "лет опыта" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/15 backdrop-blur-md rounded-2xl px-5 py-3 text-right border border-white/20"
            >
              <div className="text-white font-bold text-xl leading-none">{s.num}</div>
              <div className="text-white/60 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TABS NAVIGATION */}
      <section className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
                  activeTab === cat.id
                    ? "border-[#0ea5e9] text-[#0284c7]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon
                  name={cat.icon}
                  size={16}
                  style={{ color: activeTab === cat.id ? cat.color : undefined }}
                />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TOURS GRID */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[#0ea5e9] text-xs tracking-widest uppercase mb-1 font-medium">
              {activeCat.desc}
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl text-gray-800">
              {activeCat.label}
            </h2>
          </div>
          <button className="text-[#0284c7] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
            Все туры <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {activeCat.tours.map((tour, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-sky-50 group cursor-pointer"
              onClick={() => setBasePrice(tour.price)}
            >
              <div
                className="h-36 relative flex items-end p-4"
                style={{
                  background: `linear-gradient(135deg, ${activeCat.color}22, ${activeCat.color}44)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url(${HERO_IMAGE})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5">
                  <span className="text-xs font-semibold text-gray-700">
                    от {formatPrice(tour.price)}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  {"★".repeat(tour.rating).split("").map((s, j) => (
                    <span key={j} className="text-amber-400 text-xs">{s}</span>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{tour.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Icon name="Clock" size={13} />
                    <span>{tour.days} дней</span>
                  </div>
                  <button
                    className="text-[#0ea5e9] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setBasePrice(tour.price);
                    }}
                  >
                    Рассчитать <Icon name="Calculator" size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-gradient-to-br from-[#0a2540] to-[#0369a1] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sky-300 text-xs tracking-widest uppercase mb-2">Быстро и удобно</p>
            <h2 className="font-cormorant text-4xl text-white">Калькулятор стоимости тура</h2>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            {/* Days */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                  <Icon name="CalendarDays" size={16} className="text-sky-300" />
                  Количество дней
                </label>
                <span className="text-white font-bold text-2xl font-cormorant">{days}</span>
              </div>
              <input
                type="range"
                min={3}
                max={30}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-sky-400"
              />
              <div className="flex justify-between text-white/40 text-xs mt-1">
                <span>3 дня</span>
                <span>30 дней</span>
              </div>
            </div>

            {/* People */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-sky-300" />
                  Количество человек
                </label>
                <span className="text-white font-bold text-2xl font-cormorant">{people}</span>
              </div>
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <button
                    key={n}
                    onClick={() => setPeople(n)}
                    className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      people === n
                        ? "bg-sky-400 text-white shadow-lg shadow-sky-500/30"
                        : "bg-white/10 text-white/60 hover:bg-white/20"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Base price */}
            <div className="mb-8 bg-white/10 rounded-2xl p-4">
              <p className="text-white/60 text-xs mb-2">Базовая стоимость тура</p>
              <p className="text-sky-300 font-bold text-xl">{formatPrice(basePrice)}</p>
              <p className="text-white/40 text-xs mt-1">Нажмите на тур выше, чтобы изменить</p>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-sky-400 hover:bg-sky-300 text-[#0a2540] font-bold py-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-sky-500/20 text-base"
            >
              Рассчитать стоимость
            </button>

            {calcResult !== null && (
              <div className="mt-6 bg-white/15 rounded-2xl p-6 text-center border border-white/30">
                <p className="text-white/60 text-sm mb-1">Итоговая стоимость</p>
                <p className="text-white font-bold text-4xl font-cormorant">
                  {formatPrice(calcResult)}
                </p>
                <p className="text-white/50 text-xs mt-2">
                  {days} дн. × {people} чел. · примерный расчёт
                </p>
                <button className="mt-4 bg-white text-[#0a2540] font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-sky-50 transition-colors">
                  Оставить заявку
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a2540] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Globe" size={18} className="text-sky-400" />
            <span className="text-white font-semibold">Sunwave Travel</span>
          </div>
          <p className="text-white/30 text-sm">© 2024 Все права защищены</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">ВКонтакте</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Telegram</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}