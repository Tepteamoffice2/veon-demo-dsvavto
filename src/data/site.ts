// DsvAvto facts for the homepage. Source: veon/client.json (ids in comments). Nothing here is invented.

export const NOTE = "Розділ у розробці";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

// company.contacts.phones, C-026, C-010
export const phones = {
  main: { label: "0 800 33-97-97", href: "tel:+380800339797", note: "безкоштовно по Україні" },
  sto: [
    { label: "(095) 830-77-48", href: "tel:+380958307748" },
    { label: "(093) 090-44-45", href: "tel:+380930904445" },
  ],
} as const;

// company.contacts.messengers[0], C-018
export const telegram = { href: "https://t.me/dsvavto_bot", label: "Telegram" } as const;

// C-026
export const emails = [
  { purpose: "Консультація", address: "support@dsvavto.ua" },
  { purpose: "Скарга чи претензія", address: "claims@dsvavto.ua" },
  { purpose: "Співпраця", address: "partner@dsvavto.ua" },
  { purpose: "Загальні питання", address: "info@dsvavto.ua" },
] as const;

// socials (status: confirmed)
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/dsvavto.ua/" },
  { label: "Facebook", href: "https://www.facebook.com/DsvAvto.com.ua/" },
] as const;

export const nav = [
  { href: "#hero", label: "Підбір" },
  { href: "#catalog", label: "Каталог" },
  { href: "#sto", label: "СТО" },
  { href: "#terms", label: "Доставка й оплата" },
  { href: "#stores", label: "Точки видачі" },
] as const;

// products_services[0], C-020: 8 groups. Zone = where the group sits on the car schema.
export const groups = [
  { n: 1, name: "ТО і фільтри" },
  { n: 2, name: "Гальмівна система" },
  { n: 3, name: "Двигун і вихлоп" },
  { n: 4, name: "Підвіска і рульове" },
  { n: 5, name: "Коробка передач" },
  { n: 6, name: "Охолодження, опалення" },
  { n: 7, name: "Електрика, освітлення" },
  { n: 8, name: "Кузов та елементи" },
] as const;

// products_services[1]
export const productCatalogs = [
  "Оливи", "Рідини", "Автохімія", "Акумулятори", "Шини", "Скло та щітки",
  "Кузовні деталі", "Лампи", "Аксесуари", "Інструмент INTERTOOL",
] as const;

// products_services[2]
export const promoBrands = ["Kendall", "WURTH", "ADVANTAGE", "K2", "ACDelco", "Rain-X"] as const;

// C-021: makes from the client's own selector (ABARTH…ZOTYE); no demand data, so alphabetical.
export const makes = [
  "Audi", "BMW", "Ford", "Hyundai", "Kia", "Mazda",
  "Mercedes-Benz", "Nissan", "Renault", "Skoda", "Toyota", "Volkswagen",
] as const;

// products_services[5]
export const stoWorks = [
  "Комп'ютерна діагностика",
  "Ремонт двигуна",
  "Заміна оливи і фільтрів",
  "Гальма",
  "Підвіска і рульове",
  "Розвал-сходження",
  "Електрика",
  "Шиномонтаж і балансування",
  "Кузовний ремонт і фарбування",
  "Вихлоп",
] as const;

// company.contacts.addresses (confirmed points only; Ахматової 5 and Виговського 13 are not shown: C-013, C-014)
export const stores = [
  {
    id: "bandery",
    title: "пр. Степана Бандери, 30",
    role: "Головний офіс і СТО",
    landmark: "Магазин «Автозапчастини», 2 поверх",
    hours: ["пн–пт 9:00–19:00", "сб 9:00–14:00", "нд вихідний"],
    map: maps("Київ, проспект Степана Бандери, 30"),
  },
  {
    id: "kiltseva",
    title: "Велика Кільцева дорога, 4г",
    role: "Точка видачі",
    landmark: "З'їзд з Окружної, перед «Прага Авто»",
    // C-015: Saturday hours conflict on the client's site (13:00 or 14:00)
    hours: ["пн–пт 9:00–19:00", "сб уточнюйте за телефоном"],
    map: maps("Київ, Велика Кільцева дорога, 4г"),
  },
  {
    id: "chornovola",
    title: "вул. В'ячеслава Чорновола, 41",
    role: "Пункт видачі інтернет-замовлень",
    landmark: "Навпроти Охматдиту",
    hours: ["пн–пт 10:00–19:30"],
    map: maps("Київ, вулиця В'ячеслава Чорновола, 41"),
  },
] as const;

// C-001
export const legal = "Отримувач платежів: ТОВ «ОІС-СЕРВІС», ЄДРПОУ 35670271";
