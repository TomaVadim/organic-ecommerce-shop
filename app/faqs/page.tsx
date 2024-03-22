import Image from "next/image";

import { Accordion } from "@/features/components/accordion/accordion";
import farmerImage from "@/public/images/faqs/images/farmer.jpg";

export default function Faqs() {
  return (
    <section className="relative py-10 lg:pb-0 lg:pt-20 container flex gap-16">
      <div className="z-10 lg:flex-[50%] grow-0 flex flex-col justify-center gap-3">
        <h1 className="mb-5 text-h5 text-center lg:text-start lg:text-h2 font-semibold text-gray-900">
          Welcome, Let’s Talk
          <br /> About Our Ecobazar
        </h1>
        <div>
          <Accordion title="In elementum est a ante sodales iaculis.">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </Accordion>
        </div>

        <div>
          <Accordion title="Etiam lobortis massa eu nibh tempor elementum.">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </Accordion>
        </div>

        <div>
          <Accordion title="In elementum est a ante sodales iaculis.">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </Accordion>
        </div>

        <div>
          <Accordion title="Aenean quis quam nec lacus semper dignissim.">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </Accordion>
        </div>

        <div>
          <Accordion title="Nulla tincidunt eros id tempus accumsan.">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </Accordion>
        </div>
      </div>
      <div className="absolute mt-auto inset-0 z-0 lg:static lg:flex lg:items-end aspect-[741/808]">
        <Image
          className="opacity-50 lg:opacity-100"
          src={farmerImage}
          alt="farmer image"
        />
      </div>
    </section>
  );
}
