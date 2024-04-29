import { BrandLogo } from "@/features/components/brand-logo/brand-logo";
import { NavigationItem } from "@/features/footer/shared/interfaces/navigation-options";

interface Props {
  myAccountNavColumn: NavigationItem[];
  helpsNavColumn: NavigationItem[];
  proxyNavColumn: NavigationItem[];
  categoriesNavColumn: NavigationItem[];
}

export const Navigation = ({
  myAccountNavColumn,
  helpsNavColumn,
  proxyNavColumn,
  categoriesNavColumn,
}: Props): JSX.Element => {
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
          {myAccountNavColumn.map(({ title, links }) => (
            <div key={title}>
              <h5 className="mb-5 text-medium font-medium text-white">
                {title}
              </h5>

              <ul className="flex flex-col gap-3 text-small text-gray-400">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <a
                      className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                      href={href}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <nav className="row-start-2 col-span-6 col-start-7 md:col-start-7 md:row-start-1 md:col-span-2">
          {helpsNavColumn.map(({ title, links }) => (
            <div key={title}>
              <h5 className="mb-5 text-medium font-medium text-white">
                {title}
              </h5>

              <ul className="flex flex-col gap-3 text-small text-gray-400">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <a
                      className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                      href={href}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <nav className="row-start-3 col-start-1 col-span-6 md:row-start-1 md:col-start-9 md:col-span-2">
          {proxyNavColumn.map(({ title, links }) => (
            <div key={title}>
              <h5 className="mb-5 text-medium font-medium text-white">
                {title}
              </h5>

              <ul className="flex flex-col gap-3 text-small text-gray-400">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <a
                      className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                      href={href}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <nav className="row-start-3 col-start-7 col-span-6 md:row-start-1 md:col-start-11 md:col-span-2">
          {categoriesNavColumn.map(({ title, links }) => (
            <div key={title}>
              <h5 className="mb-5 text-medium font-medium text-white">
                {title}
              </h5>

              <ul className="flex flex-col gap-3 text-small text-gray-400">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <a
                      className="hover:text-white transition-colors duration-200 focus-visible:bg-transparent"
                      href={href}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};
