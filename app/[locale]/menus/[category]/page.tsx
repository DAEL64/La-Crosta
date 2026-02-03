import { menuData } from "@/data/menuData";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";
import { getTranslations } from "next-intl/server"; // Import for Server Components

const keyMapping: Record<string, string> = {
  all: "all",
  pizzas: "Pizzas",
  sides: "Sides",
  coldDrinks: "Drinks",
  hotDrinks: "Coffees",
  desserts: "Desserts",
  milkshakes: "Milkshakes",
};

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
});

export default async function CategoryPage({
  params,
}: {
  params: { category: string; locale: string }; // Added locale to params
}) {
  const { category } = await params;
  const { menu } = menuData;

  const tData = await getTranslations("MenuData");

  const dataKey = keyMapping[category];

  let displayItems = [];

  if (category === "all") {
    displayItems = Object.values(menu).flat();
  } else if (dataKey && menu[dataKey as keyof typeof menu]) {
    displayItems = menu[dataKey as keyof typeof menu];
  } else {
    return notFound();
  }

  return (
    <div className="w-full px-5 sm:px-15 md:px-30 pb-20">
      <div
        className={`${CormorantGaramond.className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}
      >
        {displayItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center pb-5 w-full border border-[#D3CCC9]"
          >
            <div className="w-full">
              <Image
                src={item.image}
                alt={tData(`${item.id}.title`)} 
                className="object-contain w-full"
                width={500} 
                height={500}
              />
            </div>

            <div className="flex gap-6.25 w-7/10 flex-col py-5 items-center text-center">
              <p className="text-2xl text-gray-600">₾{item.price.toFixed(2)}</p>
              <span className="text-[24px] font-medium">
                {tData(`${item.id}.title`)}
              </span>
              <span className="text-sm text-gray-500">
                {tData(`${item.id}.description`)} 
              </span>
            </div>
            <span className="border-b-2 border-b-[#D3CCC9] w-1/3" />
          </div>
        ))}
      </div>
    </div>
  );
}