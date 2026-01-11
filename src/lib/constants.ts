import type { HeaderProps, Product } from "../types";

export const PRODUCTS: Product[] = [
  {
    code: "21-020102-0201",
    name: "Бетон дорожный класса В5 ГОСТ 7473-2010",
    unit: "м³",
    price: 11985,
    supplier: "ТОО \"БетонПром\"",
    description: "Масса брутто: 2400 кг"
  },
  {
    code: "15-030401-0105",
    name: "Арматура А500С d12",
    unit: "т",
    price: 285000,
    supplier: "ТОО \"СтальКазахстан\"",
    description: "Класс А500С, диаметр 12мм"
  },
  {
    code: "08-015203-0308",
    name: "Цемент портландский М500 ГОСТ 31108-2016",
    unit: "т",
    price: 45000,
    supplier: "ТОО \"ЦементЗавод Алматы\"",
    description: "Навалом, насыпная плотность 1300 кг/м³"
  },
  {
    code: "12-040506-0412",
    name: "Песок речной средней крупности",
    unit: "м³",
    price: 2500,
    supplier: "ТОО \"КараганЗаки\"",
    description: "Модуль крупности 2.0-2.5"
  },
  {
    code: "18-025601-0209",
    name: "Щебень гранитный фракция 20-40мм",
    unit: "м³",
    price: 8500,
    supplier: "ТОО \"Камень Групп\"",
    description: "Марка по прочности М1200"
  }
];

export const CATALOG_TABLE_HEADERS: string[] = [
  "Код товара",
  "Наименование",
  "Единица измерения",
  "Цена (₸)",
  "Действия"
];

export const ORDER_TABLE_HEADERS: HeaderProps[] = [
  { label: "Код товара", style: "w-20" },
  { label: "Наименование и количество" },
  { label: "Поставщик" },
  { label: "Цена и сумма (₸)", style: "w-32 text-right" }
];