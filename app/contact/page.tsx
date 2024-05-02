import { Map } from "@/features/components/map/map";
import { ContactsCard } from "@/features/contact/components/contacts-card/contacts-card";
import { FormFeedback } from "@/components/public/contact/form-feedback/form-feedback";

export default function Contact() {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row items-center lg:items-stretch gap-6 py-10 lg:py-20">
        <ContactsCard />

        <article className="grow px-4 py-6 lg:pt-11 lg:pb-12 lg:px-12 rounded shadow">
          <h3 className="mb-2 text-gray-900 text-center lg:text-start text-xxl font-semibold">
            Just Say Hello!
          </h3>
          <p className="mb-6 text-gray-500 text-small text-center lg:text-start">
            Do you fancy saying hi to me or you want to get started with your
            <br />
            project and you need my help? Feel free to contact me.
          </p>
          <FormFeedback />
        </article>
      </div>
      <div className="flex w-full h-[min(400px,50vh)] mb-10 lg:mb-0">
        <Map />
      </div>
    </section>
  );
}
