import { menuData } from "@/data/menuData";

import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import MainBackground from "@/components/Main-background";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
});

const MainPage = () => {
  const { menu } = menuData;

  const categoryLabels: Record<string, string> = {
    pizzas: "Pizzas",
    fries: "Fries",
    coffees: "Coffees",
    desserts: "Desserts",
    milkshakes: "Milkshakes",
    cold_drinks: "Drinks",
  };

  return (
    <section id="Main">
      <MainBackground />
      <div
        className={`${CormorantGaramond.className} pt-20 px-15 flex flex-col items-center justify-center w-full`}
      >
        <header className="text-[64px] flex flex-col items-center leading-tight pb-10">
          <span>Discover</span>
          <span>Our Dining Menu</span>
        </header>

        {/* Loop through each category in your menuData */}
        {Object.entries(menu).map(([key, items]) => (
          <section key={key} className="w-full">
            {/* Category Header */}
            <div className="w-full pt-20 px-15 flex items-center justify-between">
              <span className="text-[50px]">{categoryLabels[key]}</span>
              <Link
                href={`/${categoryLabels[key]}`}
                className="cursor-pointer hover:underline flex items-center gap-1 text-lg"
              >
                see more
                <ArrowRight className="w-4" />
              </Link>
            </div>

            {/* Items Grid */}
            <div className="w-full px-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {items.map((item) => (
                <div
                  className="flex flex-col items-center pb-5 w-full border border-[#D3CCC9]"
                  key={item.id}
                >
                  <div className=" w-full ">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="flex gap-6.25 w-7/10 flex-col py-5 items-center">
                    <p className="text-xl text-gray-600">
                      ₾{item.price.toFixed(2)}
                    </p>

                    <span className="text-[24px] font-medium">
                      {item.title}
                    </span>
                    <span className="flex text-center">{item.description}</span>
                  </div>
                  <span className="border-b-2 border-b-[#D3CCC9] w-1/3" />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default MainPage;
