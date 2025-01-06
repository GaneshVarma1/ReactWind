import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Milk Chocolate Bar",
    href: "",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1675283825474-390ea83c0703?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Delicious milk chocolate bar.",
    price: "$5",
    color: "Milk Chocolate",
  },
  {
    id: 2,
    name: "Dark Chocolate Truffles",
    href: "",
    imageSrc:
      "https://www.happyfoodstube.com/wp-content/uploads/2016/12/dark-chocolate-truffles-6.jpg",
    imageAlt: "Gourmet dark chocolate truffles.",
    price: "$12",
    color: "Dark Chocolate",
  },
  {
    id: 3,
    name: "White Chocolate Bark",
    href: "",
    imageSrc:
      "https://milkhousechocolates.net/cdn/shop/files/WhiteChocolatePeppermintBarkforweb4_1200x1200.jpg?v=1695243013",
    imageAlt: "White chocolate bark with nuts and fruits.",
    price: "$8",
    color: "White Chocolate",
  },
  {
    id: 4,
    name: "Assorted Chocolate Box",
    href: "",
    imageSrc:
      "https://www.li-lacchocolates.com/cdn/shop/files/ThanksgivingBox20_2000x1500_8a31c1a6-8b5b-4f4b-91d1-891dfb183e45.jpg?v=1695077708",
    imageAlt: "Premium assorted chocolate box.",
    price: "$25",
    color: "Assorted",
  },
  {
    id: 5,
    name: "Hazelnut Chocolate",
    href: "",
    imageSrc:
      "https://harvestcraftchocolate.com/cdn/shop/files/IMG_3158.heic?v=1725981510&width=1445",
    imageAlt: "Creamy hazelnut chocolate bar.",
    price: "$7",
    color: "Hazelnut Chocolate",
  },
  {
    id: 6,
    name: "Belgian Chocolate Box",
    href: "",
    imageSrc:
      "https://media-cdn2.greatbritishchefs.com/media/5t2bqaen/history-of-belgian-chocolate-guylian.whqc_1426x713q80.jpg",
    imageAlt: "Assorted Belgian chocolate box.",
    price: "$30",
    color: "Belgian Chocolate",
  },
  {
    id: 7,
    name: "Caramel Chocolate Bar",
    href: "",
    imageSrc:
      "https://itsallgoodvegan.com/wp-content/uploads/2020/05/IMG_4365.jpg",
    imageAlt: "Caramel-filled chocolate bar.",
    price: "$10",
    color: "Caramel Chocolate",
  },
  {
    id: 8,
    name: "Mint Chocolate Bar",
    href: "",
    imageSrc:
      "https://robard.com/wp-content/uploads/2024/08/ChocolateMintBar-wCocolate.jpg.webp",
    imageAlt: "Refreshing mint chocolate bar.",
    price: "$9",
    color: "Mint Chocolate",
  },
];

export default function EcommerceCarousel() {
  return (
    <div className="bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white">
          Customers also purchased
        </h2>
        <div className="relative mt-6">
          {/* Carousel Container */}
          <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[250px] flex-none bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-56 w-full object-cover rounded-md"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href={product.href}>{product.name}</a>
                  </h3>
                  <p className="text-sm text-gray-500">{product.color}</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-gray-400">
            Slide to see more
          </p>
        </div>
      </div>
    </div>
  );
}
