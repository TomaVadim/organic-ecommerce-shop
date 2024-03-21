import { BrandLogo } from "@/features/components/brand-logo/brand-logo";

export const Navigation = () => {
  return (
    <section className="bg-gray-900">
      <div className="container py-14 grid grid-cols-12 gap-y-10 border-b border-b-gray-400">
        <article className="mb-10 md:mb-0 flex flex-col gap-4 col-start-1 col-span-12 md:row-start-1 md:col-start-1 md:col-span-3">
          <BrandLogo color="light" />
          <p className="text-small text-gray-500 m">
            Morbi cursus porttitor enim lobortis molestie.
            <br /> Duis gravida turpis dui, eget bibendum magna congue nec.
          </p>

          <div>
            <a
              href="tel:+2195550114"
              className="text-white border-b-[2px] pb-1 border-b-primary font-medium"
            >
              (219) 555-0114
            </a>
            <span className="text-gray-500 mx-4">or</span>
            <a
              href="mailto:proxy@gmail.com"
              className="text-white border-b-[2px] pb-1 border-b-primary font-medium"
            >
              Proxy@gmail.com
            </a>
          </div>
        </article>

        <nav className="row-start-2 col-start-1 col-span-6 md:row-start-1 md:col-start-5 md:col-span-2">
          <div>
            <h5 className="mb-5 text-medium font-medium text-white">
              My Account
            </h5>

            <ul className="flex flex-col gap-3 text-small text-gray-400">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Order History
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Shoping Cart
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Wishlist
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="row-start-2 col-span-6 col-start-7 md:col-start-7 md:row-start-1 md:col-span-2">
          <div>
            <h5 className="mb-5 text-medium font-medium text-white">Helps</h5>

            <ul className="flex flex-col gap-3 text-small text-gray-400">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Faqs
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Terms & Condition
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="row-start-3 col-start-1 col-span-6 md:row-start-1 md:col-start-9 md:col-span-2">
          <div>
            <h5 className="mb-5 text-medium font-medium text-white">Proxy</h5>

            <ul className="flex flex-col gap-3 text-small text-gray-400">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="row-start-3 col-start-7 col-span-6 md:row-start-1 md:col-start-11 md:col-span-2">
          <div>
            <h5 className="mb-5 text-medium font-medium text-white">
              Categories
            </h5>

            <ul className="flex flex-col gap-3 text-small text-gray-400">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Fruit & Vegetables
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Meat & Fish
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Bread & Bakery
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                  href="#"
                >
                  Beauty & Health
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};
