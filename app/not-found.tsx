import Image from "next/image";
import Link from "next/link";

import notFoundImage from "@/public/images/not-found/images/not-found.jpg";

export default function NotFound() {
  return (
    <section className="px-4 lg:px-0 py-10 flex flex-col items-center lg:py-20">
      <div className="aspect-[584/355] mb-8">
        <Image src={notFoundImage} alt="not found image" />
      </div>

      <h1 className="mb-5 text-center text-xxl lg:text-h3 font-semibold text-gray-900">
        Oops! page not found
      </h1>

      <p className="mb-6 text-medium text-center text-gray-500">
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
        <br /> Maecenas sagittis tortor at metus mollis
      </p>

      <button className="py-[14px] px-8 bg-primary hover:bg-primary/85 rounded-full text-white transition-colors duration-100">
        <Link href="/">Back to Home</Link>
      </button>
    </section>
  );
}
