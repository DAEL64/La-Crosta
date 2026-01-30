import peperroni from "@/public/assets/pizzas/peperroni.png";
import veggie from "@/public/assets/pizzas/veggie.png";
import margherita from "@/public/assets/pizzas/margarita.png";

import fries from "@/public/assets/sides/fries.png";
import mexican from "@/public/assets/sides/mexican_potatoes.png";
import jalapeno_fries from "@/public/assets/sides/fries_with_jalapeno.png";

import capuccino from "@/public/assets/hot-drinks/capuccino.png";
import espresso from "@/public/assets/hot-drinks/espresso.png";
import latte from "@/public/assets/hot-drinks/latte.png";

import ice_cream from "@/public/assets/desserts/ice_cream.png";
import croissant from "@/public/assets/desserts/croissant.png";
import chocolate_cookies from "@/public/assets/desserts/chocolate_chip_cookies.png";

import cola_classic from "@/public/assets/cold-drinks/cola_classic.png";
import sprite from "@/public/assets/cold-drinks/sprite.png";
import fanta from "@/public/assets/cold-drinks/fanta.png";

import oreo_shake from "@/public/assets/milkshakes/oreo_milkshakes.png";
import special_shake from "@/public/assets/milkshakes/special_shake.png";
import strawberry_shake from "@/public/assets/milkshakes/strawberry_shake.png";

export const menuData = {
  menu: {
    Pizzas: [
      {
        id: 1,
        title: "Pizza Margherita",
        price: 12.0,
        image: margherita,
        description:
          "A timeless Italian classic featuring our hand-stretched dough topped with vibrant tomato sauce, fresh mozzarella, and aromatic basil leaves.",
      },
      {
        id: 2,
        title: "Pizza Pepperoni",
        price: 15.0,
        image: peperroni,
        description:
          "For the spice lovers—loaded with premium spicy pepperoni slices that crisp up in our stone oven over a bed of melted mozzarella.",
      },
      {
        id: 3,
        title: "Veggie Pizza",
        price: 18.0,
        image: veggie,
        description:
          "A garden-fresh delight topped with a colorful medley of bell peppers, red onions, mushrooms, and olives for a satisfying, healthy crunch.",
      },
    ],
    Sides: [
      {
        id: 4,
        title: "Fries",
        price: 7.0,
        image: fries,
        description:
          "Golden and crispy on the outside, fluffy on the inside. Our signature fries are lightly seasoned with sea salt for the perfect side.",
      },
      {
        id: 5,
        title: "Mexican Potatoes",
        price: 10.0,
        image: mexican,
        description:
          "Rustic potato wedges tossed in a bold blend of Mexican spices, served with a zesty dipping sauce for an extra kick.",
      },
      {
        id: 6,
        title: "Fries with Jalapeno",
        price: 12.0,
        image: jalapeno_fries,
        description:
          "Our classic crispy fries elevated with a layer of melted cheese and spicy pickled jalapenos for a true flavor explosion.",
      },
    ],
    Coffees: [
      {
        id: 7,
        title: "Espresso",
        price: 5.0,
        image: espresso,
        description:
          "A concentrated, bold shot of our premium roasted Arabica beans, delivering a rich crema and a powerful caffeine punch.",
      },
      {
        id: 8,
        title: "Cappuccino",
        price: 10.0,
        image: capuccino,
        description:
          "The perfect balance of intense espresso, velvety steamed milk, and a thick layer of silky foam, topped with a dusting of cocoa.",
      },
      {
        id: 9,
        title: "Latte",
        price: 12.0,
        image: latte,
        description:
          "A smooth and creamy favorite made with a double shot of espresso and plenty of steamed milk for a mellow, comforting drink.",
      },
    ],
    Desserts: [
      {
        id: 10,
        title: "Ice Cream",
        price: 8.5,
        image: ice_cream,
        description:
          "Three generous scoops of premium artisanal ice cream. Choose from our seasonal flavors for a refreshing and sweet finish.",
      },
      {
        id: 11,
        title: "Croissant",
        price: 10.0,
        image: croissant,
        description:
          "Buttery, flaky, and golden-brown. Our French-style croissants are baked fresh every morning to ensure maximum crispness.",
      },
      {
        id: 12,
        title: "Chocolate Cookies",
        price: 12.0,
        image: chocolate_cookies,
        description:
          "Chewy, home-style cookies packed with large chunks of premium dark chocolate and a hint of sea salt for balance.",
      },
    ],
    Milkshakes: [
      {
        id: 13,
        title: "Oreo Milkshake",
        price: 14.0,
        image: oreo_shake,
        description:
          "A thick and creamy blend of vanilla bean ice cream and crushed Oreo cookies, topped with whipped cream and more cookie crumbles.",
      },
      {
        id: 14,
        title: "Strawberry Shake",
        price: 12.0,
        image: strawberry_shake,
        description:
          "Made with real farm-fresh strawberries and whole milk for a naturally sweet, nostalgic treat that’s both smooth and refreshing.",
      },
      {
        id: 15,
        title: "Special Milkshake",
        price: 18.0,
        image: special_shake,
        description:
          "Our chef's signature creation—a rotating gourmet recipe featuring unique toppings, house-made syrups, and premium garnishes.",
      },
    ],
    Drinks: [
      {
        id: 16,
        title: "Coca-Cola",
        price: 4.5,
        image: cola_classic,
        description:
          "The world's favorite sparkling soft drink, served ice-cold in a glass with a slice of lemon for ultimate refreshment.",
      },
      {
        id: 17,
        title: "Sprite",
        price: 4.5,
        image: sprite,
        description:
          "A crisp, clean, and lemon-lime flavored soda that is 100% caffeine-free and perfect for cutting through savory meals.",
      },
      {
        id: 18,
        title: "Fanta",
        price: 4.5,
        image: fanta,
        description:
          "Bright, bubbly, and bursting with fruity orange flavor. A fun and refreshing choice that pairs perfectly with our crispy fries.",
      },
    ],
  },
};
