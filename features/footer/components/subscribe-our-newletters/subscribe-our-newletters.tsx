import { SocialLinks } from "@/features/footer/components/social-links/social-links";

export const SubscribeOurNewletters = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <section className="container py-3 flex flex-col justify-center items-center gap-4 md:grid md:grid-cols-12">
        <div className="md:py-10 md:col-start-1 md:col-span-5">
          <h3 className="mb-1 text-grey-900 text-xxl font-semibold">
            Subcribe our Newsletter
          </h3>
          <p className="text-gray-400 text-small text-center md:text-start">
            Pellentesque eu nibh eget mauris congue mattis mattis nec <br />
            tellus. Phasellus imperdiet elit eu magna.
          </p>
        </div>

        <div className="w-full flex items-center md:col-start-6 md:col-span-5">
          <div className="w-full flex justify-between border border-gray-500 rounded-full bg-gray-100">
            <input
              className="w-full bg-transparent py-[14px] px-6 focus:outline-none"
              type="text"
              placeholder="Your email address"
            />
            <button className="px-10 -m-[1px] bg-primary hover:bg-primary/85 rounded-full text-medium font-semibold text-white transition-colors duration-100">
              Subscribe
            </button>
          </div>
        </div>

        <SocialLinks />
      </section>
    </div>
  );
};
